import React, { useMemo, useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { DATA } from "@/utils/data";
import { colors } from "@/styles/colors";
import { s } from "./styles";

type SearchResultProps = {
  title: string;
};

function SearchResult({ title }: SearchResultProps) {
  return (
    <TouchableOpacity accessibilityRole="button" style={s.pageRow}>
      <View style={s.pageIcon}>
        <Feather name="file-text" size={18} color={colors.gray[100]} />
      </View>
      <Text numberOfLines={1} style={s.pageTitle}>{title}</Text>
      <Feather name="arrow-up-left" size={16} color={colors.gray[400]} />
    </TouchableOpacity>
  );
}

function EmptySearchResults() {
  return (
    <View style={s.emptyState}>
      <Feather name="search" size={24} color={colors.gray[300]} />
      <Text style={s.emptyTitle}>Nenhuma página encontrada</Text>
      <Text style={s.emptyDescription}>Tente buscar por outro nome.</Text>
    </View>
  );
}

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const pages = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const source = normalizedQuery ? DATA.PAGES : DATA.RECENT;

    return source.filter((page) =>
      page.title.toLocaleLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.heading}>Buscar</Text>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Limpar busca"
          onPress={() => setQuery("")}
          style={s.headerAction}
        >
          <Feather name="x" size={20} color={colors.gray[100]} />
        </TouchableOpacity>
      </View>

      <View style={s.searchBox}>
        <Feather name="search" size={18} color={colors.gray[300]} />
        <TextInput
          accessibilityLabel="Buscar páginas"
          autoCapitalize="none"
          onChangeText={setQuery}
          placeholder="Buscar em minhas páginas..."
          placeholderTextColor={colors.gray[300]}
          returnKeyType="search"
          style={s.input}
          value={query}
        />
        {query.length > 0 && (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Limpar busca"
            onPress={() => setQuery("")}
          >
            <Feather name="x-circle" size={18} color={colors.gray[300]} />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        contentContainerStyle={s.listContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={s.sectionTitle}>
          {query.trim() ? "Resultados" : "Recentes"}
        </Text>
        {pages.length > 0
          ? pages.map((page) => <SearchResult key={page.id} title={page.title} />)
          : <EmptySearchResults />}
      </ScrollView>
    </View>
  );
}
