import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppThemeColors } from "../../hooks/useAppTheme";

export const getStyles = (colors: AppThemeColors) => StyleSheet.create({
    container: {
        marginVertical: 5
    },
    message: {
        color: colors.errorTextColor,
        fontSize: hp(1.5),
        fontWeight: '500',
        letterSpacing: 0.6
    }
});