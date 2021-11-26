import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

const AddModal = ({
    isOpen,
    closeModal,
    takePhoto,
    selectFromCameraRoll,
    confirmChanges,
    nameOfBoard
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
            <Text>Add New Task!</Text>
            <Text>Name Of Task</Text>
            <TextInput 
                placeholder="Enter task name"
                value={inputs.newTaskName}
                onChangeText={text => inputHandler('newTaskName', text)}/>
            <Text>Task Description</Text>
            <TextInput 
                placeholder="Enter task description"
                value={inputs.taskDescription}
                onChangeText={text => inputHandler('taskDescription', text)}/>
            <View style={styles.iconscontainer}> 
                <TouchableOpacity
                    onPress={() => {
                        // Change and then empty out the input
                        confirmChanges(inputs);
                        inputHandler('newTaskName', '');
                        inputHandler('tasksDescription', '');
                    }}>
                    <Entypo style={styles.icon} name="check" />
                </TouchableOpacity>
            </View>
            
            

        </Modal>
    );
}

export default AddModal;