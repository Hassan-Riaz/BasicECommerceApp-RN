import { StyleSheet } from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";

export const getStyles = () => {
    const { colors } = useAppTheme();
    return StyleSheet.create({
        screen: {
            justifyContent: 'flex-start',
            backgroundColor: colors.screenColor,
        },
        contentSuperView: {
            flex: 1,
        },
        coverImage: {
            height: 250,
            width: '100%'
        },
        contentContainer: {
            paddingHorizontal: '5%',
            paddingVertical: 10
        },
        nameLabel: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        infoLabel: {
            fontSize: 18,
            fontWeight: '500',
            color: 'white',
            marginTop: 10
        },
        bottomContainer: {
            paddingVertical: 20,
            paddingHorizontal: '5%',
        },
        bottomStepperContainer: {
            flexDirection: 'row',
            height: 50,
            marginBottom: 20
        },
        quantityPlaceholderLabel:{
            fontSize: 20,
            alignSelf: 'center',
            marginRight: 20
        },
        quantityStepperTouchable: {
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'white'
        },
        quantityStepperLabel: {
            fontSize: 30,
            fontWeight: 'bold'
        },
        quantityInfoContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
        quantityLabel: {
            fontSize: 20
        }
    });
}