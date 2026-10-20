import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: colors.gray[800],
    paddingTop: 38,
  },
  header: {
    minHeight: 52,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    color: colors.gray[100],
    fontSize: 24,
    fontWeight: "700",
  },
  headerAction: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: colors.gray[700],
  },
  searchBox: {
    minHeight: 46,
    marginHorizontal: 20,
    marginTop: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 8,
    backgroundColor: colors.gray[700],
    borderWidth: 1,
    borderColor: colors.gray[600],
  },
  input: {
    flex: 1,
    color: colors.gray[100],
    fontSize: 15,
    paddingVertical: 10,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 26,
    paddingBottom: 32,
  },
  sectionTitle: {
    color: colors.gray[300],
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 10,
  },
  pageRow: {
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.gray[600],
  },
  pageIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    backgroundColor: colors.gray[700],
  },
  pageTitle: {
    flex: 1,
    color: colors.gray[100],
    fontSize: 15,
  },
  emptyState: {
    alignItems: "center",
    paddingTop: 52,
    gap: 10,
  },
  emptyTitle: {
    color: colors.gray[100],
    fontSize: 15,
    fontWeight: "600",
  },
  emptyDescription: {
    color: colors.gray[300],
    fontSize: 13,
  },
});
