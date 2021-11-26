import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import ListsOfTasks from "../../components/ListsOfTasks";
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';
import * as fileService from '../../services/fileService';

import EditTaskModal from '../../components/EditTaskModal';
import AddTaskModal from '../../components/AddTaskModal';
import MoveTaskModal from '../../components/MoveTaskModal/MoveTaskModal';

const Tasks = ({route}) => {
    const { listId } = route.params;
    const [allLists, setAllLists] = useState([]);
    const [allTasksLists, setAllTasksLists] = useState([]);
    const [tasksLists, setTasksLists] = useState([]);
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isMoveTaskModalOpen, setIsMoveTaskModalOpen] = useState(false);
    
    useEffect(() => {
        (async () => {
            const allTasks = [...data.tasks/* ,...sommin */]
            const allLists = [...data.lists/* ,...sommin */]
            setAllTasksLists(allTasks);
            setAllLists(allLists);
            const finalTasks = allTasks.filter(tasks => tasks.listId === listId);
            setTasksLists(finalTasks);
                      
        })();
    }, []);
    
    const editSelectedTask = async () => {
        setIsEditModalOpen(true);
    }

    const deleteSelectedTask = async () => {
        // Promise.all resolves the list of promises resulting in all boardLists being deleted.
        await Promise.all(selectedTasks.map(task => fileService.remove_task(task)) /* Returns a list of promises */);
        
        // Correct the state variables
        setTasksLists(tasksLists.filter(tasksLists => selectedTasks.indexOf(tasksLists.name) === -1));
        
        setSelectedTasks([]);
    }

    const addWriteData = (inputdata) => {
        // Dont need unique id but cool to keep this incase of future projects needing it
        const largestId = allTasksLists.map(task => task.id).sort((a, b) => a - b)[allTasksLists.length - 1];
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

    const overWriteData = taskdata => {
        const taskFound = tasksLists.find(task => task.name === selectedTasks[0]);
        if (taskdata.newTaskName !== "")
        {
            taskFound.name = taskdata.newTaskName; 
        }
        if (taskdata.taskDescription !== "")
        {
            taskFound.description = taskdata.taskDescription; 
        }
        setSelectedTasks([]);
        setIsEditModalOpen(false);
    }

    const moveTask = (listId) => {
        const taskFound = tasksLists.find(task => task.name === selectedTasks[0]);
        
        taskFound.listId = listId; 
        setTasksLists(tasksLists.filter(tasksLists => selectedTasks.indexOf(tasksLists.name) === -1));
        setSelectedTasks([]);
    }

    const checkboxPressed = id =>{
        const taskFound = tasksLists.find(task => task.id === id);
        if (taskFound.isFinished)
        {
            taskFound.isFinished = false
        } else {
            taskFound.isFinished = true
        }
    };

    const onTaskLongPress = name => {
        if (selectedTasks.indexOf(name) !== -1) {
            // The image is already within the list
            setSelectedTasks(selectedTasks.filter(task => task !== name));
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
                onEdit={() => editSelectedTask()}
                />
            <ListsOfTasks 
                lists = {tasksLists}
                selectedTasks={selectedTasks}
                onLongPress={name => onTaskLongPress(name)} 
                onValueChange={id => checkboxPressed(id)}
                />
            <TouchableHighlight 
                onPress={() => setIsMoveTaskModalOpen(true)}
                style={[styles.button, { opacity: selectedTasks.length === 0 ? .3 : 1 }]}
                disabled={selectedTasks.length === 0}
            >
                <Text style={styles.buttonText}>Move</Text>
            </TouchableHighlight>

            <MoveTaskModal
                isOpen={isMoveTaskModalOpen}
                closeModal={() => setIsMoveTaskModalOpen(false)}
                allLists={allLists}
                onSubmit={moveTask}
            />

            <EditTaskModal
                nameOfBoard={[...selectedTasks]}
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
                takePhoto={() => takePhoto()}
                confirmChanges={(taskdata) => overWriteData(taskdata)}
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