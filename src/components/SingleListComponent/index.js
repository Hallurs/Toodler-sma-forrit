import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const SingleListComponent = ({ name, color, isSelected, onLongPress, id}) => {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            onLongPress={() => onLongPress(name)}
            onPress={() => navigate('Tasks', { listId: id })} >
                <View style={[styles.task, {backgroundColor: color}, { opacity: isSelected ? .3 : 1 }]}>
                    <Text style={styles.taskText}>{name}</Text>
                </View>
        </TouchableOpacity>
    );
}

export default SingleListComponent;