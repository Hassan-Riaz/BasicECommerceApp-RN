import { DisplayAppLoadingScreenActionKey } from '../../actions/DisplayAppLoadingScreen';
import { SetInternetConnectActionKey } from '../../actions/SetInternetConnectAction';
import { processDisplayAppLoadingScreen } from './processDisplayAppLoadingScreen';
import { processInternetConnection } from './processInternetConnection';

export interface TLoginRootState {
  isInternetConnect: boolean;
  isLoggedIn: boolean;
  isAppLoading: boolean;
}

const initialState: TLoginRootState = {
  isInternetConnect: true,
  isLoggedIn: false,
  isAppLoading: false
};

const LoginReducer = (state = initialState, action: any): TLoginRootState => {
  switch (action.type) {
    case DisplayAppLoadingScreenActionKey:
      return processDisplayAppLoadingScreen(state, action);
    case SetInternetConnectActionKey:
      return processInternetConnection(state, action);
    default:
      break;
  }
  return state;
};

export default LoginReducer;
