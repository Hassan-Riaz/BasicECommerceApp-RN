import { Theme, useTheme } from "@react-navigation/native";
import { darkTheme } from "../global/constants";

export type AppThemeColors = typeof darkTheme.colors;

export interface AppTheme extends Theme {
    colors: AppThemeColors
}

export const useAppTheme = (): AppTheme => {
    const theme = useTheme() as AppTheme;
    return theme;
}