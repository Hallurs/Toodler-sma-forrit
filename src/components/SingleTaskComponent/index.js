import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles.js';

const SingleTaskComponent = ({name, isSelected, onLongPress, id}) => {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            onLongPress={() => onLongPress(name)}
            onPress={() => navigate('Task', { taskId: id })} >   
                <View style={[styles.task, {backgroundColor: '#AAAFFF'/* color */}, { opacity: isSelected ? .3 : 1 }]}>
                    <Text style={styles.taskText}>{name}</Text>
                </View>
        </TouchableOpacity>
    );
}

export default SingleTaskComponent;