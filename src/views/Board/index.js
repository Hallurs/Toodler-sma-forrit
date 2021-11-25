import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';
import BoardLists from '../../components/BoardLists';

const Board = ({route}) => {
    
    const { boardId } = route.params; 

    const [selectedTasks, setSelectedTasks] = useState([]);
    const [boardLists, setTaskLists] = useState([]);

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
            setTaskLists(finalLists);
                      
        })();
    }, []);

    const onTaskLongPress = name => {
        if (selectedTasks.indexOf(name) !== -1) {
            // The image is already within the list
            setSelectedTasks(selectedTasks.filter(task => task !== name));
        } else {
            // Add the new task and replace the old task
            if (selectedTasks.length > 0) 
            {
                selectedTasks.pop();
                setSelectedTasks([...selectedTasks, name]);
            } else {
                setSelectedTasks([...selectedTasks, name]);
            }
        }
    };

    /* {console.log("final board lists list",boardLists)} */
    return(
        <View style={styles.container}>
            <Toolbar
                    hasSelectedImages={selectedTasks.length > 0}
                    onAdd={() => setIsAddModalOpen(true)}
                    onRemove={() => deleteSelectedTask()} 
                    onEdit={() => editSelectedTask()}/>
            <BoardLists 
               lists = {boardLists}
               selectedTasks={selectedTasks}
               onLongPress={name => onTaskLongPress(name)} />
        </View>
    )
}

export default Board;