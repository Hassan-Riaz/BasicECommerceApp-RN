import { TAddItemToCartAction } from "app/store/actions/AddItemToCartAction";
import { TCartRootState } from ".";

export const processAddItemToCartAction = (state: TCartRootState, action: TAddItemToCartAction): TCartRootState => {
    const {product, quantity} = action;
    let newQuantity = quantity;
    const existingProducts = state.products.filter(item => item.product.id == product.id);
    if(existingProducts.length > 0) {
        newQuantity += existingProducts[0].quantity;
    }

    return {
        ...state,
        products: [
            ...state.products.filter(item => item.product.id != product.id),
            {
                product: product,
                quantity: newQuantity
            }
        ]
    };
};