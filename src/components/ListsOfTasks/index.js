import React from 'react';
import { View, FlatList } from 'react-native';
import SingleTaskComponent from '../SingleTaskComponent';
import styles from './styles.js';
import PropTypes from 'prop-types';

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

ListsOfTasks.propTypes = {
    // A list of tasks
    lists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        isFinished: PropTypes.bool,
        listId: PropTypes.number
    })),
    // all curently selected tasks
    selectedTasks: PropTypes.arrayOf(PropTypes.string),
    // when the Task is pressed for long duration
    onLongPress: PropTypes.func.isRequired
};

export default ListsOfTasks;