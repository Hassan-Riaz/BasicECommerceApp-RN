import React from "react";
import { Switch } from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";
import { TComponent } from "./constraints";

export const AppSwitch: React.FC<TComponent> = (props) => {
  const { colors } = useAppTheme();

    return (
      <Switch
        trackColor={{false: colors.disabledSwitch, true: colors.switchColor}}
        thumbColor={colors.white}
        ios_backgroundColor={colors.disabledSwitch}
        onValueChange={props.onValueChange}
        value={props.value}
        style={props.style}
        disabled={props.disabled}
      />
    );
}