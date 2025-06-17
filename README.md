# Meu App de Navegação

Esta aplicação foi desenvolvida com o objetivo de demonstrar a navegação entre diferentes telas e o uso de **persistência de login**, garantindo que o usuário continue logado mesmo ao fechar e reabrir o aplicativo.

---

## 🧭 Funcionalidades Principais

### 🔐 Login
- Tela de autenticação com campos de usuário e senha.
- Validação de credenciais.
- Após o login, o usuário é redirecionado para a tela **Home**.

### 🏠 Home
- Tela inicial da aplicação após o login.
- A partir daqui, o usuário pode acessar outras telas como **Profile** e **Detail**.

---

## 💾 Persistência de Login

- Ao fazer login, as informações do usuário são armazenadas localmente (por exemplo, usando `AsyncStorage` no React Native no navegador).
- Quando o aplicativo é fechado e reaberto, ele verifica se há um usuário salvo.
- Se o usuário já estiver autenticado, ele é levado diretamente para a tela **Home**, sem precisar logar novamente.

---

## 🛠️ Tecnologias Utilizadas

- Framework: **React Native** (ou React.js, dependendo do seu caso)
- Gerenciamento de navegação: **React Navigation**
- Armazenamento local: `AsyncStorage`


---

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/M-firmo/MeuAppNavegacao-Firmo
