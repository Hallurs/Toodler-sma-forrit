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
                        color={item.color} 
                        id={item.id} />
                );
            }}/>
        </View>
    )
}

export default BoardLists;