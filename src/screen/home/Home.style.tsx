import { StyleSheet } from "react-native";


export default StyleSheet.create({
    title: {
        color: '#EDEDED',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20
    },
    banner: {
        backgroundColor: '#3C2D51',
        alignSelf: 'center',
        paddingHorizontal: 24,
        marginTop: 20,
        paddingTop: 12,
        paddingBottom: 16,
        borderRadius: 12,
        width: "95%"
    },
    bannerText: {
        fontWeight: "700",
        width: "80%",
        fontSize: 20,
        color: "#FFFFFF",
    },
    button: {
        backgroundColor: '#A4FF8E',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 12,
        width: "40%",
        padding: 8,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 12,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    titleMusic: {
        fontSize: 16,
        color: "#FFF",
        marginLeft: 10,
        maxWidth: 220,
        textTransform: 'capitalize',
        fontWeight: "700",
    },
    musicBox: {
        flexDirection: 'row',
        backgroundColor: '#3C2D51',
        marginTop: 20,
        borderRadius: 12,
        alignSelf: 'center',
        width: "95%"
    },
    recomedationBox: {
        marginTop: 20,
        borderRadius: 12,
        alignSelf: 'center',
        width: "95%"
    },
    recommendationsContainer: {
        flexDirection: 'row'
    }
});