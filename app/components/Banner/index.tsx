import React from "react";
import { View } from "react-native";
import Label from "../Label";
import { TBanner } from './constraints';
import styles from "./styles";

const Banner: React.FC<TBanner> = (props) => {
    return (
        <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
            <Label style={[styles.label, { color: props.textColor }]}>{props.text}</Label>
        </View>
    );
};

export default Banner;