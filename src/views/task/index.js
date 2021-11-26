import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';

const Task = ({route}) => {
    const { taskId } = route.params;
    
    const [selectedBoard, setSelectedBoard] = useState([]);
    const [tasksLists, setTasksLists] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        (() => {
            //console.log(images)
            /* const sommin = images.map((image,index) => ({
                id: index+4,
                name: image.name,
                thumbnailPhoto: `data:image/jpeg;base64,${image.file}`
            })) */
            const newLists = [...data.tasks/* ,...sommin */]
            const finalLists = newLists.filter(task => task.id === taskId);
            setTasksLists(finalLists);   
            setLoaded(true);  
        })();
    }, []);

    return(
        <View style={styles.container}>
            {
                isLoaded
                ?
                <View>
                    <Text style={styles.title}>
                        {tasksLists[0].name}
                    </Text>

                    <Text style={styles.description}>
                        {tasksLists[0].description} 
                    </Text>
                </View>
                :
                <></>
            }
        </View>
    )
};

export default Task;