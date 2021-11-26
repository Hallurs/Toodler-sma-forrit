import { StyleSheet } from 'react-native';
import { periwinkle, coolcolor } from "../../styles/colors";

export default StyleSheet.create({
    icon: {
        fontSize: 60,
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    iconscontainer: {
        flexDirection: 'row',
    },
    button: {
        marginTop: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: coolcolor
    },
});