import { TUtilityRootState } from ".";

export const processReloadMaintenanceBitAction = (state: TUtilityRootState, action: any): TUtilityRootState => {
    return {
        ...state,
        reloadMaintenanceBit: !state.reloadMaintenanceBit,
    };
};