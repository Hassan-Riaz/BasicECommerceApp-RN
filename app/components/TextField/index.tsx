import React, { useState } from 'react';
import {
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { RegexValidator, TRegex } from '../../global/helpers/RegexValidator';
import TextFormatter from '../../global/helpers/TextFormatter';
import { useAppTheme } from '../../hooks/useAppTheme';
import AppIcon from '../AppIcon';
import InputErrorMessage from '../InputErrorMessage';
import { TTextField } from './Constraints';
import { getStyles } from './styles';

const TextField = React.forwardRef<TextInput, TTextField>((props, ref) => {
    
    const [textHidden, setTextHidden] = useState<boolean>(props.secureTextEntry ?? false);

    const {colors} = useAppTheme();
    const styles = getStyles(colors);

    const textFieldMasking = (text: string) => {
        let regexType: TRegex = 'alphabetOnly';;
        switch (props.masking) {
            case 'number':
                regexType = 'numberOnly';
                break;
            case 'alphabetsOnly':
                regexType = 'alphabetOnly';
            case 'alphaNumberic':
                regexType = 'alphaNumeric';
            default:
                break;
        }
        if (RegexValidator.validate(text, regexType) || text == '' || props.value.length > text.length) {
            props.onChangeText && props.onChangeText(text);
        }
    };

    const onChangeText = (text: string) => {
        let val = text;
        if(props.convertToHumanReadableFormat) {
            val = TextFormatter.clear(val);
        }
        const eventHandler = props.masking ? textFieldMasking : props.onChangeText;
        if (props.characterLimit == null || val.length <= props.characterLimit) {
            eventHandler && eventHandler(val);
        }
    };

    const ShowPasswordAction: React.FC = () => {

        const actOnPress = () => {
            setTextHidden(!textHidden);
        };

        const getIconImageName = () => {
            return textHidden ? 'eye-off' : 'eye';
        };

        if (props.showPasswordToggleButton) {
            return (
                <TouchableOpacity style={styles.rightIconTouchableView} onPress={actOnPress}>
                    <AppIcon
                        color={colors.textFieldPlaceholder}
                        size={20}
                        name={getIconImageName()}
                        category='MaterialCommunityIcons'
                    />
                </TouchableOpacity>
            );
        }
        return null;
    };

    function ShowRightButton() {
        if (props.rightView != null) {
            return props.rightView && props.rightView;
        }
        return (
            <ShowPasswordAction />
        );
    }

    const getText = () => {
        if (props.convertToHumanReadableFormat) {
            return TextFormatter.format(props.value);
        }
        return props.value;
    }
    return (
        <>
            <View style={[styles.container, props.style]} pointerEvents={props.isEditable == false ? 'none' : undefined}>
                {props.leftView}
                <TextInput
                    pointerEvents={props.isEditable == false ? 'none': undefined}
                    onFocus={props.onFocus}
                    ref={ref}
                    editable={props.isEditable}
                    value={getText()}
                    style={[styles.textField, , {
                        color: props.isEditable != false ?
                            colors.blackText :
                            colors.disabled
                    }, props.TextFieldStyle]}
                    onChangeText={onChangeText}
                    keyboardType={props.keyboardType}
                    textAlign={props.textAlign}
                    placeholder={props.placeholder}
                    placeholderTextColor={colors.grey}
                    onSubmitEditing={props.onSubmitEditing}
                    returnKeyType={props.returnKeyType}
                    secureTextEntry={textHidden}
                    onBlur={props.onBlur}
                    autoCorrect={false}
                    autoCapitalize={props.keyboardType == 'email-address' ? 'none' : props.autoCapitalize}
                    multiline={props.multiline}
                    textAlignVertical={props.multiline ? 'top' : props.textAlignVertical}
                />
                {ShowRightButton()}
            </View>
            <InputErrorMessage description={props.errorMessage ?? ''} />
        </>
    )
});
export default TextField;