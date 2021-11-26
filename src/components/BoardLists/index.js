import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import SingleListComponent from '../SingleListComponent';
import PropTypes from 'prop-types';

const BoardLists = ({lists, selectedLists, onLongPress}) => {
    return(
        <View style={styles.listContainer}>
            <FlatList
            data = {lists}
            renderItem={({ item }) => {
                return (
                    <SingleListComponent
                        isSelected={selectedLists.indexOf(item.name) !== -1}
                        onLongPress={onLongPress}
                        name={item.name}
                        color={item.color} 
                        id={item.id} />
                );
            }}/>
        </View>
    )
}

BoardLists.propTypes = {
    // A list of lists
    lists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        color: PropTypes.string,
        boardId: PropTypes.number
    })),
    // all curently selected lists
    selectedLists: PropTypes.arrayOf(PropTypes.string),
    // when the List is pressed for long duration
    onLongPress: PropTypes.func.isRequired
};

export default BoardLists;