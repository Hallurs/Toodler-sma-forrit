import React from 'react';
import { View, FlatList } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const BoardList = ({ images }) => (
    <View style={styles.listContainer}>
        <FlatList
            numColumns={3}
            data={images}
            renderItem={({ item: { thumbnailPhoto } }) => {
                console.log(thumbnailPhoto)
                return (
                    <ImageThumbnail file={thumbnailPhoto} />
                );
            }}
            keyExtractor={image => image.name} />
    </View>
);

export default BoardList;