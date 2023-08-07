import {ViewStyle, StyleProp} from 'react-native';

export type TIconCategory =
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'Zocial'
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'FontAwesome5Pro'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons';
export interface TIcon extends TBasicIcon {
  style?: StyleProp<ViewStyle>;
  size: number;
  color?: string;
}

export interface TBasicIcon {
  category: TIconCategory;
  name: string;
}
