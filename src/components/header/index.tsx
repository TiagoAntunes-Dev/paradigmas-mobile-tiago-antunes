import React from "react";
import { s } from "./styles";

import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export default function Header() {
  return (
    <View style={s.container}>
      <Image 
        style={s.image}
        source={{ uri: "https://github.com/tiagoantunes-dev.png"}}
      />

      <View style={s.user}>
        <Text style={s.name}>Tiago Antunes</Text>
        <Text style={s.email}>tiagoantunes1974@gmail.com</Text>
      </View>

      <TouchableOpacity>
        <Feather name="more-horizontal" size={20} color={colors.gray[100]}/>
      </TouchableOpacity>

    </View>
  );
}
