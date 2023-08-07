import React from 'react';
import {
    View,
} from 'react-native';
import styles from './styles';
import { TSpacer } from './constraints';


const Spacer: React.FC<TSpacer> = props => {
    return (
        <View style={props.style ? props.style : styles.container} />
    );
};

export default Spacer