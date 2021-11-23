import React from "react";
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';

const Main = () => (
    <View style={styles.container}>
        <TouchableHighlight>
            <Text>Boards</Text>
        </TouchableHighlight>
    </View>
);

export default Main;