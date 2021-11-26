import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SingleTaskComponent = ({name, isSelected, onLongPress, id}) => {
    const { navigate } = useNavigation();
    console.log(id)
    return (
        <TouchableOpacity
            onLongPress={() => onLongPress(name)}
            onPress={() => navigate('Task', { taskId: id })} >
            <View style={{ opacity: isSelected ? .5 : 1 }} >
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default SingleTaskComponent;