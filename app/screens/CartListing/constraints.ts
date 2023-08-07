import { TCartItem } from '../../global/models/TCartItem';

export interface TTemplateParams {}

export interface TRenderItem {
  item: TCartItem;
  onPress: () => void;
  onUpdate: ()=>void;
}
