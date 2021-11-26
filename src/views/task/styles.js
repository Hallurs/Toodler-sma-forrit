import { StyleSheet } from "react-native";
import { periwinkle, coolcolor } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: periwinkle,
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
    buttonText: {
        color: 'white',
    },
    title: {
        textAlign: 'center',
        fontSize: 36,
    },
    description: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '95%',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: '45%',
        paddingTop: '45%'
    }
});