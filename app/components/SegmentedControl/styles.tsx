import { StyleSheet } from "react-native";
import { AppThemeColors } from "../../hooks/useAppTheme";

export const getStyles = (colors: AppThemeColors) => StyleSheet.create({
    container: {
        width: '100%'
    },
    tabsContainerStyle: {
        backgroundColor: colors.segmentControlBackground,
        padding: 5,
        borderRadius: 7
    },
    tabStyle: {
        backgroundColor: colors.segmentControlBackground,
        borderWidth: 0,
        borderColor: colors.segmentControlBackground,
        paddingVertical: 10
    },
    tabTextStyle: {
        color: colors.blackText,
        // fontFamily: AppFonts.Montserrat.name
    },
    activeTabStyle: {
        backgroundColor: colors.white,
        borderRadius: 5,
        color: colors.blackText,
        // fontFamily: AppFonts.Montserrat.name
    },
    activeTabTextStyle: {
        color: colors.blackText,
        borderRadius: 10,
        // fontFamily: AppFonts.Montserrat.name
    },
})