import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';

const ImageThumbnail = ({ file, name}) => {
    return (
        <View>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: file }} />
            <Text>{name}</Text>
        </View>
    );
}

export default ImageThumbnail;