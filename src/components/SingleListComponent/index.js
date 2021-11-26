import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import PropTypes from 'prop-types';

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

SingleListComponent.propTypes = {
    // Id of the List
    id: PropTypes.number.isRequired,
    // Name of the List
    name: PropTypes.string.isRequired,
    // color of the list
    color: PropTypes.string.isRequired,
    // The function for long press
    onLongPress: PropTypes.func.isRequired,
    // Determines if the item is selected or not
    isSelected: PropTypes.bool.isRequired
};

export default SingleListComponent;