import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import BoardLists from '../../components/BoardLists';
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';
import * as fileService from '../../services/fileService';
import * as imageService from '../../services/imageService';

import EditModal from '../../components/EditModal';
import AddModal from '../../components/AddModal';

const Board = ({route}) => {
    
    const { boardId } = route.params; 

    const [boardLists, setBoardsLists] = useState();
    const [selectedLists, setSelectedLists] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        (async () => {
            //console.log(images)
            /* const sommin = images.map((image,index) => ({
                id: index+4,
                name: image.name,
                thumbnailPhoto: `data:image/jpeg;base64,${image.file}`
            })) */
            const newLists = [...data.lists/* ,...sommin */]
            const finalLists = newLists.filter(list => list.boardId === boardId);
            setBoardsLists(finalLists);
                      
        })();
    }, []);

    const deleteSelectedList = async () => {
        // Promise.all resolves the list of promises resulting in all images being deleted.
        await Promise.all(selectedLists.map(list => fileService.remove_list(list)) /* Returns a list of promises */);
        
        // Correct the state variables
        setBoardsLists(boardLists.filter(boardList => selectedLists.indexOf(boardList.name) === -1));
        
        setSelectedLists([]);
        setLoadingImages(false);
    }

    const editSelectedList = async () => {
        setIsEditModalOpen(true);
    }

    const overWriteData = (name ,newBoardName) => {
        const imagefound = images.find(image => image.name === name[0]);
        setTempImage();
        setSelectedLists([]);
        setIsEditModalOpen(false);
    }

    const addWriteData = (newBoardName) => {
        const newImage = {
            name: newBoardName,
            thumbnailPhoto: tempImage
        };
        images.push(newImage);
        setTempImage();
        setSelectedLists([]);
        setIsAddModalOpen(false);
    }

    const onTaskLongPress = name => {
        if (selectedLists.indexOf(name) !== -1) {
            // The image is already within the list
            setSelectedLists(selectedLists.filter(list => list !== name));
        } else {
            // Add the new list and replace the old list
            if (selectedLists.length > 0) 
            {
                selectedLists.pop();
                setSelectedLists([...selectedLists, name]);
            } else {
                setSelectedLists([...selectedLists, name]);
            }
        }
    };

    /* {console.log("final board lists list",boardLists)} */
    return(
        <View style={styles.container}>
            <Toolbar
                    hasSelectedImages={selectedLists.length > 0}
                    onAdd={() => setIsAddModalOpen(true)}
                    onRemove={() => deleteSelectedList()} 
                    onEdit={() => editSelectedList()}/>
            <BoardLists 
               lists = {boardLists}
               selectedLists={selectedLists}
               onLongPress={name => onTaskLongPress(name)} />
            <EditModal
                nameOfBoard={[...selectedLists]}
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
                takePhoto={() => takePhoto()}
                confirmChanges={(newboardname) => overWriteData(selectedLists, newboardname)}
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
}

export default Board;