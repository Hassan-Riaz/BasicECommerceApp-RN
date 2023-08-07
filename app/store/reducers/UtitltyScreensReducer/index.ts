import { TThemeType } from "../../../global/constants";
import { DisplayForceUpdateScreenActionKey } from "../../actions/DisplayForceUpdateScreen";
import { ReloadMaintenanceBitActionKey } from "../../actions/ReloadMaintenanceBitAction";
import { SetServerMaintenanceActionKey } from "../../actions/SetServerMaintenanceAction";
import { SetThemeSettingActionKey } from "../../actions/SetThemeSettingAction";
import { processDisplayForceUpdateAction } from "./processDisplayForceUpdateAction";
import { processReloadMaintenanceBitAction } from "./processReloadMaintenanceBitAction";
import { processSetMaintenanceAction } from "./processSetMaintenanceAction";
import { processThemeSettingAction } from "./processThemeSettingAction";

export type TUtilityRootState = {
  isServerConfigured: boolean,
  isServerMaintenanceEnabled: boolean,
  isForceUpdateEnabled: boolean,
  reloadMaintenanceBit: boolean,
  theme: TThemeType,
  isThemeSystemDefault: boolean,
};

const initialState: TUtilityRootState = {
  isServerConfigured: false,
  isServerMaintenanceEnabled: false,
  isForceUpdateEnabled: false,
  reloadMaintenanceBit: false,
  theme: 'dark',
  isThemeSystemDefault: true,
};

const UtlityScreensReducer = (state: TUtilityRootState = initialState, action: any) => {
    switch (action.type) {
      case SetServerMaintenanceActionKey:
        return processSetMaintenanceAction(state, action);
      case DisplayForceUpdateScreenActionKey:
        return processDisplayForceUpdateAction(state, action);
      case ReloadMaintenanceBitActionKey:
        return processReloadMaintenanceBitAction(state, action);
      case SetThemeSettingActionKey:
        return processThemeSettingAction(state, action);
      default:
        break;
    }
    return state
};



export default UtlityScreensReducer;