import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const SingleListComponent = ({ name, color, isSelected, onLongPress, id}) => {
    const { navigate } = useNavigation();
    return (
        <View style={[styles.task, {backgroundColor: color}]}>
            <TouchableOpacity
                onLongPress={() => onLongPress(name)}
                onPress={() => navigate('List', { listId: id })} >
                <View style={{ opacity: isSelected ? .5 : 1 }}>
                    <Text style={styles.taskText}>{name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default SingleListComponent;