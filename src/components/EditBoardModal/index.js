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
            <Text>Change Name Of Board </Text>
            <TextInput 
                placeholder="Enter new board name"
                value={inputs.newBoardName}
                onChangeText={text => inputHandler('newBoardName', text)} />
            <View style={styles.iconscontainer}> 
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

export default EditModal;