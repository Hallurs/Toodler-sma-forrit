import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

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

export default ImageThumbnail;