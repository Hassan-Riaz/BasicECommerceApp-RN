
export const RemoveItemFromCartActionKey = 'RemoveItemFromCartActionKey';


export const RemoveItemFromCartAction = (productId: number) => {
    return {
        type: RemoveItemFromCartActionKey,
        productId: productId
    };
};

export type TRemoveItemFromCartAction = ReturnType<typeof RemoveItemFromCartAction>;