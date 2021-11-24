import React from "react";
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import BoardList from "../../components/BoardList";
import data from "../../resources/data.json";

const Boards = ({navigation: { navigate } }) => (
    <View style={styles.container}>
        <BoardList images={data.boards}/>
        {/* <TouchableHighlight 
            onPress={() => navigate('Lists')}
            style={styles.button}>
            <Text style={styles.buttonText}>On boards now</Text>
        </TouchableHighlight> */}
    </View>
);

export default Boards;