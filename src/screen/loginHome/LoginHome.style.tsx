import { StyleSheet } from "react-native";


export default StyleSheet.create({
    button: {
        backgroundColor: '#A4FF8E',
        alignSelf: 'center',
        marginTop: 24,
        marginBottom: 12,
        alignItems: 'center',
        borderRadius: 12,
        width: "40%",
        padding: 14
    },
    title: {
        color: '#FAFAFAFA',
        fontSize: 30,
        width: "55%",
        alignSelf: "center",
        textAlign: 'center',
        textShadowColor: '#3C2D51',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius: 2,
        fontWeight: 'bold'
    },
    text: {
        color: '#FAFAFAFA',
        fontSize: 18,
        textShadowColor: '#3C2D51',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius: 2,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});