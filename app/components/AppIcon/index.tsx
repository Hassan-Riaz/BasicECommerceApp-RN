import React from 'react';
import styles from './styles';
import {TIcon} from './constraints';
import {AllVectorIcons} from './AllVectorIcons';

const AppIcon: React.FC<TIcon> = props => {
  const Icon = AllVectorIcons[props.category];
  return (
    <Icon
      color={props.color}
      name={props.name}
      size={props.size}
      style={[styles.icon, props.style]}
    />
  );
};
export default AppIcon;
