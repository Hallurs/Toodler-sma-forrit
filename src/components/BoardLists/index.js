import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import SingleListComponent from '../SingleListComponent';

const BoardLists = ({lists}) => {
    return(
        <View>
            <FlatList
            data = {lists}
            renderItem={({ item }) => {
                return (
                    <SingleListComponent
                        name={item.name}
                        color={item.color} />
                );
            }}
            keyExtractor={image => image.name} />
        </View>
    )
}

export default BoardLists;