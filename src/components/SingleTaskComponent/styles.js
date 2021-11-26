import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    task: {        
        width: 200,
        height: 100,
        margin: 10,
        borderRadius: 25,
    },
    taskText: {
        textAlign: 'center',
        fontSize: 36,
    },
    checkmark: {
        position: 'absolute',
        top: 15,
        right: 15,
        fontSize: 16
    }
});