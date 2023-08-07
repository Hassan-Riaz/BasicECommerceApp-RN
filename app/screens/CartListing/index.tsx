import { TCartItem } from 'app/global/models/TCartItem';
import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import Container from '../../components/Container';
import { stateSelector } from '../../store/Store';
import { UserStackNavigationRootProps } from '../constraints';
import Renderitem from './renderitem';
import { getStyles } from './styles';
import { useForceUpdate } from '../../hooks/useForceUpdate';

const CartListingScreen: React.FC<UserStackNavigationRootProps<'CartListing'>> = props => {
  const styles = getStyles();
  const products = stateSelector(state => state.CartReducer.products);
  const forceUpdate = useForceUpdate();

  const Content = () => {

    const Row = (itemProps: ListRenderItemInfo<TCartItem>) => {
      const {item} = itemProps;

      const onPress = () => {
        props.navigation.navigate('ProductDetail', {
          product: item.product
        });
      };

      return <Renderitem onUpdate={forceUpdate} item={item} onPress={onPress} />;
    };

    return (
      <FlatList
        data={products}
        keyExtractor={item => item.product.id.toString()}
        renderItem={Row}
      />
    );
  };

  return (
    <Container
      style={styles.screen}>
      {Content()}
    </Container>
  );
};

export default CartListingScreen;
