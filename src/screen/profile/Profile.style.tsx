import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 12
    },
    title: {
        color: '#EDEDED',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: "95%",
        borderRadius: 18,
        paddingTop: 12,
        paddingBottom: 32,
        backgroundColor: "#444444"
    },
    infosText: {
        color: "#EDEDED",
        fontSize: 14
    },
    infos: {
        height: "80%",
        marginLeft: 20
    },
    editBox: {
        backgroundColor: "#EDEDED",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        borderRadius: 18,
        marginTop: 8
    },
    detailsBox: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: "90%",
        paddingVertical: 6
    },
    detailsList: {
        backgroundColor: "#444444",
        borderRadius: 18,
        marginBottom: 12,
        paddingVertical: 12
    },
    data: {
        color: "#EDEDED",
        fontWeight: "bold",
        lineHeight: 24,
        width: "85%",
        textAlign: "justify"
    },
    description: {
        fontWeight: "500",
    }
});