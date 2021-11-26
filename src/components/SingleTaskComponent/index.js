import React, { useState } from 'react';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles.js';
import PropTypes from 'prop-types';

const SingleTaskComponent = ({name, isSelected, onLongPress, id, status, onValueChange}) => {
    
    const [toggleCheckBox, setToggleCheckBox] = useState(status)
    const { navigate } = useNavigation();
    
    const setCheckAndRespond = newValue => {
        setToggleCheckBox(newValue);
        onValueChange(id);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity   
                onLongPress={() => onLongPress(name)}
                onPress={() => navigate('Task', { taskId: id })} >   
                <View style={[styles.task, {backgroundColor: '#BAAFFF'/* color */}, { opacity: isSelected ? .3 : 1 }]}>
                    <Text style={[styles.taskText, { textDecorationLine: toggleCheckBox ? "line-through": "none" }]}>{name}</Text>
                </View>
            </TouchableOpacity>
            <CheckBox
                style={styles.checkbox}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setCheckAndRespond(newValue)}
            />
        </View>
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