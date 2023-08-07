import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import { getStyles } from './styles';
import { HideAppLoadingScreenAction } from '../../store/actions/HideAppLoadingScreen';

const StartupLoadingScreen: React.FC = props => {
  let dispatch = useDispatch();
  const styles = getStyles();

  useEffect(() => {
    configureNavigation();
  }, [false]);

  const configureNavigation = () => {
    navigateToFlow();
  };

  const navigateToFlow = () => {
    dispatch(HideAppLoadingScreenAction());
  };

  return (
    <View style={styles.screen}>
      <Loader size="large" />
    </View>
  );
};

export default StartupLoadingScreen;
