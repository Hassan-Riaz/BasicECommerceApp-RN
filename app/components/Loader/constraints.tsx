import { StyleProp, ViewStyle } from "react-native";

export interface TLoader {
    style?: StyleProp<ViewStyle>;
    size?: number | 'small' | 'large' | undefined;
    color?: string;
    visible?: boolean;
    loaderText?: string;
}