import { AddItemToCartAction } from '../../store/actions/AddItemToCartAction';
import React, { useLayoutEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import CacheImage from '../../components/CacheImage';
import Container from '../../components/Container';
import Label from '../../components/Label';
import { UserStackNavigationRootProps } from '../constraints';
import { getStyles } from './styles';
import ToastManager from '../../global/helpers/ToastManager';
import HeaderButton from '../../components/HeaderButton';
import AppIcon from '../../components/AppIcon';
import { strings } from '../../global/localization';
import { stringFormat } from '../../global/common';

const ProductDetailScreen: React.FC<
  UserStackNavigationRootProps<'ProductDetail'>
> = props => {
  const styles = getStyles();
  const {product} = props.route.params;
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  useLayoutEffect(()=>{
    props.navigation.setOptions({
      headerRight: HeaderRightButton
    })
  }, []);

  const HeaderRightButton = () => {

    const onPress = () => {
      props.navigation.navigate('CartListing');
    }
    
    return (
      <HeaderButton onPress={onPress}>
        <AppIcon name='shopping-cart' category='Entypo' size={25} color='white' />
      </HeaderButton>
    );
  }

  const Content = () => {

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

      const AddToCartButton = () => {

        const onPress = () => {
          setQuantity(1);
          dispatch(AddItemToCartAction(product, quantity))
          ToastManager.showSuccessToast(strings.toastSuccessAddedToCartTitle, strings.toastSuccessAddedToCartDescription);
        }

        return (
          <Button title={strings.btnActionAddToCart} onPress={onPress} />
        );
      }

      return (
        <View style={styles.bottomContainer}>
          <View style={styles.bottomStepperContainer}>
            <Label style={styles.quantityPlaceholderLabel}>{strings.labelQuality}</Label>
            <DecreaseButton />
            <View style={styles.quantityInfoContainer}>
              <Label style={styles.quantityLabel}>{quantity}</Label>
            </View>
            <IncreaseButton />
          </View>
          <AddToCartButton />
        </View>
      );
    }

    return (
      <View style={styles.contentSuperView}>
        <ScrollView>
          <CacheImage
            style={styles.coverImage}
            resizeMode="cover"
            uri={product.img}
          />
          <View style={styles.contentContainer}>
            <Label style={styles.nameLabel}>{product.name}</Label>
            <Label style={styles.infoLabel}> {stringFormat(strings.labelColorPlaceholder, product.colour)}</Label>
            <Label style={styles.infoLabel}> {stringFormat(strings.labelPricePlaceholder, product.price)}</Label>
          </View>
        </ScrollView>
        <BottomView />
      </View>
    );
  }

  return <Container style={styles.screen}>
    {Content()}
  </Container>;
};

export default ProductDetailScreen;
