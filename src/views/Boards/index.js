import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput } from 'react-native';
import styles from './styles';
import ListsOfBoards from '../../components/ListsOfBoards';
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';
import * as fileService from '../../services/fileService';
import * as imageService from '../../services/imageService';

import EditModal from '../../components/EditModal';
import AddModal from '../../components/AddModal';

const Boards = () => {
    
    const [boards, setBoards] = useState();
    const [selectedBoards, setSelectedBoards] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [tempImage, setTempImage] = useState();

    useEffect(() => {
        (async () => {
            const newimages = [...data.boards/* ,...sommin */]
            setBoards(newimages);
        })();
    }, []);

    const onImageLongPress = name => {
        if (selectedBoards.indexOf(name) !== -1) {
            // The image is already within the list
            setSelectedBoards(selectedBoards.filter(image => image !== name));
        } else {
            // Add the new image and replace the old image
            if (selectedBoards.length > 0) 
            {
                selectedBoards.pop();
                setSelectedBoards([...selectedBoards, name]);
                setTempImage();
            } else {
                setSelectedBoards([...selectedBoards, name]);
                setTempImage();
            }
        }
    };

    const deleteSelectedBoards = async () => {

        // Promise.all resolves the list of promises resulting in all images being deleted.
        await Promise.all(selectedBoards.map(image => fileService.remove(image)) /* Returns a list of promises */);

        // Correct the state variables
        setBoards(boards.filter(image => selectedBoards.indexOf(image.name) === -1));
        setSelectedBoards([]);
    }

    const editSelectedBoard = async () => {
        setIsEditModalOpen(true);
    }

    const takePhoto = async () => {
        const photo = await imageService.takePhoto();
        if (photo.length > 0) { await addImage(photo); }
    }

    const selectFromCameraRoll = async () => {
        const photo = await imageService.selectFromCameraRoll();
        if (photo.length > 0) { await addImage(photo); }
    }

    const addImage = async image => {
        const newImage = await fileService.addImage(image);
        setTempImage(`data:image/jpeg;base64,${newImage.file}`)
    };

    const overWriteData = (name ,newBoardName) => {
        const imagefound = boards.find(image => image.name === name[0]);
        if (tempImage !== undefined)
        {
            imagefound.thumbnailPhoto = tempImage;
        }
        if (newBoardName !== "")
        {
            imagefound.name = newBoardName; 
        }
        setTempImage();
        setSelectedBoards([]);
        setIsEditModalOpen(false);
    }

    const addWriteData = async (newBoardName) => {
        const largestId = boards.map(boards => boards.id).sort((a, b) => a - b)[boards.length - 1];
        const newImage = {
            id: largestId + 1,
            name: newBoardName,
            thumbnailPhoto: tempImage
        };
        boards.push(newImage);
        fileService.add("boards",newImage) /* Returns a list of promises */;
        setTempImage();
        setSelectedBoards([]);
        setIsAddModalOpen(false);
    }

    return(
        <View style={styles.container}>
            <Toolbar
                hasSelectedImages={selectedBoards.length > 0}
                onAdd={() => setIsAddModalOpen(true)}
                onRemove={() => deleteSelectedBoards()} 
                onEdit={() => editSelectedBoard()}/>
            <ListsOfBoards 
                images={boards}
                selectedImages={selectedBoards}
                onLongPress={name => onImageLongPress(name)}/>
            <EditModal
                nameOfBoard={[...selectedBoards]}
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
                takePhoto={() => takePhoto()}
                confirmChanges={(newboardname) => overWriteData(selectedBoards, newboardname)}
                selectFromCameraRoll={() => selectFromCameraRoll()} 
                />
            <AddModal                 
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                takePhoto={() => takePhoto()}
                confirmChanges={(newboardname) => addWriteData(newboardname)}
                selectFromCameraRoll={() => selectFromCameraRoll()}
                />
        </View>
    )
};

export default Boards;