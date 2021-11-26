import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import ListsOfTasks from "../../components/ListsOfTasks";
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';
import * as fileService from '../../services/fileService';

import EditTaskModal from '../../components/EditTaskModal';
import AddTaskModal from '../../components/AddTaskModal';

const Tasks = ({route}) => {
    const { listId } = route.params;
    const [allTasksLists, setAllTasksLists] = useState([]);
    const [tasksLists, setTasksLists] = useState([]);
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [allBoardTasks, setAllBoardsTasks] = useState();
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
            setAllTasksLists(newLists);
            const finalLists = newLists.filter(tasks => tasks.listId === listId);
            //console.log(newLists)
            //console.log('boutta find out', finalLists)
            setTasksLists(finalLists);
                      
        })();
    }, []);
    
    const editSelectedList = async () => {
        setIsEditModalOpen(true);
    }

    const deleteSelectedTask = async () => {
        // Promise.all resolves the list of promises resulting in all boardLists being deleted.
        await Promise.all(selectedTasks.map(task => fileService.remove_task(task)) /* Returns a list of promises */);
        
        // Correct the state variables
        setTasksLists(tasksLists.filter(tasksLists => selectedTasks.indexOf(tasksLists.name) === -1));
        
        setSelectedTasks([]);
        setLoadingImages(false);
    }

    const addWriteData = (inputdata) => {
        // Dont need unique id but cool to keep this incase of future projects needing it
        const largestId = allTasksLists.map(task => task.id).sort((a, b) => a - b)[allTasksLists.length - 1];
        console.log(inputdata)
        console.log(largestId)
        const newTask = {
            id: largestId + 1,
            name: inputdata.newTaskName,
            description: inputdata.taskDescription,
            isFinished: false,
            listId: listId
        };
        allTasksLists.push(newTask);
        fileService.add("tasks",newTask)
        tasksLists.push(newTask);
        setSelectedTasks([]);
        setIsAddModalOpen(false);
    }

    const onTaskLongPress = name => {
        if (selectedTasks.indexOf(name) !== -1) {
            // The image is already within the list
            setSelectedTasks(selectedTaks.filter(task => task !== name));
        } else {
            // Add the new image and replace the old image
            if (selectedTasks.length > 0) 
            {
                selectedTasks.pop();
                setSelectedTasks([...selectedTasks, name]);
            } else {
                setSelectedTasks([...selectedTasks, name]);
            }
        }
    }
   


    return(
        <View style={styles.container}>
            <Toolbar
                    hasSelectedImages={selectedTasks.length > 0}
                    onAdd={() => setIsAddModalOpen(true)}
                    onRemove={() => deleteSelectedTask()} 
                    onEdit={() => editSelectedTask()}/>
            <ListsOfTasks 
                lists = {tasksLists}
                selectedTasks={selectedTasks}
                onLongPress={name => onTaskLongPress(name)}/> 
            <EditTaskModal
                nameOfBoard={[...selectedTasks]}
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
                takePhoto={() => takePhoto()}
                confirmChanges={(newboardname) => overWriteData(selectedTasks, newboardname)}
                selectFromCameraRoll={() => selectFromCameraRoll()} 
                />
            <AddTaskModal                 
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                takePhoto={() => takePhoto()}
                confirmChanges={(taskdata) => addWriteData(taskdata)}
                selectFromCameraRoll={() => selectFromCameraRoll()}
                />
        </View>
    )
};

export default Tasks;