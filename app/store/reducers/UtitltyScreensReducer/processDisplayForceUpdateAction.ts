import { TUtilityRootState } from ".";
import { TDisplayForceUpdateScreenAction } from "../../actions/DisplayForceUpdateScreen";

export const processDisplayForceUpdateAction = (state: TUtilityRootState, action: TDisplayForceUpdateScreenAction): TUtilityRootState  => {
    return {
        ...state,
        isForceUpdateEnabled: action.isVisible,
    };
};