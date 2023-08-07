import React from 'react';
import ForceUpdateScreen from '../screens/ForceUpdate';
import MaintenanceScreen from '../screens/Maintenance';
import StartupLoadingScreen from '../screens/StartupLoadingScreen';
import { stateSelector } from '../store/Store';
import { UserNavigator } from './stack/userStack';

export const AppNavigation: React.FC = () => {
    const isLoading = stateSelector(state => state.LoginReducer.isAppLoading);
    const isServerMaintenaceEnabled = stateSelector(state => state.UtitltyScreensReducer.isServerMaintenanceEnabled);
    const isForceUpdateEnabled = stateSelector(state => state.UtitltyScreensReducer.isForceUpdateEnabled);
    if (isLoading) {
        return <StartupLoadingScreen />;
    } else if (isForceUpdateEnabled) {
        return <ForceUpdateScreen />;
    } else if (isServerMaintenaceEnabled) {
        return <MaintenanceScreen />;
    } else {
        return <UserNavigator />;

    }
};