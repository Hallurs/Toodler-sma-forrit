import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';

const Task = ({route}) => {
    //console.log('Hæ')
    const { taskId } = route.params;
    //console.log(taskId)
    
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
            const finalLists = newLists.filter(task => task.id === taskId);
            //console.log(newLists)
            setTasksLists(finalLists);
                      
        })();
    }, []);
    console.log(tasksLists[0].description)

    return(
        <View style={styles.container}>
            <Text>
            {tasksLists[0].description}
            {tasksLists[0].isFinished}
            </Text>
        </View>
    )
};

export default Task;