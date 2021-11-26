import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles.js';
import PropTypes from 'prop-types';

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

SingleTaskComponent.propTypes = {
    // Name of the Task
    name: PropTypes.string.isRequired,
    // the id of the task
    id: PropTypes.number.isRequired,
    // The function for long press
    onLongPress: PropTypes.func.isRequired,
    // Determines if the item is selected or not
    isSelected: PropTypes.bool.isRequired
};

export default SingleTaskComponent;