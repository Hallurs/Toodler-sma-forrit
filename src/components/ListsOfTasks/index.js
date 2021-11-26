import React from 'react';
import { View, FlatList } from 'react-native';
import SingleTaskComponent from '../SingleTaskComponent';
import styles from './styles.js';

const ListsOfTasks = ({lists}, onLongPress) => (
    <View style={styles.listContainer}>
        <FlatList
            data = {lists}
            renderItem={({ item }) => {
                return (
                    <SingleTaskComponent
                        name={item.name}
                        description={item.description}
                        id={item.id} 
                        onLongPress = {onLongPress}/>
                );
            }}
            keyExtractor={image => image.name} />
    </View>
)

export default ListsOfTasks;