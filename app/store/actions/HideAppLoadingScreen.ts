export const HideAppLoadingScreenActionKey = 'HideAppLoadingScreenActionKey';


export const HideAppLoadingScreenAction = () => {
    return {
        type: HideAppLoadingScreenActionKey,
    };
};

export type THideAppLoadingScreenAction = ReturnType<typeof HideAppLoadingScreenAction>;