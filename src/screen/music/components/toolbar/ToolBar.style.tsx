import { StyleSheet } from "react-native";

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