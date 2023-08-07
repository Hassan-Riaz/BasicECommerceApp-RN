import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { TBasicIcon } from '../Icon/constraints';

export interface TButton {
    title?: string;
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    lefticon?: TBasicIcon;
    righticon?: TBasicIcon;
    leftImage?: ImageSourcePropType;
    rightImage?: ImageSourcePropType;
    onPress?: () => void;
    isDisabled?: boolean;
    loader?: boolean;
    mode?: 'focused' | 'blured'
}
