
export const ModifyCartItemQuantityActionKey = 'ModifyCartItemQuantityActionKey';


export const ModifyCartItemQuantityAction = (productId: number, quantity: number) => {
    return {
        type: ModifyCartItemQuantityActionKey,
        productId,
        quantity
    };
};

export type TModifyCartItemQuantityAction = ReturnType<typeof ModifyCartItemQuantityAction>;