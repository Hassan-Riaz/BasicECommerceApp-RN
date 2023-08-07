import React from 'react';
import {
    ViewStyle,
    ImageSourcePropType,
    StyleProp,
} from 'react-native';

export interface TContainerParams {
    style?: StyleProp<ViewStyle>;
    backgroundImage?: ImageSourcePropType;
    avoidKeyboard?: boolean;
    applySafeAreaTop?: boolean; // default = false // as most of screens have header
    applySafeAreaBottom?: boolean; // default = true
    children: React.ReactNode;
}