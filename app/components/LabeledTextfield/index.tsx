import React from "react";
import {
    TextInput,
    View
} from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";
import Label from "../Label";
import TextField from "../TextField";
import { TTextField } from "../TextField/Constraints";
import { TLabeledTextfieldParams } from "./constraints";
import { getStyles } from "./styles";

const LabeledTextfield = React.forwardRef<TextInput, TLabeledTextfieldParams>((props, ref) => {

    const {colors} = useAppTheme();
    const styles = getStyles(colors);

    const fieldProps: TTextField = {
        ...props,
        style: undefined
    };

    return (
        <View style={[styles.container, props.style]}>
            {
                props.title &&
                <Label style={styles.label} children={props.title} />
            }
            <TextField
                ref={ref}
                {...fieldProps}
                style={styles.textField}
            />
        </View>
    );
});
export default LabeledTextfield;