import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import Label from '../Label';
import { TLoader } from './constraints';
import { getStyles } from './styles';

const Loader: React.FC<TLoader> = props => {

    const {colors} = useAppTheme();
    const styles = getStyles(colors);
    
    if (props.visible != false) {
        return (
            <>
                <ActivityIndicator
                    style={[styles.loader, props.style]}
                    size={props.size}
                    color={props.color || colors.loaderColor}
                />
                {
                    props.loaderText &&
                    <Label style={styles.label}>{props.loaderText}</Label>
                }
            </>
        );
    }
    return null;
};

export default Loader;