import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import ListsOfTasks from "../../components/ListsOfTasks";
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';
import EditModal from '../../components/EditModal';
import AddModal from '../../components/AddModal';

const Tasks = ({route}) => {
    const { listId } = route.params;

    const [selectedTasks, setSelectedTasks] = useState([]);
    const [tasksLists, setTasksLists] = useState([]);
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
            const newLists = [...data.tasks/* ,...sommin */]
            const finalLists = newLists.filter(tasks => tasks.listId === listId);
            //console.log(newLists)
            //console.log('boutta find out', finalLists)
            setTasksLists(finalLists);
                      
        })();
    }, []);

    const deleteSelectedTask = async () => {
        // Promise.all resolves the list of promises resulting in all images being deleted.
        await Promise.all(selectedTasks.map(task => fileService.remove_list(task)) /* Returns a list of promises */);
        
        // Correct the state variables
        setBoardsLists(tasksLists.filter(tasksList => selectedTasks.indexOf(tasksList.name) === -1));
        
        setSelectedTasks([]);
        setLoadingImages(false);
    }

    const editSelectedTask = async () => {
        setIsEditModalOpen(true);
    }

    const overWriteData = (name ,newBoardName) => {
        const imagefound = images.find(image => image.name === name[0]);
        setTempImage();
        setSelectedTasks([]);
        setIsEditModalOpen(false);
    }

    const addWriteData = (newBoardName) => {
        const newImage = {
            name: newBoardName,
            thumbnailPhoto: tempImage
        };
        images.push(newImage);
        setTempImage();
        setSelectedTasks([]);
        setIsAddModalOpen(false);
    }

    const onTaskLongPress = name => {
        if (selectedTasks.indexOf(name) !== -1) {
            // The image is already within the list
            setSelectedTasks(selectedTasks.filter(task => task !== name));
        } else {
            // Add the new list and replace the old list
            if (selectedTasks.length > 0) 
            {
                selectedTasks.pop();
                setSelectedTasks([...selectedTasks, name]);
            } else {
                setSelectedTasks([...selectedTasks, name]);
            }
        }
    };

    /* {console.log("final Task lists list",tasksLists)} */

    return(
        <View style={styles.container}>
            <Toolbar
                    //hasSelectedImages={selectedTasks.length > 0}
                    onAdd={() => setIsAddModalOpen(true)}
                    onRemove={() => deleteSelectedTask()} 
                    onEdit={() => editSelectedTask()}/>
            <ListsOfTasks 
            lists = {tasksLists}
            onLongPress = {onTaskLongPress}/> 
            <EditModal
                nameOfBoard={[...selectedTasks]}
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
                takePhoto={() => takePhoto()}
                confirmChanges={(newboardname) => overWriteData(selectedTasks, newboardname)}
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

export default Tasks;