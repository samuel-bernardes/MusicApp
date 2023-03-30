import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 24,
        paddingRight: 125,
        backgroundColor: colors.brand.primary,
        flexDirection: 'row'
    },
    title: {
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 24,
        color: '#FFF'
    }
});