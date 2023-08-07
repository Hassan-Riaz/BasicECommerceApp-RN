import { createStackNavigator } from '@react-navigation/stack';
import CartListingScreen from '../../screens/CartListing';
import ProductListingScreen from '../../screens/ProductListing';
import React from 'react';
import { strings } from '../../global/localization';
import { useAppTheme } from '../../hooks/useAppTheme';
import ProductDetailScreen from '../../screens/ProductDetail';
import { UserStackParamList } from '../../screens/constraints';
import { makeStyles } from '../style';

export const UserNavigator: React.FC = () => {
  const {colors} = useAppTheme();
  const style = makeStyles(colors);
  const stack = createStackNavigator<UserStackParamList>();

  return (
    <stack.Navigator
      initialRouteName={'ProductListing'}
      screenOptions={_ => ({
        headerShown: true,
        headerTitleAlign: 'center',
        headerBackTitleVisible: true,
        headerTitleStyle: style.headerStyle,
        headerBackTitle: strings.backTitle,
        headerStyle: {
          backgroundColor: colors.primary,
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerLeft: undefined,
        headerTintColor: colors.buttonBg,
        gestureEnabled: true,
      })}>
      <stack.Screen
        options={{
          headerTitle: 'Home'
        }}
        name={'ProductListing'}
        component={ProductListingScreen}
      />
      <stack.Screen
        options={{
          headerTitle: 'Cart'
        }}
        name={'CartListing'}
        component={CartListingScreen}
      />
      <stack.Screen 
        name={'ProductDetail'} 
        component={ProductDetailScreen} 
        options={{
          headerTitle: 'Detail'
        }}
      />
    </stack.Navigator>
  );
};
