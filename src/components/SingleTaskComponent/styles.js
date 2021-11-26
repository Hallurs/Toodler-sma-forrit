import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    task: {    
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',    
        overflow: 'hidden',
        width: 300,
        height: 100,
        margin: 10,
        borderRadius: 25,
    },
    taskText: {
        textAlign: 'center',
        paddingRight: 5,
        fontSize: 20,
    },
    checkbox: {
        width: 30,
        height: 30
    },
    checkmark: {
        position: 'absolute',
        top: 15,
        right: 15,
        fontSize: 16
    },
    container: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    }
});