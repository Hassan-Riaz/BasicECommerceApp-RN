import { TUtilityRootState } from ".";
import { TSetServerMaintenanceAction } from "../../actions/SetServerMaintenanceAction";

export const processSetMaintenanceAction = (state: TUtilityRootState, action: TSetServerMaintenanceAction): TUtilityRootState  => {
    return {
        ...state,
        isServerMaintenanceEnabled: action.isEnabled,
    };
};