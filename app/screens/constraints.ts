import { NavigationProp, RouteProp } from '@react-navigation/native';
import { TProductDetail } from './ProductDetail/constraints';

export type UserStackParamList = {
  ProductListing: undefined;
  CartListing: undefined;
  ProductDetail: TProductDetail;
};

export type UserNavigationProp<T extends keyof UserStackParamList> =
  NavigationProp<UserStackParamList, T>;

export type UserStackNavigationRootProps<T extends keyof UserStackParamList> = {
  route: RouteProp<UserStackParamList, T>;
  navigation: NavigationProp<UserStackParamList, T>;
};