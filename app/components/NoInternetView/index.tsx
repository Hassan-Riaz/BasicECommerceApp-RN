import React from 'react';
import {
    View
} from 'react-native';
import { strings } from '../../global/localization';
import { useAppTheme } from '../../hooks/useAppTheme';
import AppIcon from '../AppIcon';
import Button from '../Button';
import Label from '../Label';
import { TNoInternetView } from './constraints';
import { getStyles } from './styles';

const NoInternetView: React.FC<TNoInternetView> = props => {

    const {colors} = useAppTheme();
    const styles = getStyles(colors);

    return (
        <View style={styles.noInternetContainer}>
            <AppIcon name='wifi-off' category='Feather' size={styles.noInternetIcon.height} />
            <Label style={styles.noInternetLabel}>{strings.appcheckinternet}</Label>
            <Button
                title={strings.btnRetry}
                style={styles.retryButton}
                onPress={props.onRetryPressed}
            />
        </View>
    );
};

export default NoInternetView;