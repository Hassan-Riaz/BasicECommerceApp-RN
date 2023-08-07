export const SetInternetConnectActionKey = 'SetInternetConnectActionKey';

export const SetInternetConnectAction = (isInternetConnected: boolean) => {
    return {
        type: SetInternetConnectActionKey,
        isInternetConnected: isInternetConnected
    };
};

export type TSetInternetConnectAction = ReturnType<typeof SetInternetConnectAction>