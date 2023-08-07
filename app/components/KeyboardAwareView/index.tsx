import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { TKeyboardAvoidingView } from './constraints';
import styles from './styles';


const KeyboardAwareView: React.FC<TKeyboardAvoidingView> = ({children, style}) => {
    return (
        <KeyboardAvoidingView
            style={[styles.screen, style]}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            children={children}
        />
    );
};
export default KeyboardAwareView;