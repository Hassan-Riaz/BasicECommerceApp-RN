import {persistStore} from 'redux-persist';
import store from './Store';

export default () => {
  let persistor = persistStore(store);
  return {store, persistor};
};
