import React from "react";
import {
    TouchableOpacity
} from "react-native";
import { TComponent } from "./constraints";
import styles from "./styles";

const HeaderButton: React.FC<TComponent> = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={styles.container} children={props.children} />
    );
}

export default HeaderButton;