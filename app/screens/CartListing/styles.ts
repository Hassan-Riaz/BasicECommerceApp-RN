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
            fontSize: 16,
            fontWeight: 'bold',
        },
        renderItemText: {
            color: 'black',
            fontSize: 16,
            fontWeight: '400',
            marginVertical: 5,
        },
        bottomStepperContainer: {
            flexDirection: 'row',
            height: 50,
            marginBottom: 20
        },
        quantityPlaceholderLabel:{
            fontSize: 20,
            alignSelf: 'center',
            marginRight: 20,
            color: 'black',
        },
        quantityStepperTouchable: {
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black'
        },
        quantityStepperLabel: {
            fontSize: 30,
            color: 'black',
            borderColor: 'black'
        },
        quantityInfoContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
        quantityLabel: {
            fontSize: 20,
            color: 'black',
        }
    });
}