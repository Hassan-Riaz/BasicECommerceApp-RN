import React, { useState } from "react";
import {
    Image,
    ImageSourcePropType,
    View
} from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";
import Loader from "../Loader";
import { TImageUri } from "./constraints";
import { getStyles } from "./styles";

const UriImage: React.FC<TImageUri> = (props) => {

    const [loader, setLoader] = useState(false);
    const [source, setSource] = useState<ImageSourcePropType>(props.uri ? { uri: props.uri, cache: props.isImageCached ? 'force-cache' : 'default' } : props.placeholderImage);
    const { colors } = useAppTheme();
    const styles = getStyles(colors);

   
    return (
        <View style={[styles.container, props.containerStyle]}>
            <Loader
                color={colors.loaderColor}
                style={styles.loader}
                visible={loader}
            />
            <Image
                onLoadStart={() => setLoader(true)}
                onLoad={() => setLoader(false)}
                resizeMode={props.resizeMode}
                onError={() => {
                    setLoader(false);
                    setSource(props.placeholderImage);
                    props.onUriImageLoadFailed && props.onUriImageLoadFailed();
                }}
                source={source}
                style={[styles.image, props.imageStyle]}
            />
        </View>
    );
}

export default UriImage;