import React, { useEffect, useState } from 'react';
import {
    ImageBackground,
    Keyboard,
    StatusBar,
    View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import KeyboardAwareView from '../KeyboardAwareView';
import { TContainerParams } from './constraints';

import { useAppTheme } from '../../hooks/useAppTheme';
import styles from './styles';

const Container: React.FC<TContainerParams> = ({ children, style, backgroundImage, avoidKeyboard, applySafeAreaTop, applySafeAreaBottom }) => {
    
    const insets = useSafeAreaInsets();
    const [isKeyboardOpened, setKeyboardOpened] = useState<boolean>(false);
    const { colors, dark } = useAppTheme();

    useEffect(() => {
        if (avoidKeyboard) {
            let keyboardWillShow = Keyboard.addListener('keyboardWillShow', () => setKeyboardOpened(true));
            let keyboardWillHide = Keyboard.addListener('keyboardWillHide', () => setKeyboardOpened(false));
            return () => {
                keyboardWillShow.remove();
                keyboardWillHide.remove();
            }
        }
    }, [false]);

    const keyboardHandling = () => {
        if (avoidKeyboard) {
            return <KeyboardAwareView children={showContent()} />
        } else {
            return showContent();
        }
    };

    const showContent = () => {
        return (
            <View style={[styles.screen, {
                backgroundColor: backgroundImage ? undefined : colors.screenBackground,
                paddingTop: applySafeAreaTop ? insets.top : 0,
                paddingBottom: isKeyboardOpened || applySafeAreaBottom == false  ? 0 : insets.bottom
            }, style]}>
                <StatusBar barStyle={dark ? 'light-content': 'dark-content'}  />
                {children}
            </View>
        );
    };

    if (backgroundImage) {
        return (
            <ImageBackground
                style={styles.backgroundImage}
                resizeMode='cover'
                source={backgroundImage}>
                {keyboardHandling()}
            </ImageBackground>
        );
    } else {
        return keyboardHandling();
    }
};
export default Container;