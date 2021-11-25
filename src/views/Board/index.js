import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';
import BoardInfo from '../../components/BoardInfo';

const Board = ({ id }) => {
    
    const [selectedBoard, setSelectedBoard] = useState([]);
    
    return(
        <View>
            <BoardInfo 
               lists = {data.lists} 
               selectedBoard={selectedBoard}
               onLongPress={name => onImageLongPress(name)}/>
        </View>
    )
}

export default Board;