import { StyleSheet } from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";

export const getStyles = () => {
    const { colors } = useAppTheme();
    return StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: colors.screenColor
        },
        renderItemMainContainer: {
            padding: 10,
            backgroundColor: 'lightgrey',
            flexDirection: 'row',
            marginVertical: 5,
            borderRadius: 10,
            marginHorizontal: 10,
        },
        renderItemProductImage: {
            height: 150,
            flex: 3,
        },
        renderItemTextContainer: {
            flex: 6,
            paddingHorizontal: 10,
        },
        renderItemTitle: {
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
        },
        renderItemText: {
            color: 'black',
            fontSize: 20,
            fontWeight: '400',
            marginTop: 5,
        },
        loaderContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
}