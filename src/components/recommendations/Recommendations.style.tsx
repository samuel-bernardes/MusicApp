import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.brand.secondary,
        marginRight: 14,
        marginVertical: 12,
        borderRadius: 8,
        padding: 12
    },
    title: {
        fontWeight: 'bold',
        marginTop: 8,
        letterSpacing: 2,
        fontSize: 16,
        color: colors.text.tertiary
    },
    image: {
        width: 290,
        height: 260,
        borderRadius: 8
    },
});