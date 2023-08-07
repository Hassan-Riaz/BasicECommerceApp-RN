import {TProduct} from '../../global/models/TProduct';

export interface TTemplateParams {}

export interface TRenderItem {
  item: TProduct;
  onPress: () => void;
}
