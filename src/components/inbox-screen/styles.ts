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
    minHeight: 62,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    color: colors.gray[100],
    fontSize: 23,
    fontWeight: "700",
  },
  subtitle: {
    color: colors.gray[300],
    fontSize: 13,
    marginTop: 4,
  },
  headerAction: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: colors.gray[700],
  },
  filters: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 16,
  },
  filter: {
    minHeight: 34,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingHorizontal: 12,
    borderRadius: 7,
    backgroundColor: colors.gray[700],
  },
  activeFilter: {
    backgroundColor: colors.gray[100],
  },
  filterText: {
    color: colors.gray[300],
    fontSize: 13,
    fontWeight: "500",
  },
  activeFilterText: {
    color: colors.gray[800],
  },
  unreadCount: {
    minWidth: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
    backgroundColor: colors.gray[600],
  },
  unreadCountText: {
    color: colors.gray[100],
    fontSize: 11,
    fontWeight: "600",
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  sectionTitle: {
    color: colors.gray[300],
    fontSize: 13,
    fontWeight: "600",
    paddingVertical: 8,
  },
  notification: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.gray[600],
  },
  notificationIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.gray[700],
  },
  notificationContent: {
    flex: 1,
    gap: 5,
  },
  notificationHeading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  notificationTitle: {
    flex: 1,
    color: colors.gray[100],
    fontSize: 14,
    fontWeight: "600",
  },
  unreadDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#75B798",
  },
  notificationDetail: {
    color: colors.gray[300],
    fontSize: 13,
    lineHeight: 18,
  },
  notificationTime: {
    color: colors.gray[400],
    fontSize: 12,
    marginTop: 2,
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
