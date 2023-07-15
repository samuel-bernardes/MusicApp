import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: Platform.OS === 'ios' ? 44 : 0,
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
        fontSize: Platform.OS === 'ios' ? 24 : 20,
        paddingLeft: 8,
        color: '#FFF'
    },
    username: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
        textAlign: 'center'
    }
});
