import React from "react";
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';

const task = ({navigation: { navigate } }) => (
    <View style={styles.container}>
        <TouchableHighlight 
            style={styles.button}>
            <Text style={styles.buttonText}>On task now</Text>
        </TouchableHighlight>
    </View>
);

export default task;