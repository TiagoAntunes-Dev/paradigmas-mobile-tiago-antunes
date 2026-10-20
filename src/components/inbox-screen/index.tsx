import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "@/styles/colors";
import { NOTIFICATIONS } from "@/utils/data";
import { s } from "./styles";

type NotificationId = (typeof NOTIFICATIONS)[number]["id"];

export default function InboxScreen() {
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [unreadIds, setUnreadIds] = useState<NotificationId[]>(
    () => NOTIFICATIONS.map((notification) => notification.id)
  );
  const notifications = NOTIFICATIONS.filter(
    (notification) => !unreadOnly || unreadIds.includes(notification.id)
  );

  const markAsRead = (id: NotificationId) => {
    setUnreadIds((current) => current.filter((unreadId) => unreadId !== id));
  };

  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Text style={s.heading}>Caixa de entrada</Text>
          <Text style={s.subtitle}>Acompanhe o que está acontecendo.</Text>
        </View>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Marcar tudo como lido"
          onPress={() => setUnreadIds([])}
          style={s.headerAction}
        >
          <Feather name="check" size={18} color={colors.gray[100]} />
        </TouchableOpacity>
      </View>

      <View style={s.filters}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={{ selected: !unreadOnly }}
          onPress={() => setUnreadOnly(false)}
          style={[s.filter, !unreadOnly && s.activeFilter]}
        >
          <Text style={[s.filterText, !unreadOnly && s.activeFilterText]}>
            Tudo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={{ selected: unreadOnly }}
          onPress={() => setUnreadOnly(true)}
          style={[s.filter, unreadOnly && s.activeFilter]}
        >
          <Text style={[s.filterText, unreadOnly && s.activeFilterText]}>
            Não lidas
          </Text>
          <View style={s.unreadCount}>
            <Text style={s.unreadCountText}>{unreadIds.length}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={s.list}
        showsVerticalScrollIndicator={false}
      >
        <Text style={s.sectionTitle}>Recentes</Text>
        {notifications.map((notification) => {
          const unread = unreadIds.includes(notification.id);

          return (
            <TouchableOpacity
              accessibilityRole="button"
              key={notification.id}
              onPress={() => markAsRead(notification.id)}
              style={s.notification}
            >
              <View style={s.notificationIcon}>
                <Feather
                  name={notification.icon}
                  size={18}
                  color={colors.gray[100]}
                />
              </View>
              <View style={s.notificationContent}>
                <View style={s.notificationHeading}>
                  <Text style={s.notificationTitle}>{notification.title}</Text>
                  {unread && <View style={s.unreadDot} />}
                </View>
                <Text style={s.notificationDetail}>{notification.detail}</Text>
                <Text style={s.notificationTime}>{notification.time}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        {notifications.length === 0 && (
          <View style={s.emptyState}>
            <Feather name="inbox" size={26} color={colors.gray[300]} />
            <Text style={s.emptyTitle}>Sua caixa está vazia</Text>
            <Text style={s.emptyDescription}>
              Não há notificações não lidas.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
