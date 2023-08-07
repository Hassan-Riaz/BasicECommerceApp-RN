import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { AppThemeColors } from "../../hooks/useAppTheme";

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    noInternetContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    noInternetLabel: {
      color: colors.text,
      fontSize: heightPercentageToDP(2),
      marginTop: '5%',
    },
    noInternetIcon: {
      height: heightPercentageToDP(5),
    },
    retryButton: {
      paddingHorizontal: '5%',
      height: 35,
      borderRadius: 5,
      marginTop: 10,
    },
  });
