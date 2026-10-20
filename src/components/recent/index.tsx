import React from "react";
import { s } from "./styles"
import { Feather } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, Image, type ImageSourcePropType } from "react-native";
import { colors } from "@/styles/colors";

type Props = {
  data: {
    title: string
    cover?: ImageSourcePropType
  }
}

export default function Recent({ data }: Props) {
  return (
    <TouchableOpacity
      style={s.container}
      activeOpacity={0.75}
      accessibilityRole="button"
      accessibilityLabel={`Abrir página ${data.title}`}
    >
      {data.cover ? (
        <Image
          style={s.cover}
          source={data.cover}
          resizeMode="contain"
        />
      ) : (
        <View style={s.coverPlaceholder}>
          <Feather name="file-text" size={28} color={colors.gray[300]} />
        </View>
      )}

      <View style={s.content}>
        <Feather
          name="file-text"
          size={18}
          color={colors.gray[300]}
          style={s.icon}
        />

        <Text
          style={s.title}
          numberOfLines={2}
        >
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
