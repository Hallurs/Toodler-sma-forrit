import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import ListsOfTasks from "../../components/ListsOfTasks";
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';

const Tasks = ({route}) => {
    const { listId } = route.params;

    const [selectedBoard, setSelectedBoard] = useState([]);
    const [tasksLists, setTasksLists] = useState([]);

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

    /* {console.log("final Task lists list",tasksLists)} */

    return(
        <View style={styles.container}>
            <ListsOfTasks 
            lists = {tasksLists}/> 
        </View>
    )
};

export default Tasks;