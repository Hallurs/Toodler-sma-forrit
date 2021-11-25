import React from 'react';
import { View, FlatList } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const BoardList = ({ images, selectedImages, onLongPress }) => (
    <View style={styles.listContainer}>
        <FlatList
            data={images}
            extraData={selectedImages}
            renderItem={({ item }) => {
                return (
                    <ImageThumbnail
                        isSelected={selectedImages.indexOf(item.name) !== -1}
                        onLongPress={onLongPress}
                        name={item.name}
                        file={item.thumbnailPhoto} />
                );
            }}
            keyExtractor={image => image.name} />
    </View>
);

export default BoardList;