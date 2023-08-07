import React from 'react';
import { Linking, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Label from '../../components/Label';
import AppManager from '../../global/helpers/AppManager';
import { strings } from '../../global/localization';
import { useAppTheme } from '../../hooks/useAppTheme';
import { getStyles } from './styles';

const ForceUpdateScreen: React.FC = _ => {

    const { colors } = useAppTheme();
    const styles = getStyles(colors);

    const UpdateButton = () => {

        const onPress = () => {
            Linking.openURL(AppManager.getAppLink());
        }

        return (
            <Button
                title={strings.btnActionUpdate}
                style={styles.updateButton}
                onPress={onPress}
            />
        );
    }

    return (
        <SafeAreaProvider>
            <Container
                applySafeAreaTop={true}
                style={styles.screen}>
                <View>
                    <Label style={styles.screenTitle}>{strings.forceUpdateTitle}</Label>
                    <Label style={styles.description}>{strings.forceUpdateInfo}</Label>
                    <Label style={styles.description}>{strings.forceUpdateInfoTodo}</Label>
                </View>
                <View style={styles.actionButtonContainer}>
                    <UpdateButton />
                </View>
            </Container>
        </SafeAreaProvider>
    );
};

export default ForceUpdateScreen;