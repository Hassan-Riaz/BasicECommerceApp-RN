import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Container from '../../components/Container';
import Label from '../../components/Label';
import { strings } from '../../global/localization';
import { useAppTheme } from '../../hooks/useAppTheme';
import { getStyles } from './style';


const MaintenanceScreen: React.FC = _ => {

    const { colors } = useAppTheme();
    const styles = getStyles(colors);

    return (
        <SafeAreaProvider>
            <Container
                applySafeAreaTop={true}
                style={styles.screen}>
                <View>
                    <Label style={styles.screenTitle}>{strings.maintenanceTitle}</Label>
                    <Label style={styles.description}>{strings.maintenanceInfo}</Label>
                    <Label style={styles.description}>{strings.maintenanceInfoTodo}</Label>
                </View>
            </Container>
        </SafeAreaProvider>
    );
};

export default MaintenanceScreen;