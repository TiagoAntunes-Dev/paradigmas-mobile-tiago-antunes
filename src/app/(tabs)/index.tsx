import Header from "@/components/header";
import React from "react";
import { DATA } from "@/utils/data";
import { View, StyleSheet } from "react-native";
import RecentList from "@/components/recent-list";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header/>
      <RecentList data={DATA.RECENT}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
});
