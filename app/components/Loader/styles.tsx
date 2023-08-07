import { StyleSheet } from "react-native";
import { AppThemeColors } from "../../hooks/useAppTheme";

export const getStyles = (colors: AppThemeColors) => StyleSheet.create(
    {
        loader: {

        },
        container: {
            justifyContent: 'center',
            alignItems: 'center'
        }, 
        label:{
            color: colors.mediumGrey,
            marginTop: 10
        }
    }
);
