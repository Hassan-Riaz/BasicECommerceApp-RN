import { StyleSheet } from "react-native";
import { AppThemeColors } from "../../hooks/useAppTheme";

export const getStyles = (colors: AppThemeColors) => StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        aspectRatio: 1,
        overflow: 'hidden'
    },
    loader: {
        position: 'absolute',
        zIndex: 100,
        elevation: 100
    },
    image: {
        height: '100%',
        width: '100%',
    }
})