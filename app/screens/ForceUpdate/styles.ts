import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { AppThemeColors } from "../../hooks/useAppTheme";

export const getStyles = (colors: AppThemeColors) => StyleSheet.create({
    screen: {
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: '5%'
    },
    screenTitle: {
        fontSize: heightPercentageToDP(3),
        color: colors.text,
        fontWeight: '600',
        textAlign: 'center'
    },
    description: {
        fontSize: heightPercentageToDP(2.5),
        color: colors.text,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '5%'
    },
    actionButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%'
    },
    updateButton: {
        width: '50%'
    }
});