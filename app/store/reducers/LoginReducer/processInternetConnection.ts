import { TLoginRootState } from ".";

export const processInternetConnection = (state: TLoginRootState, action: any): TLoginRootState => {
    return {
        ...state,
        isInternetConnect: action.isInternetConnected
    };
};