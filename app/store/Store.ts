import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { persistReducer } from 'redux-persist';
import LoginReducer from './reducers/LoginReducer';
import UtlityScreensReducer from './reducers/UtitltyScreensReducer';
import CartReducer from "./reducers/CartReducer";

export const rootReducer = combineReducers({
  LoginReducer: LoginReducer,
  UtitltyScreensReducer: UtlityScreensReducer,
  CartReducer: CartReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['LoginReducer', 'UtitltyScreensReducer', 'CartReducer'],
};
// const store = createStore(rootReducer);
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)

export type TCombineReducerState = ReturnType<typeof rootReducer>

export function stateSelector<TState = TCombineReducerState, TSelected = unknown>(
  selector: (state: TState) => TSelected,
): TSelected {
  return useSelector(selector);
};

export const storeDispatch = (action: any) => {
  return store.dispatch(action)
}

export default store;