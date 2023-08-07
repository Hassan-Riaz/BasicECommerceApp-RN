export const DisplayForceUpdateScreenActionKey = 'DisplayForceUpdateScreenActionKey';


export const DisplayForceUpdateScreenAction = (isVisible: boolean) => {
    return {
        isVisible: isVisible,
        type: DisplayForceUpdateScreenActionKey,
    };
};

export type TDisplayForceUpdateScreenAction = ReturnType<typeof DisplayForceUpdateScreenAction>;