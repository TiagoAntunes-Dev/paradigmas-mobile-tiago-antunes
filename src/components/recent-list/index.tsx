import React from "react";
import { View, Text, FlatList } from "react-native";
import type { ImageSourcePropType } from "react-native";

import { s } from "./styles"
import Recent from "@/components/recent"

type Props = {
  data: {
    id: string,
    title: string
    cover?: ImageSourcePropType
  }[]
}

export default function RecentList({data} : Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Recentes</Text>

      <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Recent data={item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
