import React from "react";
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';

const Main = () => (
    <View style={styles.container}>
        <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Boards</Text>
        </TouchableHighlight>
    </View>
);

export default Main;