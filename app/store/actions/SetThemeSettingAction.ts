import { TThemeType } from "../../global/constants";

export const SetThemeSettingActionKey = 'SetThemeSettingActionKey';

export const SetThemeSettingAction = (prop: {
  isSystemDefault: boolean,
  theme: TThemeType
}) => {
  return {
    type: SetThemeSettingActionKey,
    theme: prop.theme,
    isSystemDefault: prop.isSystemDefault
  };
};

export type TSetThemeAction = ReturnType<typeof SetThemeSettingAction>;