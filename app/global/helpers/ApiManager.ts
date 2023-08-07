import axios, { AxiosError } from 'axios';
import { AppConfiguration, HTTP_CODES } from '../constants';
import { strings } from '../localization';
import { TAPI } from '../network';
import EncryptedStorageManager from './EncryptedStorageManager';
import { TApiResponse } from './constraints';

const axiosInstance = axios.create();

let number = 0;
const ApiManager = {
  async fetch<ResponseData>(api: TAPI) {
    const token = await EncryptedStorageManager.fetch('USER_ACCESS_TOKEN');

    if (token != null) {
      //attach any tokens if any
      api.headers = {
        ...api.headers,
        Authorization: `Bearer ${token}`
      };
    }
    return new Promise<TApiResponse<ResponseData>>((resolve, reject) => {
      const url = api.getUrl();
      console.log(
        Date().toString(),
        'calling api',
        api.method,
        url,
        api.params,
      );
      axiosInstance
        .request<ResponseData>({
          method: api.method,
          url: url,
          data: api.method == 'get' ? undefined : api.params,
          params: api.method != 'get' ? undefined : api.params,
          headers: api.headers,
          timeout: AppConfiguration.REQUEST_TIMOUT_INTERVAL * 1000,
          timeoutErrorMessage: strings.alertTimedOut,
        })
        .then(response => {
          console.log(
            Date(),
            'api response',
            api.getUrl(),
            response?.status,
            api.ignoreResponseLogs == false
              ? JSON.stringify(response?.data)
              : 'response hidden',
          );
          resolve(response);
        })
        .catch((error: AxiosError<any>) => {
          console.log(
            Date(),'\n\n',[
              '-----------api error-----------',
              '-----------request-----------',
              'URL: ' + api.method + ' ' + api.getUrl(),
              'PARAMS:',
              JSON.stringify(api.params),
              '-----------Response-----------',
              'status code:' + error.response?.status,
              'Response:',
              JSON.stringify(error.response?.data || {}),
              '\n\n',
            ].join('\n'),
          );
          ApiManager.handleApiError<TApiResponse<ResponseData>>(
            error,
            api,
            reject,
          );
        });
    });
  },
  handleApiError<T>(error: AxiosError<Error>, api: TAPI, onError: any) {
    if (error.message == 'Network Error') {
      onError({
        title: strings.internetConnection,
        message: strings.checkInternet,
        isNetworkError: true,
        response: error.response,
      });
      // }
    } else if (
      error.response != undefined &&
      error.response?.status == HTTP_CODES.SERVER_OFFLINE
    ) {
      // store.dispatch(ReloadMaintenanceBitAction());
    } else {
      if (
        error.response != undefined &&
        error.response?.status == HTTP_CODES.NOT_FOUND
      ) {
        // store.dispatch(ReloadMaintenanceBitAction());
      }
      let message = 'Something went wrong';
      // getting multilangual string.
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response?.data?.message
      ) {
        message = error.response?.data?.message;
      }
      onError({
        title: strings.serverResponse,
        message: message || error.message || strings.errorMessage,
        isNetworkError: false,
        alertActionButton: strings.btnAction,
        response: error.response,
        api: api,
      });
    }
  },
  setupInterceptor() {
    number = axiosInstance.interceptors.response.use(
      function (response: TApiResponse) {
        return response;
      },
      function (error: AxiosError) {
        console.log('-------Setup interceptor------- ');
        const axiosInterceptorInstance = axios.create();
        const interceptor = async (
          error: AxiosError,
          count: number,
        ): Promise<unknown> => {
          //refresh token handling
          return Promise.reject(error);
        }
      },
    );
  },
  removeInterceptor() {
    axiosInstance.interceptors.response.eject(number);
  },
};

export default ApiManager;
