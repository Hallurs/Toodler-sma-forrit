import React from 'react';
import { View, FlatList } from 'react-native';
import SingleTaskComponent from '../SingleTaskComponent';
import styles from './styles.js';

const ListsOfTasks = ({lists, selectedTasks, onLongPress}) => (
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
                        description={item.description}
                        id={item.id} />
                );
            }}
            keyExtractor={image => image.name} />
    </View>
)

export default ListsOfTasks;