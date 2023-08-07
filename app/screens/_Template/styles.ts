import { StyleSheet } from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";

export const getStyles = () => {
    const { colors } = useAppTheme();
    return StyleSheet.create({
        screen: {
            justifyContent: 'flex-start',
            backgroundColor: colors.screenColor,
        }
    });
}