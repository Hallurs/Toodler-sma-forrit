import React from 'react';
import { View, FlatList } from 'react-native';
import SingleTaskComponent from '../SingleTaskComponent';
import styles from './styles.js';

const ListsOfTasks = ({lists, selectedTasks, onLongPress, onValueChange}) => (
    <View style={styles.listContainer}>
        <FlatList
            data = {lists}
            extraData={selectedTasks}
            renderItem={({ item }) => {
                return (
                    <SingleTaskComponent
                        isSelected={selectedTasks.indexOf(item.name) !== -1}
                        name={item.name}
                        onLongPress={onLongPress}
                        onValueChange={onValueChange}
                        description={item.description}
                        id={item.id} 
                        status={item.isFinished}/>
                );
            }}
            keyExtractor={image => image.name} />
    </View>
)

export default ListsOfTasks;