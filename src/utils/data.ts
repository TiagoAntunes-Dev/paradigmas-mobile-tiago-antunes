const PAGES = [
  { id: "1", title: "React Native" },
  { id: "2", title: "Expo" },
  { id: "3", title: "Links" },
  { id: "4", title: "Projetos" },
  { id: "5", title: "Node.js" },
  { id: "6", title: "Expo Router" },
  { id: "7", title: "Youtube" },
  { id: "8", title: "Projetos" },
]

const RECENT = [
  {
    id: "1",
    title: "React Native",
    cover: require("../../assets/images/react-logo.png"),
  },
  {
    id: "2",
    title: "Expo",
    cover: require("../../assets/images/expo-logo.png"),
  },
  { id: "3", title: "Links" },
]

export const TEMPLATES = [
  { id: "blank", title: "Página vazia", icon: "file-text" },
  { id: "tasks", title: "Lista de tarefas", icon: "check-square" },
  { id: "notes", title: "Anotações", icon: "edit-3" },
] as const

export const NOTIFICATIONS = [
  {
    id: "1",
    icon: "at-sign",
    title: "Você foi mencionado",
    detail: "Tiago mencionou você em React Native",
    time: "Há 10 min",
  },
  {
    id: "2",
    icon: "message-circle",
    title: "Novo comentário",
    detail: "Há um novo comentário na página Projetos",
    time: "Há 2 h",
  },
  {
    id: "3",
    icon: "share-2",
    title: "Página compartilhada",
    detail: "Expo foi compartilhada com você",
    time: "Ontem",
  },
] as const

export const DATA = { PAGES, RECENT }