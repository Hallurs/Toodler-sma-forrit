import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, TouchableHighlight, Text, View, TextInput } from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import ColorPicker from 'react-native-wheel-color-picker'

const AddModal = ({
    isOpen,
    closeModal,
    takePhoto,
    selectFromCameraRoll,
    confirmChanges,
    nameOfBoard
}) => {
    const [colorPickerOpen, setColorPickerOpen] = useState(false);
    const [color, setColor] = useState('#BAADDD');
    const [inputs, setInputs] = useState({
        newBoardName: ''
    });

    const inputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    if (colorPickerOpen) {
        return (
            <View style={[]}>
                <ColorPicker
                    onColorChange={(newColor) => setColor(newColor)}
                    color={color}
                />
                <TouchableHighlight style={styles.button} onPress={() => setColorPickerOpen(false)}>
                    <Text>Select</Text>
                </TouchableHighlight>
            </View>
        )
    }

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <Text>Add New Board!</Text>
            <Text>Name Of Board </Text>
            <TextInput 
                placeholder="Enter board name"
                value={inputs.newBoardName}
                onChangeText={text => inputHandler('newBoardName', text)}/>
        
            <Text style={{ color: color }}>Color: {color}</Text>
            <TouchableHighlight 
                onPress={() => setColorPickerOpen(true)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Choose color</Text>
            </TouchableHighlight>
    
            <View style={styles.iconscontainer}> 
                <TouchableOpacity
                    onPress={() => {
                        // Change and then empty out the input
                        confirmChanges(inputs.newBoardName, color);
                        inputHandler('newBoardName', '');
                    }}>
                    <Entypo style={styles.icon} name="check" />
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

export default AddModal;