import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppThemeColors } from "../../hooks/useAppTheme";

export const getStyles = (colors: AppThemeColors) => StyleSheet.create({
    screen: {
        height: hp('100%'),
        justifyContent: 'center',
        paddingHorizontal: '5%',
        backgroundColor: colors.screenColor
    },
    screenTitle: {
        fontSize: hp(3),
        color: colors.text,
        fontWeight: '600',
        textAlign: 'center',
    },
    description: {
        fontSize: hp(2.5),
        color: colors.text,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '2%'
    },
});