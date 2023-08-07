import { ImageSource } from "react-native-vector-icons/Icon";

export interface TFullScreenImagePreview {
    displayingFullScreenImageIndex: number;
    ImagefullscreenModel: boolean;
    pickedImages: ImageSource[];
    onClosing: ()=>void;
}