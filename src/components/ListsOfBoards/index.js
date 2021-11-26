import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const ListsOfBoards = ({ images, selectedImages, onLongPress }) => (
    <View style={styles.listContainer}>
        <FlatList
            data={images}
            extraData={selectedImages}
            renderItem={({ item }) => {
                return (
                    <ImageThumbnail
                        isSelected={selectedImages.indexOf(item.name) !== -1}
                        onLongPress={onLongPress}
                        id={item.id}
                        name={item.name}
                        file={item.thumbnailPhoto} />
                );
            }}
            keyExtractor={image => image.name} />
    </View>
);

ListsOfBoards.propTypes = {
    // A list of all Boards
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        thumbnailPhoto: PropTypes.string
    })),
    // all curently selected boards
    selectedImages: PropTypes.arrayOf(PropTypes.string),
    // when the Board is pressed for long duration
    onLongPress: PropTypes.func.isRequired
};

export default ListsOfBoards;