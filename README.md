# SLA Contatos - Aplicação React Native

Aplicação de gerenciamento de contatos desenvolvida em React Native com Expo.

## 📋 Telas Implementadas

### 1. **Tela de Login**
- Autenticação de usuário
- Validação de email e senha
- Navegação para cadastro de novo usuário
- Fluxo: Login → Lista de Contatos

### 2. **Tela de Cadastro de Usuário**
- Cadastro de novo usuário
- Validação de formulário
- Confirmação de senha
- Botão voltar para Login
- Fluxo: Cadastro → Login → Lista de Contatos

### 3. **Tela de Lista de Contatos**
- Exibe todos os contatos cadastrados
- Busca/filtro de contatos
- Editar contato
- Deletar contato
- Botão flutuante para criar novo contato
- Botão de logout
- Fluxo: Lista → Criar/Editar Contato

### 4. **Tela de Cadastro de Contato**
- Criar novo contato
- Validação de formulário (Nome, Email, Telefone obrigatórios)
- Campo de endereço opcional
- Botões: Cancelar e Salvar
- Fluxo: Criar → Lista de Contatos

### 5. **Tela de Edição de Contato**
- Editar contato existente
- Carregamento de dados do contato
- Validação de formulário
- Botões: Cancelar e Atualizar
- Fluxo: Editar → Lista de Contatos

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (v14 ou superior)
- Expo CLI instalado globalmente: `npm install -g expo-cli`

### Passos de Instalação

1. **Instale as dependências:**
```bash
npm install
```

2. **Inicie a aplicação:**
```bash
expo start --dev-client
```

3. **Execute em um emulador ou dispositivo:**
   - **Android**: Pressione `a` no terminal ou `expo run:android`
   - **iOS**: Pressione `i` no terminal ou `expo run:ios`
   - **Web**: Pressione `w` no terminal ou `expo start --web`

## 📁 Estrutura do Projeto

```
src/
├── screens/
│   ├── LoginScreen.js              # Tela de login
│   ├── RegisterUserScreen.js       # Tela de cadastro de usuário
│   ├── ContactListScreen.js        # Tela de lista de contatos
│   ├── CreateContactScreen.js      # Tela de criar contato
│   └── EditContactScreen.js        # Tela de editar contato
├── navigation/
│   └── RootNavigator.js            # Configuração de rotas
├── services/
│   └── ContactService.js           # Serviço de contatos (mock)
└── context/
    └── AuthContext.js              # Contexto de autenticação
```

## 🔄 Fluxo de Navegação

```
Login
  ├─→ Cadastro de Usuário
  │      └─→ Voltar para Login
  └─→ Lista de Contatos
       ├─→ Criar Contato
       │      └─→ Voltar para Lista
       └─→ Editar Contato
              └─→ Voltar para Lista
```

## 💾 Dados e Armazenamento

### Atualmente (Atividade 03)
- Dados armazenados em **arrays em memória** (ContactService.js)
- Dados de exemplo já pré-carregados
- **Sem persistência** entre sessões

### Próxima Atividade (04)
- Integração com APIs reais
- Autenticação via servidor
- Persistência de dados em banco de dados

## 📝 API Preparada (Mock)

O ContactService fornece os seguintes métodos:

```javascript
// Obter todos os contatos
ContactService.getAllContacts()

// Obter contato por ID
ContactService.getContactById(id)

// Criar novo contato
ContactService.createContact(contactData)

// Atualizar contato
ContactService.updateContact(id, contactData)

// Deletar contato
ContactService.deleteContact(id)

// Buscar contatos
ContactService.searchContacts(searchTerm)
```

## 🎨 Design e UI

- **Cores principais**: Azul (#007AFF) e Vermelho (#FF3B30)
- **Componentes**: TextInput, TouchableOpacity, FlatList
- **Validações**: Email, Telefone, Campos obrigatórios
- **Feedback ao usuário**: Alerts e Loading states

## ✅ Validações Implementadas

### Tela de Login
- Email obrigatório e válido
- Senha obrigatória

### Tela de Cadastro
- Nome, email e senha obrigatórios
- Email válido
- Confirmação de senha
- Senha mínimo 6 caracteres

### Tela de Contatos
- Nome, email e telefone obrigatórios
- Email válido
- Telefone com 10-11 dígitos

## 🔐 Segurança (Próximas Atividades)

- [ ] Implementar autenticação real via API
- [ ] Armazenar tokens de sessão
- [ ] Validação de permissões
- [ ] Proteção de dados sensíveis

## 📲 Próximos Passos

1. Integrar com backend/API real
2. Implementar persistência local (AsyncStorage)
3. Adicionar imagens de perfil para contatos
4. Implementar sincronização offline
5. Adicionar notificações

## 👨‍💻 Desenvolvimento

Para adicionar novos recursos:

1. Crie uma nova screen em `src/screens/`
2. Adicione a rota em `src/navigation/RootNavigator.js`
3. Se necessário, atualize `ContactService.js`
4. Se necessário, atualize `AuthContext.js`

## 📞 Contato do Desenvolvedor

Este projeto foi desenvolvido como atividade de aprendizagem em React Native.

---

**Versão**: 1.0.0  
**Última atualização**: 2026
