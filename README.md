# Paradigmas Mobile: da web para o React Native

Atividade · Tecnologia em Sistemas para Internet · Centro Universitário Senac São Paulo
Aluno: Tiago Antunes Paz de Oliveira

<!-- 2 ou 3 frases: o que é este repositório e o que ele contém. -->

## Sumário

1. [Fundamentação](#1-fundamentação)
2. [Pesquisa de campo](#2-pesquisa-de-campo)
3. [Prática: da web para o React Native](#3-prática-da-web-para-o-react-native)
4. [Conclusão](#4-conclusão)
5. [Como rodar o projeto](#5-como-rodar-o-projeto)
6. [Referências](#6-referências)
7. [Declaração de uso de IA](#7-declaração-de-uso-de-ia)

---

## 1. Fundamentação

### 1.1 Ciclo de build e distribuição
<!-- Caminho "salvei o código → usuário tem a nova versão" na web e no mobile.
Cobrir: deploy em servidor x publicação em loja, revisão Apple/Google,
usuários com versões antigas instaladas e consequências disso.
Cite a fonte no texto. -->

### 1.2 Ciclo de vida do aplicativo
<!-- Estados (ativo, segundo plano, encerrado pelo sistema) e comparação
com aba de navegador e programa de desktop. -->

### 1.3 Restrições do dispositivo
<!-- Um parágrafo ou item para cada: bateria, memória, rede instável/ausente,
tamanho e densidade de tela, orientação, notch e safe area,
permissões (câmera, localização, notificações). -->

### 1.4 Entrada e interação
<!-- Toque x mouse/teclado, tamanho mínimo da área de toque (com números
e fonte), gestos, teclado virtual cobrindo a tela. -->

### 1.5 UX mobile
<!-- Contexto de uso (em pé, uma mão, pressa), zona do polegar,
padrões de navegação mobile. -->

---

## 2. Pesquisa de campo

### 2.1 Aplicativo 1: [nome]

**Prints**

| Tela 1 | Tela 2 |
| --- | --- |
| ![descrição](docs/apps/nome-do-app-tela1.png) | ![descrição](docs/apps/nome-do-app-tela2.png) |

**Análise**
<!-- Mínimo de 3 pontos da fundamentação. Para cada um: o que você testou,
o que observou e por que o app faz assim. -->

- **Ponto 1 ([ex.: sem internet]):**
- **Ponto 2 ([ex.: zona do polegar]):**
- **Ponto 3 ([ex.: permissões]):**

**Comparação com a versão web** (se houver)
<!-- Comparação rápida das duas experiências. -->

### 2.2 Aplicativo 2: [nome]

**Prints**

| Tela 1 | Tela 2 |
| --- | --- |
| ![descrição](docs/apps/nome-do-app-tela1.png) | ![descrição](docs/apps/nome-do-app-tela2.png) |

**Análise**

- **Ponto 1:**
- **Ponto 2:**
- **Ponto 3:**

**Comparação com a versão web** (se houver)

---

## 3. Prática: da web para o React Native

### 3.1 Seção escolhida
<!-- Qual seção (ex.: Navbar), de qual página sua, e por que você a escolheu. -->

### 3.2 Comparação visual

| Versão web | App em React Native |
| --- | --- |
| ![Navbar na web](docs/comparacao/navbar-web.png) | ![Navbar no app](docs/comparacao/navbar-app.png) |

### 3.3 O que foi implementado
<!-- Breve: componente em src/components, props recebidas,
StyleSheet + Flexbox, interação com useState. -->

### 3.4 Diferenças encontradas na reconstrução
<!-- Mínimo de 5. Formato sugerido para cada uma:
o que era na web → o que é no RN → por que muda. -->

1. **[Diferença]:**
2. **[Diferença]:**
3. **[Diferença]:**
4. **[Diferença]:**
5. **[Diferença]:**

---

## 4. Conclusão

<!-- Um parágrafo: depois da pesquisa e da prática, o que você precisa
mudar na sua forma de pensar ao desenvolver para mobile? -->

---

## 5. Como rodar o projeto

```bash
git clone https://github.com/TiagoAntunes-Dev/paradigmas-mobile-seunome.git
cd paradigmas-mobile-seunome
npm install
npx expo start
```

Abra o app no celular com o Expo Go escaneando o QR code.

## Estrutura do repositório

```
README.md
App.js
src/
  components/
docs/
  apps/
  comparacao/
```

---

## 6. Referências

<!-- Mínimo de 3, padrão ABNT, ao menos 1 da bibliografia da disciplina.
Só liste o que você realmente citou no texto. Ajuste a data de acesso. -->

ESCUDELARIO, B.; PINHO, D. **React Native**: desenvolvimento de aplicativos mobile com React. São Paulo: Casa do Código, 2021.

APPLE. **Human Interface Guidelines**. Disponível em: https://developer.apple.com/design/human-interface-guidelines. Acesso em: [data].

REACT NATIVE. **Documentação oficial**. Disponível em: https://reactnative.dev/docs/getting-started. Acesso em: [data].

---

## 7. Declaração de uso de IA

<!-- Uma entrada para cada uso relevante. Se não usou IA, escreva isso
explicitamente. Uso não declarado = nota zero. -->

FERRAMENTA. Modelo utilizado. Ferramenta de inteligência artificial generativa.
Data de uso: [data].
Finalidade: [para que você usou].
Arquivos impactados: [arquivos ou seções do README].
