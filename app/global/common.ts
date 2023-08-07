import { createNavigationContainerRef } from '@react-navigation/native';
import { Alert } from 'react-native';
import ApiManager from './helpers/ApiManager';
import { TApiError } from './helpers/constraints';
import { strings } from './localization';
import { TErrorResponse } from './models/TGenericDto';

export let CURRENT_ENVIRONMENT: Environment;

export type TEnvironmentType = 'Dev';

class Environment {
  DOMAIN_URL: string;
  API_URL: string;
  environment: TEnvironmentType;
  
  constructor(environment: TEnvironmentType) {
    switch (environment) {
      case 'Dev':
        this.DOMAIN_URL = DOMAIN_URL_TYPES.dev;
        break;
    }
    this.environment = environment;
    this.API_URL = this.DOMAIN_URL + 'benirvingplt/';
  }
}

export const DOMAIN_URL_TYPES = {
  dev: 'https://my-json-server.typicode.com/',
};

/**
 * Sets initial environment of the application
 **/
export function setInitialEnvironment(environemt: TEnvironmentType) {
  CURRENT_ENVIRONMENT = new Environment(environemt);
}

/**
 * Configure the application environment and other things at starting of application
 **/

export function onStartUp(environment: TEnvironmentType) {
  setInitialEnvironment(environment);
  ApiManager.setupInterceptor();
}

export const askConfirmationAlert = (
  title: string,
  message: string,
  onConfirm: () => void,
  isDestructive = true,
  confirmationText: string = strings.btnActionConfirm,
  onCancel?: () => void,
) => {
  setTimeout(() => {
    Alert.alert(title, message, [
      {
        text: strings.btnCancel,
        onPress: onCancel,
      },
      {
        text: confirmationText,
        style: isDestructive ? 'destructive' : 'default',
        // Here we will call api for locker status update
        onPress: onConfirm,
      },
    ]);
  }, 100);
};

export const showSomethingWentWrongAlert = (onPressOK?: () => void) => {
  Alert.alert(
    strings.alertServerResponseTitle,
    strings.alertGenericDescription,
    [
      {
        text: strings.btnAction,
        onPress: onPressOK,
      },
    ],
  );
};

export const handleApiError = (
  error: TApiError<TErrorResponse>,
  onRetry?: () => void,
) => {
  console.log('handleApiError', error);
  setTimeout(() => {
    if (error.isNetworkError) {
      Alert.alert(error.title, error.response?.data?.message || error.message, [
        {
          text: strings.btnCancel,
        },
        {
          text: strings.btnRetry,
          onPress: () => {
            error.retryAction && error.retryAction();
            onRetry && onRetry();
          },
        },
      ]);
    } else {
      showAlert(error.title, error.message);
    }
  }, 10);
};

export const showAlert = (
  title: string,
  message?: string,
  onOk?: () => void,
) => {
  setTimeout(() => {
    Alert.alert(title, message, [
      {
        text: strings.btnAction,
        onPress: onOk,
      },
    ]);
  }, 100);
};

export const stringFormat = (text: string, ...args: any[]) => {
  return text.replace(/\{\{|\}\}|\{(\d+)\}/g, function (curlyBrack, index) {
    return curlyBrack == '{{' ? '{' : curlyBrack == '}}' ? '}' : args[index];
  });
};

export const replaceEscapeSequences = (text: string) => {
  return text.split('\\n').join('\n').trim();
};

export function getURlQueryParams<T = any>(url: string) {
  let urlSplits = url.split('?');
  let dic = {};
  if (urlSplits.length > 1) {
    const query = urlSplits[1];
    const params = query.split('&');
    dic = Object.assign(
      {},
      ...params.map(x => {
        const components = x.split('=');
        return {[components[0]]: components[1]};
      }),
    );
  }
  return dic as T;
}

export const hexToRgbA = (hex: string, opacity: number) => {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ',',
    )},${opacity})`;
  }
  throw new Error('Bad Hex');
};
export const navigationContainerRef = createNavigationContainerRef();