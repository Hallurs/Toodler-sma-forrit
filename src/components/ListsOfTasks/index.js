import React from 'react';
import { View, FlatList } from 'react-native';
import SingleTaskComponent from '../SingleTaskComponent';

const ListsOfTasks = ({lists}) => (
    <View>
        <FlatList
            data = {lists}
            renderItem={({ item }) => {
                return (
                    <SingleTaskComponent
                        name={item.name}
                        description={item.description}
                        id={item.id} />
                );
            }}
            keyExtractor={image => image.name} />
    </View>
)

export default ListsOfTasks;