import { StyleSheet } from "react-native";
import { AppThemeColors } from "../../hooks/useAppTheme";

export const getStyles = (colors: AppThemeColors) => StyleSheet.create({
    container: {

    },
    textField: {
        marginVertical: 5,
    },
    label: {
        color: colors.grey,
        fontSize: 14,
    }
})