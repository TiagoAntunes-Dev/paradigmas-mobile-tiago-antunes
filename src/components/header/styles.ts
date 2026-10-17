import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray[400],
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 21, //
    overflow: "hidden", //
    backgroundColor: colors.gray[800] ?? "#333",
    borderWidth: 2,
    borderColor: "#fff",
  },
  user: {
    flex: 1,
  },
  name: {
    color: colors.gray[100],
    fontWeight: "500",
    fontSize: 14,
  },
  email: {
    color: colors.gray[300] ?? colors.gray[100], // Um tom ligeiramente mais suave para o e-mail
    fontSize: 12, // Subi ligeiramente de 10 para 12 para melhorar a legibilidade no celular
  },
});