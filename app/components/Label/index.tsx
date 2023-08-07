import React from 'react';
import {ReactNode} from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import {TLabel} from './constraints';
import {AppFonts} from '../../global/constants';
import TextFormatter from '../../global/helpers/TextFormatter';
import { getStyles } from './styles';
import { useAppTheme } from '../../hooks/useAppTheme';

const Label: React.FC<TLabel> = props => {

  const {colors} = useAppTheme();
  const styles = getStyles(colors);
  const getText = (): ReactNode => {
    if (typeof props.children === 'string' && props.convertToReadableFormat) {
      return TextFormatter.format(props.children);
    } else {
      return props.children;
    }
  };

  return (
    <Text
      style={[styles.label, props.style]}
      children={getText()}
      numberOfLines={props.numberOfLines}
    />
  );
};
export default Label;
