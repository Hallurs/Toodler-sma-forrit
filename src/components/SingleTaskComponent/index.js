import React, { useState } from 'react';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles.js';

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

export default SingleTaskComponent;