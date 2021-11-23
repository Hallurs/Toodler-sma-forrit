import React from "react";
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';

const Tasks = ({navigation: { navigate } }) => (
    <View style={styles.container}>
        <TouchableHighlight
            onPress={() => navigate('Task')} 
            style={styles.button}>
            <Text style={styles.buttonText}>On tasks now</Text>
        </TouchableHighlight>
    </View>
);

export default Tasks;