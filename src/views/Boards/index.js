import React from "react";
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';

const Boards = ({navigation: { navigate } }) => (
    <View style={styles.container}>
        <TouchableHighlight 
            style={styles.button}>
            <Text style={styles.buttonText}>On boards now</Text>
        </TouchableHighlight>
    </View>
);

export default Boards;