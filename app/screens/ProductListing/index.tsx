import React, { useLayoutEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, TouchableOpacity, View } from 'react-native';
import AppIcon from '../../components/AppIcon';
import Container from '../../components/Container';
import ErrorView from '../../components/ErrorView';
import Loader from '../../components/Loader';
import ApiManager from '../../global/helpers/ApiManager';
import { TApiError, TApiResponse } from '../../global/helpers/constraints';
import { TProduct } from '../../global/models/TProduct';
import { GetProductListService } from '../../global/network/HomeService';
import { UserStackNavigationRootProps } from '../constraints';
import Renderitem from './renderitem';
import { getStyles } from './styles';
import HeaderButton from '../../components/HeaderButton';
import { strings } from '../../global/localization';

const ProductListingScreen: React.FC<
  UserStackNavigationRootProps<'ProductListing'>
> = props => {
  const styles = getStyles();
  const [products, setProducts] = useState<TProduct[]>([]);
  const [apiError, setApiError] = useState<TApiError>();
  const [isLoaderVisible, setIsLoaderVisible] = useState<boolean>(false);

  useLayoutEffect(() => {
    getData();
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

  const getData = () => {
    const onResponse = (response: TApiResponse<TProduct[]>) => {
      setProducts(response.data);
      setIsLoaderVisible(false)
    };

    const onError = (error: TApiError) => {
      setApiError(error);
      setIsLoaderVisible(false)
    };

    setIsLoaderVisible(true)
    ApiManager.fetch<TProduct[]>(GetProductListService())
      .then(onResponse)
      .catch(onError);
  };

  const Content = () => {

    if(isLoaderVisible) {
      return (
        <View style={styles.loaderContainer}>
          <Loader loaderText={strings.labelLoaderDetail} />
        </View>
      );
    } else if (apiError) {
      return (
        <ErrorView error={apiError} onRetryPressed={getData} />
      );
    } else {

      const Row = (itemProps: ListRenderItemInfo<TProduct>) => {
        const {item} = itemProps;
  
        const onPress = () => {
          props.navigation.navigate('ProductDetail', {
            product: item
          });
        };
  
        return <Renderitem item={item} onPress={onPress} />;
      };
  
      return (
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={Row}
          onRefresh={getData}
          refreshing={products.length > 0 && isLoaderVisible}
        />
      );
    }
  };

  return (
    <Container
      style={styles.screen}>
      {Content()}
    </Container>
  );
};

export default ProductListingScreen;
