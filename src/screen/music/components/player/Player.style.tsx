import { StyleSheet, Dimensions } from "react-native";

const widthButton = Dimensions.get('window').width * 0.75;
const widthButtonSocial = Dimensions.get('window').width * 0.35;

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 24,
        width: "85%",
    }
});