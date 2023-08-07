export const DisplayAppLoadingScreenActionKey = 'DisplayAppLoadingScreenActionKey';


export const DisplayAppLoadingScreenAction = () => {
    return {
        type: DisplayAppLoadingScreenActionKey,
    };
};

export type TDisplayAppLoadingScreenAction = ReturnType<typeof DisplayAppLoadingScreenAction>;