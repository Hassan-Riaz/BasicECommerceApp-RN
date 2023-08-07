import React from "react";
import {
    View,
} from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";
import Label from "../Label";
import { TInputErrorMessage } from "./constraints";
import { getStyles } from "./styles";

const InputErrorMessage: React.FC<TInputErrorMessage> = ({ description, style }) => {

    const {colors} = useAppTheme();
    const styles = getStyles(colors);
    
    if (description != '' && description != undefined) {
        return (
            <View style={[styles.container, style]}>
                <Label style={styles.message} children={description} />
            </View>
        );
    }
    return null;
};

export default InputErrorMessage;