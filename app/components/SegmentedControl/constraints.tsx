import { StyleProp, ViewStyle } from "react-native";

export interface TSegmentedControl {
    selectedIndex: number;
    onSelectionChange?: (index: number) => void;
    disabled?: boolean;
    values: string[];
    containerStyle?: StyleProp<ViewStyle>;;
}