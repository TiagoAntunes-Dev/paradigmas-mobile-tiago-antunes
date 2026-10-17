import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors }  from "@/styles/colors";

export default function Edit() {
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.white }}>Edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
