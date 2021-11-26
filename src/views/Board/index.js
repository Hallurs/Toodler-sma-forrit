import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import BoardLists from '../../components/BoardLists';
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';
import * as fileService from '../../services/fileService';

import EditBoardModal from '../../components/EditBoardModal';
import AddBoardModal from '../../components/AddBoardModal';

const Board = ({route}) => {
    
    const { boardId } = route.params; 
    const [allBoardLists, setAllBoardsLists] = useState();
    const [boardLists, setBoardsLists] = useState();
    const [selectedLists, setSelectedLists] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const newLists = [...data.lists/* ,...sommin */]
            setAllBoardsLists(newLists);
            const finalLists = newLists.filter(list => list.boardId === boardId);
            setBoardsLists(finalLists);
                      
        })();
    }, []);

    const deleteSelectedList = async () => {
        // Promise.all resolves the list of promises resulting in all boardLists being deleted.
        await Promise.all(selectedLists.map(list => fileService.remove_list(list)) /* Returns a list of promises */);
        
        // Correct the state variables
        setBoardsLists(boardLists.filter(boardList => selectedLists.indexOf(boardList.name) === -1));
        
        setSelectedLists([]);
    }

    const editSelectedList = async () => {
        setIsEditModalOpen(true);
    }

    const overWriteData = (name ,newBoardName) => {
        const imagefound = boardLists.find(image => image.name === name[0]);
        if (newBoardName !== "")
        {
            imagefound.name = newBoardName; 
        }
        setSelectedLists([]);
        setIsEditModalOpen(false);
    }

    const addWriteData = (newBoardName, color) => {
        // Dont need unique id but cool to keep this incase of future projects needing it
        const largestId = allBoardLists.map(board => board.id).sort((a, b) => a - b)[allBoardLists.length - 1];
        const newImage = {
            id: largestId + 1,
            name: newBoardName,
            color: color,
            boardId: boardId
        };
        allBoardLists.push(newImage);
        fileService.add("lists",newImage)
        boardLists.push(newImage);
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
            <EditBoardModal
                nameOfBoard={[...selectedLists]}
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
                takePhoto={() => takePhoto()}
                confirmChanges={(newboardname) => overWriteData(selectedLists, newboardname)}
                selectFromCameraRoll={() => selectFromCameraRoll()} 
                />
            <AddBoardModal                 
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                takePhoto={() => takePhoto()}
                confirmChanges={(newboardname, color) => addWriteData(newboardname, color)}
                selectFromCameraRoll={() => selectFromCameraRoll()}
            />
        </View>
    )
}

export default Board;