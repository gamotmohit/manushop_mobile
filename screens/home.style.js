import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontFamily: "bold",
        fontSize: 40
    },
    appBarWarpper: {
        marginHorizontal: 22,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    location: {
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.gray

    },
    cartCount:{
        position: "absolute",
        bottom: 16,
        width: 16,
        height: 16,
        right: -5,
        borderRadius: 0,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#ff3700",
        justifyContent: "center",
        zIndex: 999
    },
    cartNumber:{
        fontFamily: "regular",
        fontWeight: 600,
        fontSize: 10,
        color: COLORS.lightWhite
    }
});

export default styles;