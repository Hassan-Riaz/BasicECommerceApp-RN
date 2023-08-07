import React from 'react';
import CacheImage from '../../components/CacheImage';
import Label from '../../components/Label';
import {TouchableOpacity, View} from 'react-native';
import {TRenderItem} from './constraints';
import { getStyles } from './styles';
import { stringFormat } from '../../global/common';
import { strings } from '../../global/localization';

const Renderitem: React.FC<TRenderItem> = props => {
  const {item} = props;
  const styles = getStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={styles.renderItemMainContainer}>
      <CacheImage
        style={styles.renderItemProductImage}
        resizeMode="cover"
        uri={item.img}
      />
      <View
        style={styles.renderItemTextContainer}>
        <Label
          style={styles.renderItemTitle}>
          {item.name}
        </Label>
        <Label
          style={styles.renderItemText}>
          {stringFormat(strings.labelColorPlaceholder, item.colour)}
        </Label>
        <Label
          style={styles.renderItemText}>
            {stringFormat(strings.labelPricePlaceholder, item.price)}
        </Label>
      </View>
    </TouchableOpacity>
  );
};

export default Renderitem;
