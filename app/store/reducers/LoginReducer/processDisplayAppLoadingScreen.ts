import { TDisplayAppLoadingScreenAction } from "app/store/actions/DisplayAppLoadingScreen";
import { TLoginRootState } from ".";

export const processDisplayAppLoadingScreen = (state: TLoginRootState, _: TDisplayAppLoadingScreenAction): TLoginRootState => {
    return {
        ...state,
        isAppLoading: true,
    };
};