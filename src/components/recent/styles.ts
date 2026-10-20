import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        height: 150,
        width: 144,
        borderRadius: 8,
        backgroundColor: colors.gray[800],
        overflow: "hidden",
        borderWidth: 1,
        borderColor: colors.gray[600],
    },

    cover: {
        width: "100%",
        height: 82,
        backgroundColor: colors.gray[600]
    },

    coverPlaceholder: {
        width: "100%",
        height: 82,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.gray[700],
    },

    title: {
        color: colors.gray[100],
        fontSize: 14,
        fontWeight: "500",
        flex: 1,
    },

    icon: {
        marginTop: 1,
    },

    content: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 8,
        padding: 10,
    }
})