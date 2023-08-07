import { TUtilityRootState } from '.';
import { TSetThemeAction } from '../../actions/SetThemeSettingAction';

export const processThemeSettingAction = (
  state: TUtilityRootState,
  action: TSetThemeAction,
): TUtilityRootState => {
  return ({
    ...state,
    theme: action.theme,
    isThemeSystemDefault: action.isSystemDefault
  });
};


