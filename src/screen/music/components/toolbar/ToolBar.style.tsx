import { StyleSheet, Dimensions } from "react-native";

const widthButton = Dimensions.get('window').width * 0.75;
const widthButtonSocial = Dimensions.get('window').width * 0.35;

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 32,
        width: "80%",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pauseView: {
        backgroundColor: '#3C2D51',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        height: 60,
        width: 60
    },

    timer: {
        color: '#FFF'
    }
});