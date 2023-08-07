import React, {useState} from 'react';
import {Image} from 'react-native';
import {TCacheImage} from './constraints';

const CacheImage: React.FC<TCacheImage> = props => {
  const [imageLoadingFailed, setImageLoadingFailed] = useState<boolean>(false);
  const placeHolderImage = require('../../resources/assets/logo/logo.jpg');

  return (
    <Image
      onLoadStart={props.onLoadStart}
      onLoadEnd={props.onLoadEnd}
      onError={() => {
        setImageLoadingFailed(true);
        props.onImageFailed && props.onImageFailed();
      }}
      resizeMode={props.resizeMode || 'contain'}
      style={props.style}
      //@ts-ignore
      source={
        imageLoadingFailed
          ? placeHolderImage
          : {
              uri: props.uri,
              cache: 'force-cache',
            }
      }
    />
  );
};

export default CacheImage;
