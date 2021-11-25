import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';
import BoardLists from '../../components/BoardLists';

const Board = ({route}) => {
    
    const { boardId } = route.params; 

    const [selectedBoard, setSelectedBoard] = useState([]);
    const [boardLists, setBoardLists] = useState([]);

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
            setBoardLists(finalLists);
                      
        })();
    }, []);

    {console.log("final board lists list",boardLists)}
    return(
        <View style={styles.container}>
            <Toolbar
                    //hasSelectedImages={selectedImages.length > 0}
                    onAdd={() => setIsAddModalOpen(true)}
                    onRemove={() => deleteSelectedImages()} 
                    onEdit={() => editSelectedBoard()}/>
            <BoardLists 
               lists = {boardLists}
               /* selectedBoard={selectedBoard}
               onLongPress={name => onImageLongPress(name)} *//>
        </View>
    )
}

export default Board;