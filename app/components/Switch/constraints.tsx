import { StyleProp, ViewStyle } from "react-native";

export interface TComponent {
    value: boolean;
    onValueChange?: (value: boolean) => void;
    style?: StyleProp<ViewStyle>
    disabled? : boolean
}