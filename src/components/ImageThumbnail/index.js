import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import PropTypes from 'prop-types';

const ImageThumbnail = ({ file, name, isSelected, onLongPress, id}) => {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            onLongPress={() => onLongPress(name)}
            onPress={() => navigate('Board', { boardId: id })} >

            {
                isSelected
                    ?
                    <AntDesign name="checkcircleo" style={styles.checkmark} />
                    :
                    <></>
            }
            <View style={{ opacity: isSelected ? .5 : 1 }}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: file }} />
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

ImageThumbnail.propTypes = {
    // Name of the board
    name: PropTypes.string.isRequired,
    // The image address
    file: PropTypes.string.isRequired,
    // The id of the board
    id: PropTypes.number.isRequired,
    // The function for lon press
    onLongPress: PropTypes.func.isRequired,
    // Determins if the item is selected or not
    isSelected: PropTypes.bool.isRequired
};

export default ImageThumbnail;