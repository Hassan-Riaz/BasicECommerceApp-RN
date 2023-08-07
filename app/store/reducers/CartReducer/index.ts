import { ModifyCartItemQuantityActionKey } from '../../../store/actions/ModifyCartItemQuantityAction';
import { TCartItem } from '../../../global/models/TCartItem';
import { AddItemToCartActionKey } from '../../../store/actions/AddItemToCartAction';
import { RemoveItemFromCartActionKey } from '../../../store/actions/RemoveItemFromCartAction';
import { processAddItemToCartAction } from './processAddItemToCartAction';
import { processModifyCartItemQuantityAction } from './processModifyCartItemQuantityAction';
import { processRemoveItemFromCartAction } from './processRemoveItemFromCartAction';

export interface TCartRootState {
  products: TCartItem[];
}

const initialState: TCartRootState = {
  products: []
};

const CartReducer = (state = initialState, action: any): TCartRootState => {
  switch (action.type) {
    case AddItemToCartActionKey:
      return processAddItemToCartAction(state, action);
    case RemoveItemFromCartActionKey:
      return processRemoveItemFromCartAction(state, action);
    case ModifyCartItemQuantityActionKey:
      return processModifyCartItemQuantityAction(state, action);
    default:
      break;
  }
  return state;
};

export default CartReducer;
