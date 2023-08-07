import { StyleSheet } from "react-native";
import { AppThemeColors } from "../../hooks/useAppTheme";
import { hexToRgbA } from "../../global/common";

export const getStyles = (colors: AppThemeColors) => StyleSheet.create(
    {
        container: {
            borderRadius: 8,
            justifyContent: 'center',
            height: 40,
            backgroundColor: colors.buttonBg,
        },
        disabledBgColor: {
            backgroundColor: hexToRgbA(colors.buttonBg, 0.4)
        },
        text: {
            color: colors.white,
            fontSize: 14,
            lineHeight: 24,
        },
        touchableView: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
        image: {
            height: 20,
            width: 20,
            marginHorizontal: 5,
        },
        buttonContentContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
);
