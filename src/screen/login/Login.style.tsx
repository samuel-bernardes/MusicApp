import { StyleSheet, Dimensions } from "react-native";

const widthButton = Dimensions.get('window').width * 0.75;
const widthButtonSocial = Dimensions.get('window').width * 0.35;

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        alignItems: "center",
        paddingHorizontal: 12
    },
    button: {
        backgroundColor: '#3C2D51',
        marginTop: 12,
        width: widthButton,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        padding: 12
    },

    textButton: {
        color: "#FAFAFA", 
        fontSize: 14, 
        fontWeight: "600"
    },

    socialButton: {
        borderWidth: 1,
        marginHorizontal: 12,
        borderColor: "#FAFAFA",
        alignItems: "center",
        justifyContent: "center",
        width: widthButtonSocial,
        flexDirection: 'row',
        borderRadius: 8,
        padding: 12,
    },
    input: {
        borderBottomWidth: 1,
        color: '#FAFAFAFA',
        width: "80%",
        marginVertical: 10  , 
        borderBottomColor: "#FAFAFAFA"
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: '#FAFAFAFA',
        fontSize: 42,
        fontWeight: 'bold'
    },
    text: {
        color: '#FAFAFAFA',
        fontSize: 18,
        textShadowColor: '#3C2D51',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});