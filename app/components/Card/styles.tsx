import { StyleSheet } from "react-native";
import { AppThemeColors } from "../../hooks/useAppTheme";

export const getStyles = (colors: AppThemeColors) => StyleSheet.create(
    {
        container: {
            backgroundColor: colors.cardBackground,
            padding: '7%',
            borderRadius: 10,
        },
        contentContainer: {
        },
        titleContainer: {
            marginBottom: 15,
        },
        titleText: {
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '600',
            marginBottom: 15
        },
        leftTitleText: {
            fontWeight: '600',
            fontSize: 14,
            color: '#808080',
            marginVertical: 5,
        }
    }
);
