import { StyleSheet } from "react-native";
import { AppThemeColors } from "../../hooks/useAppTheme";

export const getStyles = (colors: AppThemeColors) => StyleSheet.create(
    {
        container: {
            backgroundColor: colors.textFieldBackground,
            borderRadius: 8,
            flexDirection: 'row',
            height: 50,
            overflow: 'hidden'
        },
        textField: {
            height: '100%',
            paddingHorizontal: 10,
            flex: 1,
        },
        rightIconTouchableView: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 7
        }
    }
);
