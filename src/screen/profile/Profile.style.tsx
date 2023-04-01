import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 12
    },
    profileImage: {
        width: 160,
        height: 160,
        borderRadius: 100
    },
    imageBox: {
        width: '100%',
        alignItems: 'center',
        marginTop: 4
    },
    nameTitle: {
        color: colors.text.tertiary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 12
    },
    infosText: {
        color: colors.text.tertiary,
        width: '65%',
        textAlign: 'center',
        opacity: 0.8,
        fontSize: 14
    },
    infos: {
        height: "80%",
        marginLeft: 20
    },
    editBox: {
        backgroundColor: colors.text.tertiary,
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
        color: colors.text.tertiary,
        fontWeight: "bold",
        lineHeight: 24,
        width: "85%",
        textAlign: "justify"
    },
    description: {
        fontWeight: "500",
    }
});