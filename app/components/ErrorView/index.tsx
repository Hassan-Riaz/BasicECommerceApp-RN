import React from 'react';
import {
    View
} from 'react-native';
import Label from '../Label';
import {getStyles} from './styles';
import Button from '../Button';
import AppIcon from '../AppIcon';
import { TErrorView } from './constraints';
import { TBasicIcon } from '../AppIcon/constraints';
import { strings } from '../../global/localization';
import { useAppTheme } from '../../hooks/useAppTheme';

const ErrorView: React.FC<TErrorView> = props => {

    const {colors} = useAppTheme();
    const styles = getStyles(colors);

    const getText = () => {
        console.log(props.error?.message, ' error message')
        if (props.error?.isNetworkError) {
            return strings.appcheckinternet;
        }
        return props.error?.message || strings.errorMessage;
    }

    const getIcon = (): TBasicIcon => {
        if (props.error?.isNetworkError) {
            return ({
                name: 'wifi-off',
                category: 'Feather'
            });
        } else {
            return ({
                name: 'warning',
                category: 'AntDesign'
            });
        }
    }

    return (
        <View style={styles.noInternetContainer}>
            <AppIcon {...getIcon()} color={colors.text} size={styles.noInternetIcon.height} />
            <Label style={styles.noInternetLabel}>{getText()}</Label>
            <Button
                title={strings.btnRetry}
                style={styles.retryButton}
                onPress={props.onRetryPressed}
            />
        </View>
    );
};

export default ErrorView;