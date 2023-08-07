import {StyleSheet} from 'react-native';
import { AppThemeColors } from '../../hooks/useAppTheme';

export const getStyles = (colors: AppThemeColors) => StyleSheet.create({
  label: {
    color: colors.text
  }
});
