import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: 24,
        backgroundColor: '#27153E',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    box: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 24,
        marginLeft: 8,
        color: '#FFF'
    },
    username: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFF'
    }
});