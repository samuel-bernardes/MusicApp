import { StyleSheet, Dimensions } from "react-native";

const widthButton = Dimensions.get('window').width * 0.75;
const widthButtonSocial = Dimensions.get('window').width * 0.35;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
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

    textColor: {
        color: "#FAFAFA"
    },

    textMusic: {
        fontSize: 20, 
        fontWeight: "700"
    },

    textAlbum: {
        fontSize: 16, 
        fontWeight: "600"
    },

    image: {
        width: "80%",
        marginVertical: 24,
        height: 320,
        borderRadius: 12
    },
});