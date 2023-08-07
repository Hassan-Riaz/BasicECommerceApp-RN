import React from 'react';
import {
    View,
} from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import Label from '../Label';
import { TCard } from './Constraints';
import { getStyles } from './styles';

const Card: React.FC<TCard> = ({ style, title, children, shadow, titleStyle }) => {

    const {colors} = useAppTheme();
    const styles = getStyles(colors);
    
    const showTitleView = () => {
        if (title) {
            return (
                <Label
                    style={titleStyle == 'left' ? styles.leftTitleText :  styles.titleText}
                    children={title}
                />
            );
        }
    };

    const showContent = () => {
        return (
            <View
                style={styles.contentContainer}
                children={children}
            />
        );
    };

    return (
        <View style={[styles.container, shadow && {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            backgroundColor: 'white',
            elevation: 4,
        }, style]}>
            {showTitleView()}
            {showContent()}
        </View>
    );
};
export default Card;