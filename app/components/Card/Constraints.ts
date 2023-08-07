import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface TCard {
    title?: string;
    style?: StyleProp<ViewStyle>;
    shadow?: boolean;
    children?: React.ReactNode;
    titleStyle?: 'centeral' | 'left'
}