import Header from "@/components/header";
import React from "react";
import { DATA } from "@/utils/data";
import { View, StyleSheet, ScrollView } from "react-native";
import PageList from "@/components/page-list";
import RecentList from "@/components/recent-list";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 100
        }}
        >
      <RecentList data={DATA.RECENT}/>
      <PageList data={DATA.PAGES} />
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
});
