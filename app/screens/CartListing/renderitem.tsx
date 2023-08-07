import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import CacheImage from '../../components/CacheImage';
import Label from '../../components/Label';
import { ModifyCartItemQuantityAction } from '../../store/actions/ModifyCartItemQuantityAction';
import { TRenderItem } from './constraints';
import { getStyles } from './styles';
import { strings } from '../../global/localization';
import { stringFormat } from '../../global/common';

const Renderitem: React.FC<TRenderItem> = props => {
  const {item} = props;
  const { product, quantity } = item;
  const styles = getStyles();
  const dispatch = useDispatch();

  const setQuantity = (val: number) => {
    dispatch(ModifyCartItemQuantityAction(product.id, val))
    props.onUpdate();
  }

  const BottomView = () => {

    const DecreaseButton = () => {

      const onPress = () => {
        if(quantity > 1) {
          setQuantity(quantity - 1);
        }
      }

      return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.quantityStepperTouchable}>
            <Label style={styles.quantityStepperLabel}>-</Label>
          </TouchableOpacity>
      );
    }

    const IncreaseButton = () => {

      const onPress = () => {
        setQuantity(quantity + 1);
      }

      return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.quantityStepperTouchable}>
            <Label style={styles.quantityStepperLabel}>+</Label>
          </TouchableOpacity>
      );
    }


    return (
      <View style={styles.bottomStepperContainer}>
        <Label style={styles.quantityPlaceholderLabel}>{strings.labelQuality}</Label>
      <DecreaseButton />
      <View style={styles.quantityInfoContainer}>
        <Label style={styles.quantityLabel}>{quantity}</Label>
      </View>
      <IncreaseButton />
    </View>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={styles.renderItemMainContainer}>
      <CacheImage
        style={styles.renderItemProductImage}
        resizeMode="cover"
        uri={product.img}
      />
    <View
      style={styles.renderItemTextContainer}>
      <Label
        style={styles.renderItemTitle}>
        {product.name}
      </Label>
      <Label
          style={styles.renderItemText}>
          {stringFormat(strings.labelColorPlaceholder, product.colour)}
        </Label>
        <Label
          style={styles.renderItemText}>
            {stringFormat(strings.labelPricePlaceholder, product.price)}
        </Label>
        <BottomView />
      </View>
    </TouchableOpacity>
  );
};

export default Renderitem;
