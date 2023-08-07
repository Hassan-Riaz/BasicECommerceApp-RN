import { ImageResizeMode, ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from "react-native";

export interface TImageUri {
    uri?: string;
    isImageCached?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    placeholderImage: ImageSourcePropType;
    onUriImageLoadFailed?: ()=> void;
    resizeMode: ImageResizeMode;
    imageStyle?: StyleProp<ImageStyle>;
}