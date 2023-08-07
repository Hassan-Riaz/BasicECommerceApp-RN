import { StyleSheet, Platform } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AppThemeColors } from "../hooks/useAppTheme";

export const makeStyles = (colors: AppThemeColors) => StyleSheet.create({
  headerTitle: {
    height: hp(10),
  },
  header: {
    backgroundColor: colors.navBg,
  },
  headerLeftTouchableView: {
    paddingHorizontal: wp(7),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRightTouchableView: {
    paddingHorizontal: wp(6),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRightMessageBadgeCountContainer: {
    position: 'absolute',
    top: '10%',
    right: '20%',
    alignItems: 'center',
  },
  headerRightMessageBadgeCountView: {
    top: 0,
    flexBasis: 1,
    right: 2,
    aspectRatio: 1,
    borderRadius: 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    flexShrink: 1,
  },
  headerRightMessageBadgeLabel: {
    fontSize: hp(1.5),
    fontWeight: '700',
    color: 'white',
  },
  profileContainer: {
    borderColor: colors.primary,
    borderWidth: 2.5,
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileImage: {
    width: hp(4),
    aspectRatio: 1,
    backgroundColor: 'white',
  },
  profilePictureInitialLabel: {
    fontSize: hp(1.5),
    fontWeight: '700',
  },
  profilePictureInitialContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    paddingVertical: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: hp(2),
  },
  tabBar: {
    backgroundColor: colors.header,
    borderTopLeftRadius: hp(4.2),
    borderTopRightRadius: hp(4.2),
    shadowColor: "#000",
    // iOS
    shadowOffset: {
      width: 0,
      height: -8,
    },
    //android
    elevation: 6,
    shadowOpacity: 0.09,
    shadowRadius: 5.65,
    height: 100,
    paddingBottom: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  tabLabel: {
    marginBottom: 25,
  },
  tabBarIcon: {
    marginTop: 20,
  },
  tabBackground: {
    marginBottom: 40,
    height: '100%',
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  headerStyle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
});