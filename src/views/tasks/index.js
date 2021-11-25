import React from "react";
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import ListsOfTasks from "../../components/ListsOfTasks";

const Tasks = ({route}) => {
    const { listId } = route.params;

    return(
        <View style={styles.container}>
            <ListsOfTasks /> 
        </View>
    )
};

export default Tasks;