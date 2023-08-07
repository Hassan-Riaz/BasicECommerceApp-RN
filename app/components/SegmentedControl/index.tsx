import React from "react";
import {
    View
} from "react-native";
import ReactNativeSegmentedControlTab from "react-native-segmented-control-tab";
import { useAppTheme } from "../../hooks/useAppTheme";
import { TSegmentedControl } from "./constraints";
import { getStyles } from "./styles";

export const SegmentedControl: React.FC<TSegmentedControl> = (props) => {

    const { colors } = useAppTheme();
    const styles = getStyles(colors);

    return (
        <View style={[styles.container, props.containerStyle]}>
            <ReactNativeSegmentedControlTab
                values={props.values}
                selectedIndex={props.selectedIndex}
                tabStyle={styles.tabStyle}
                tabsContainerStyle={styles.tabsContainerStyle}
                activeTabTextStyle={styles.activeTabTextStyle}
                tabTextStyle={styles.tabTextStyle}
                enabled={!props.disabled}
                onTabPress={props.onSelectionChange}
                activeTabStyle={styles.activeTabStyle}
            />
        </View>
    );
}