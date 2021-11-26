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
        newBoardName: ''
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
            <Text>Name Of Board </Text>
            <TextInput 
                placeholder="Enter board name"
                value={inputs.newBoardName}
                onChangeText={text => inputHandler('newBoardName', text)}/>
            <Text>Choose a photo</Text>
            <View style={styles.iconscontainer}> 
                <TouchableOpacity
                    onPress={() => takePhoto()}>
                    <Entypo style={styles.icon} name="camera" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => selectFromCameraRoll()}>
                    <Entypo style={styles.icon} name="image" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        // Change and then empty out the input
                        confirmChanges(inputs.newBoardName);
                        inputHandler('newBoardName', '');
                    }}>
                    <Entypo style={styles.icon} name="check" />
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

export default AddModal;