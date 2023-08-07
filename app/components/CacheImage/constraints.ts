import { ImageResizeMode, StyleProp } from "react-native";
import { ImageStyle } from 'react-native';
export interface TCacheImage {
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  style: StyleProp<ImageStyle>;
  uri: string;
  onImageFailed?: () => void;
  resizeMode?: ImageResizeMode;
}