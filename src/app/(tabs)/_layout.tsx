import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import React from "react";

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.gray[400],
        tabBarActiveTintColor: colors.red[300],
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.white,
        },
        sceneStyle: {
          backgroundColor: colors.gray[800],
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="inbox" color={color} size={size} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: colors.red[300]
          }
        }}
      />

      <Tabs.Screen
        name="edit"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="edit" color={color} size={size} />
          ),
        }}
      />

    </Tabs>
  );
}
