import React from 'react';
import {
    Image,
    ImageSourcePropType,
    TouchableOpacity,
    View,
} from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import AppIcon from '../AppIcon';
import { TBasicIcon } from '../AppIcon/constraints';
import Label from '../Label';
import Loader from '../Loader';
import { TButton } from './Constraints';
import { getStyles } from './styles';

const Button: React.FC<TButton> = (props) => {

    const { colors } = useAppTheme();
    const styles = getStyles(colors);

    const ButtonInnerContent = () => {

        const ButtonLabel = () => {
            return <Label style={[styles.text, props.titleStyle]} children={props.title} />;
        };

        const showLeftImage = () => {
            if (props.leftImage || props.lefticon) {
                return showImage(props.lefticon, props.leftImage)
            }
        };
        const showRightImage = () => {
            if (props.rightImage || props.righticon) {
                return showImage(props.righticon, props.rightImage)
            }
        };

        return (
            <View style={styles.buttonContentContainer}>
                {showLeftImage()}
                {
                    props.loader ?
                        <Loader color={props.mode == 'blured' ? colors.primary : 'white'} /> :
                        <ButtonLabel />
                }
                {showRightImage()}
            </View>
        );
    }

    const showImage = (icon?: TBasicIcon, image?: ImageSourcePropType) => {
        if (icon != null) {
            return <AppIcon {...icon} size={20} />
        } else {
            return <Image
                source={image!}
                style={styles.image} />
        }
    };

    return (
        <View style={[styles.container, props.style, (props.isDisabled || props.mode == 'blured') && styles.disabledBgColor]}>
            <TouchableOpacity activeOpacity={0.8} disabled={props.isDisabled || props.loader} onPress={props.onPress} style={styles.touchableView}>
                <ButtonInnerContent />
            </TouchableOpacity>
        </View>
    );
};
export default Button;