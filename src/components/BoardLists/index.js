import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import SingleListComponent from '../SingleListComponent';

const BoardLists = ({lists, selectedTasks, onLongPress}) => {
    return(
        <View style={styles.listContainer}>
            <FlatList
            data = {lists}
            renderItem={({ item }) => {
                return (
                    <SingleListComponent
                        isSelected={selectedTasks.indexOf(item.name) !== -1}
                        onLongPress={onLongPress}
                        name={item.name}
                        color={item.color} 
                        id={item.id} />
                );
            }}/>
        </View>
    )
}

export default BoardLists;