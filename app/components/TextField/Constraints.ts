import React from "react";
import { KeyboardType, ReturnKeyTypeOptions, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface TTextField extends TBasicTextField {
    style?: StyleProp<ViewStyle>;
    keyboardType: KeyboardType;
    textAlign?: 'left' | 'center' | 'right';
    onSubmitEditing?: () => void;
    returnKeyType?: ReturnKeyTypeOptions;
    secureTextEntry?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    masking?: TTextFieldMaking;
    errorMessage?: string;
    characterLimit?: number;
    leftView?: React.ReactNode;
    showPasswordToggleButton?: boolean;
    TextFieldStyle?: StyleProp<TextStyle>;
    rightView?: React.ReactNode;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
    multiline?: boolean;
    textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
    convertToHumanReadableFormat?: boolean;
}

export interface TTextFieldRef {
    /**
    * Returns if the input is currently focused.
    */
    isFocused: () => boolean;

    /**
     * Removes all text from the input.
     */
    /**
    * Requests focus for the given input or view. The exact behavior triggered
    * will depend on the platform and type of view.
    */
    focus(): void;

    /**
     * Removes focus from an input or view. This is the opposite of `focus()`.
     */
    blur(): void;
}

export interface TBasicTextField {
    value: string;
    onChangeText?: (text: string) => void;
    isEditable?: boolean;
    placeholder?: string;
}

export type TTextFieldMaking = 'number' | 'alphabetsOnly' | 'alphaNumberic';