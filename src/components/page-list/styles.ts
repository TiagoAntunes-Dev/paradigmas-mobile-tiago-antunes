import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors"

export const s = StyleSheet.create({
    container: {
        padding: 20,
        gap: 12
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingRight: 16
    },

    title:{
        color: colors.gray[300],
        fontSize: 16,
        flex: 1
    },

    list: {
        backgroundColor: colors.gray[700],
        borderRadius: 10
    },

    separator: {
        flex: 1,
        height: 1,
        backgroundColor: colors.gray[400],
        marginLeft: 42
    }
})