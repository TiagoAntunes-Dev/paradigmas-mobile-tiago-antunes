import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "@/styles/colors";
import { TEMPLATES } from "@/utils/data";
import { s } from "./styles";

type TemplateId = (typeof TEMPLATES)[number]["id"];

function TemplateOption({
  id,
  title,
  icon,
  selected,
  onSelect,
}: (typeof TEMPLATES)[number] & {
  selected: boolean;
  onSelect: (id: TemplateId) => void;
}) {
  return (
    <TouchableOpacity
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      onPress={() => onSelect(id)}
      style={[s.templateRow, selected && s.templateSelected]}
    >
      <View style={s.templateIcon}>
        <Feather name={icon} size={17} color={colors.gray[100]} />
      </View>
      <Text style={s.templateTitle}>{title}</Text>
      {selected && <Feather name="check" size={17} color={colors.gray[100]} />}
    </TouchableOpacity>
  );
}

export default function NewPageScreen() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [template, setTemplate] = useState<TemplateId>("blank");
  const [created, setCreated] = useState(false);

  const updateTitle = (value: string) => {
    setTitle(value);
    setCreated(false);
  };

  const updateBody = (value: string) => {
    setBody(value);
    setCreated(false);
  };

  const selectTemplate = (id: TemplateId) => {
    setTemplate(id);
    setCreated(false);
  };

  return (
    <View style={s.container}>
      <View style={s.header}>
        <View style={s.headerTitle}>
          <Feather name="file-plus" size={19} color={colors.gray[100]} />
          <Text style={s.heading}>Nova página</Text>
        </View>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Mais opções"
          style={s.headerAction}
        >
          <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={s.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          accessibilityLabel="Título da página"
          onChangeText={updateTitle}
          placeholder="Sem título"
          placeholderTextColor={colors.gray[400]}
          style={s.titleInput}
          value={title}
        />
        <TextInput
          accessibilityLabel="Conteúdo da página"
          multiline
          onChangeText={updateBody}
          placeholder="Comece a escrever..."
          placeholderTextColor={colors.gray[300]}
          style={s.bodyInput}
          textAlignVertical="top"
          value={body}
        />

        <View style={s.templateSection}>
          <Text style={s.sectionTitle}>Comece com um modelo</Text>
          {TEMPLATES.map((item) => (
            <TemplateOption
              key={item.id}
              {...item}
              selected={template === item.id}
              onSelect={selectTemplate}
            />
          ))}
        </View>

        {created && (
          <View accessibilityRole="alert" style={s.successMessage}>
            <Feather name="check-circle" size={17} color="#75B798" />
            <Text style={s.successText}>
              Página criada. Ela está pronta para você continuar editando.
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={s.footer}>
        <TouchableOpacity
          accessibilityRole="button"
          disabled={!title.trim()}
          onPress={() => setCreated(true)}
          style={[s.createButton, !title.trim() && s.createButtonDisabled]}
        >
          <Feather
            name={created ? "check" : "plus"}
            size={18}
            color={colors.gray[800]}
          />
          <Text style={s.createButtonText}>
            {created ? "Página criada" : "Criar página"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
