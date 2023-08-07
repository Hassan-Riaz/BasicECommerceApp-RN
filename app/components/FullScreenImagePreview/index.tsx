import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ImageView from 'react-native-image-viewing';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Label from '../Label';
import { TFullScreenImagePreview } from './constraints';
import styles from './styles';

const FullScreenImagePreview: React.FC<TFullScreenImagePreview> = ({
    displayingFullScreenImageIndex,
    ImagefullscreenModel,
    pickedImages,
    onClosing
}) => {
    const insets = useSafeAreaInsets();
    displayingFullScreenImageIndex = displayingFullScreenImageIndex == null ? 0 : displayingFullScreenImageIndex;
    ImagefullscreenModel = ImagefullscreenModel || false;
    pickedImages = pickedImages || [];
    const HIT_SLOP = { top: 16, left: 16, bottom: 16, right: 16 };
    return (
        <ImageView
            doubleTapToZoomEnabled={true}
            images={pickedImages}
            imageIndex={displayingFullScreenImageIndex}
            visible={ImagefullscreenModel}
            onRequestClose={onClosing}
            HeaderComponent={headerProps =>
                <View style={[styles.headerContainer, {
                    marginTop: insets.top,
                }]}>
                    <Label style={styles.numberLabel}>{(headerProps.imageIndex + 1) + '/' + pickedImages.length}</Label>
                    <TouchableOpacity style={styles.closeButton} onPress={onClosing} hitSlop={HIT_SLOP}>
                        <Label style={styles.closeText}>✕</Label>
                    </TouchableOpacity>
                </View>
            }
        />
    );
};

export default FullScreenImagePreview;