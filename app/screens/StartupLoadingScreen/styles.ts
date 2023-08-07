import { StyleSheet } from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";

export const getStyles = () => {
    const { colors } = useAppTheme();
    return StyleSheet.create({
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.screenColor
        }
    });
}