import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableHighlight, Text, View, TextInput } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

const MoveTaskModal = ({
    isOpen,
    closeModal,
    allLists,
    onSubmit
}) => {

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <Text style={styles.Title}>Lists to choose from!</Text>
            {allLists.map(list => (
                <TouchableHighlight 
                    key={list.id}
                    onPress={() => {
                        onSubmit(list.id);
                        closeModal();
                    }}
                >
                    <Text >{list.name}</Text>
                </TouchableHighlight>
            ))}
        </Modal>
    );
}

export default MoveTaskModal;