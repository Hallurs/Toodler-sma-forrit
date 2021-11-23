import React from "react";
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';

const lists = ({navigation: { navigate } }) => (
    <View style={styles.container}>
        <TouchableHighlight
            onPress={() => navigate('Tasks')} 
            style={styles.button}>
            <Text style={styles.buttonText}>On lists now</Text>
        </TouchableHighlight>
    </View>
);

export default lists;