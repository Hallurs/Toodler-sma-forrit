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
            {allLists.map(list => (
                <TouchableHighlight 
                    onPress={() => {
                        onSubmit(list.id);
                        closeModal();
                    }}
                    style={[styles.button]}
                >
                <Text key={list.id}>{list.name}</Text>
            </TouchableHighlight>
            ))}
        </Modal>
    );
}

export default MoveTaskModal;