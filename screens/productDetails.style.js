import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        top: SIZES.xxLarge,
        zIndex: 999
    },
    image:{
        aspectRatio: 1,
        resizeMode: "cover"
    },
    details:{
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -44,
        top: 20
    },
    title:{
        fontFamily: "bold",
        fontSize: SIZES.large
    },
    price:{
        paddingHorizontal: 10,
        fontFamily: "semibold",
        fontSize: SIZES.large
    },
    priceWrapper:{
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 10,
        top: 5
    },
    rating: {
        top: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: SIZES.large,
    },
    ratingText:{
        top: 3,
        color: COLORS.gray,
        fontFamily: "medium",
        paddingHorizontal: SIZES.xSmall
    },
    descriptionWrapper:{
        marginTop: SIZES.large * 2,
        marginHorizontal: SIZES.large
    },
    description:{
        fontFamily: "medium",
        fontSize: SIZES.large
    },
    descText:{
       fontFamily: "regular",
       fontSize: SIZES.small,
       textAlign: "justify",
       marginBottom: SIZES.small 
    },
    location:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        padding: 5,
        borderRadius: SIZES.large
    },
    cartRow:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: SIZES.small,
        marginTop: SIZES.xLarge
    },
    cartBtn:{
        width: SIZES.width * 0.7,
        backgroundColor: COLORS.primary,
        padding: SIZES.small/2,
        borderRadius: SIZES.large
    },
    cartTitle:{
        marginLeft: SIZES.small,
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.lightWhite,
        textAlign: "center"
    },
    addCart:{
        width: 40,
        height: 40,
        paddingTop: 5,
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: COLORS.primary,
    }
});

export default styles;