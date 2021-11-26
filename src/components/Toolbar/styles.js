import { StyleSheet } from 'react-native';
import { coolcolor } from '../../styles/colors';

export default StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: coolcolor,
        borderColor: 'white',
        borderRadius: 25,
        borderWidth: 2,
    },
    toolbarAction: {
        flex: 1,
        alignItems: 'center'
    },
    toolbarActionText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    }
});