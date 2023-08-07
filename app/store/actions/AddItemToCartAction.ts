import { TProduct } from "../../global/models/TProduct";

export const AddItemToCartActionKey = 'AddItemToCartActionKey';


export const AddItemToCartAction = (product: TProduct, quantity: number) => {
    return {
        type: AddItemToCartActionKey,
        product,
        quantity
    };
};

export type TAddItemToCartAction = ReturnType<typeof AddItemToCartAction>;