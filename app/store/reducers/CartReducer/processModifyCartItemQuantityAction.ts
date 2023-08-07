import { TCartRootState } from ".";
import { TModifyCartItemQuantityAction } from "../../../store/actions/ModifyCartItemQuantityAction";

export const processModifyCartItemQuantityAction = (state: TCartRootState, action: TModifyCartItemQuantityAction): TCartRootState => {
    const {productId, quantity} = action;
    const index = state.products.findIndex(item => item.product.id == productId);
    if(index == -1) {
        return state;
    }
    
    let products = state.products
    products[index].quantity = quantity;

    return {
        ...state,
        products: products
    };
};