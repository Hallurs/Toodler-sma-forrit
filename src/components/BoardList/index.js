import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import { View, FlatList } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const BoardList = ({ images, selectedImages, onLongPress }) => (
    <View style={styles.listContainer}>
        <FlatList
            data={images}
            extraData={selectedImages}
            renderItem={({ item: { thumbnailPhoto, name, id } }) => {
                return (
                    <ImageThumbnail
                        isSelected={selectedImages.indexOf(name) !== -1}
                        onLongPress={onLongPress}
                        id={id}
                        name={name} 
                        file={thumbnailPhoto} />
                );
            }}
            keyExtractor={image => image.name} />
    </View>
);

export default BoardList;