import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

const ImageThumbnail = ({ file}) => {
    {console.log(file)}
    return (
        <View>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: file }} />
        </View>
    );
}

export default ImageThumbnail;