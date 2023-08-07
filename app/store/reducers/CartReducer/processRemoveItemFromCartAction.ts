import { TRemoveItemFromCartAction } from "app/store/actions/RemoveItemFromCartAction";
import { TCartRootState } from ".";

export const processRemoveItemFromCartAction = (state: TCartRootState, action: TRemoveItemFromCartAction): TCartRootState => {
    const {productId} = action;
    return {
        ...state,
        products: state.products.filter(item => item.product.id != productId),
    };
};