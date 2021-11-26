import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

const EditModal = ({
    isOpen,
    closeModal,
    takePhoto,
    selectFromCameraRoll,
    confirmChanges,
}) => {

    const [inputs, setInputs] = useState({
        newTaskName: '',
        taskDescription: ''
    });

    const inputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}>
            <Text>Change Name Of Task </Text>
            <TextInput 
                placeholder="Enter new task name"
                value={inputs.newTaskName}
                onChangeText={text => inputHandler('newTaskName', text)} />
            <Text>Task Description</Text>
            <TextInput 
                placeholder="Enter task description"
                value={inputs.taskDescription}
                onChangeText={text => inputHandler('taskDescription', text)}/>
            <View style={styles.iconscontainer}> 
                <TouchableOpacity
                    onPress={() => {
                        // Change and then empty out the input
                        if (inputs.newTaskName.length > 0)
                        {
                            confirmChanges(inputs);
                            inputHandler('newTaskName', '');
                            inputHandler('tasksDescription', '');
                        } else {
                            // Error
                        }
                    }}>
                    <Entypo style={styles.icon} name="check" />
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

export default EditModal;