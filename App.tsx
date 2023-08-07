/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { onStartUp } from './app/global/common';
import {
  darkTheme,
  lightTheme,
} from './app/global/constants';
import AppManager from './app/global/helpers/AppManager';
import InternetReachabilityManager from './app/global/helpers/InternetReachabilityManager';
import { AppNavigation } from './app/navigation';
import store, { stateSelector } from './app/store/Store';
import { SetInternetConnectAction } from './app/store/actions/SetInternetConnectAction';
import { SetThemeSettingAction } from './app/store/actions/SetThemeSettingAction';
import persist from './app/store/persist';
import ToastView from './app/components/ToastView';

function App(): JSX.Element {

  onStartUp('Dev');

  const _ = InternetReachabilityManager.addEventListener(state => {
    const isConnected = state.isConnected || false;
    if (store.getState().LoginReducer.isInternetConnect != isConnected) {
      store.dispatch(SetInternetConnectAction(isConnected));
    }
  });

  const Navigation = () => {

    const themeState = stateSelector(
      state => state.UtitltyScreensReducer.theme,
    );

    const getTheme = () => {
      if (themeState === 'light') {
        return lightTheme;
      } else {
        return darkTheme;
      }
    };

    useEffect(()=>{
      AppManager.onMigrationNeeded(onExecuteMigration);
    }, [false])


    const onExecuteMigration = () => { };

    const ThemeHandlingView = () => {
      const systemTheme = useColorScheme() || 'dark';

      useEffect(()=>{
        const isThemeSystemDefault = store.getState().UtitltyScreensReducer.isThemeSystemDefault;
        if (isThemeSystemDefault) {
          const theme = store.getState().UtitltyScreensReducer.theme;
          if (theme == 'dark' && systemTheme == 'light' || theme == 'light' && systemTheme == 'dark') {
            store.dispatch(SetThemeSettingAction({
              isSystemDefault: true,
              theme: systemTheme
            }));
          }
        }
      }, [systemTheme]);
      
      return (<View/>);

    }
  
    return (
      <NavigationContainer theme={getTheme()}>
        <AppNavigation />
        <ToastView />
        <ThemeHandlingView />
      </NavigationContainer>
    );
  };

  return (
    <PersistGate loading={true} persistor={persist().persistor}>
      <Provider store={persist().store}>
        <Navigation />
      </Provider>
    </PersistGate>
  );
}

export default App;
