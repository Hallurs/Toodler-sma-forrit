import React from "react";
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';

const Main = ({navigation: { navigate } }) => (
    <View style={styles.container}>
        <TouchableHighlight 
            onPress={() => navigate('Boards')}
            style={styles.button}>
            <Text style={styles.buttonText}>Boards</Text>
        </TouchableHighlight>
    </View>
);

export default Main;