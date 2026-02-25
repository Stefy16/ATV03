# 📚 Instruções da Atividade 03 - SLA Contatos

## 🎯 Objetivo

Desenvolver uma aplicação React Native com 5 telas suivindo o fluxo de navegação especificado no protótipo, preparando a base para integração com APIs (Atividade 04).

## ✅ Requisitos Cumpridos

### Telas Implementadas
- [x] **Tela 1**: Login
- [x] **Tela 2**: Cadastro de Usuário  
- [x] **Tela 3**: Lista de Contatos
- [x] **Tela 4**: Criar Contato
- [x] **Tela 5**: Editar Contato

### Funcionalidades
- [x] Rotas entre as telas conforme protótipo
- [x] Botões de "back" seguem o fluxo correto
- [x] Estrutura preparada para APIs (métodos prontos em ContactService)
- [x] Dados em formato de array (MockData)
- [x] Validações de entrada
- [x] Feedback ao usuário (alerts)
- [x] Contexto de autenticação

## 🔄 Fluxo de Navegação

### Autenticação (Telas não autenticadas)
```
Login Screen
  ├─ Login: direciona para ContactList (após autenticação fictícia)
  └─ "Não tem conta?": direciona para RegisterUser

Register User Screen
  ├─ "Voltar": direciona para Login
  └─ Cadastrar: cria usuário e direciona para ContactList
```

### Contatos (Telas autenticadas)
```
Contact List Screen
  ├─ Botão [ + ]: direciona para CreateContact
  ├─ "Editar" em contato: direciona para EditContact
  ├─ "Excluir" em contato: delete com confirmação
  └─ "Sair": faz logout e volta para Login

Create Contact Screen
  ├─ "Voltar": direciona para ContactList
  └─ "Salvar Contato": cria contato e volta para ContactList

Edit Contact Screen
  ├─ "Voltar": direciona para ContactList
  └─ "Atualizar Contato": atualiza contato e volta para ContactList
```

## 📊 Estrutura de Dados

### User (após login/cadastro)
```javascript
{
  id: string,
  email: string,
  name: string
}
```

### Contact (array de contatos)
```javascript
{
  id: number,
  name: string,        // Obrigatório
  email: string,       // Obrigatório
  phone: string,       // Obrigatório
  address: string      // Opcional
}
```

## 🛠️ Como Usar

### 1. Instalação
```bash
cd c:\Users\Aluno\sla
npm install
```

### 2. Execução
```bash
expo start --dev-client
```

### 3. Teste o fluxo
- **Login**: Email: `user@example.com` | Senha: `qualquer coisa`
- **Cadastro**: Preencha todos os campos
- **Criar Contato**: Clique no botão `+` da lista
- **Editar Contato**: Clique em "Editar" no contato
- **Deletar Contato**: Clique em "Excluir" no contato

### 4. Dados exemplo já carregados
A aplicação já vem com 3 contatos de exemplo para teste.

## 📝 Validações Implementadas

### Tela de Login
- ✅ Email obrigatório
- ✅ Validação de formato de email
- ✅ Senha obrigatória
- ✅ Mínimo 6 caracteres na senha

### Tela de Cadastro
- ✅ Nome obrigatório
- ✅ Email obrigatório e válido
- ✅ Senha obrigatória (mín. 6 caracteres)
- ✅ Confirmação de senha
- ✅ As senhas devem coincidir

### Tela de Contatos
- ✅ Nome obrigatório
- ✅ Email obrigatório e válido
- ✅ Telefone obrigatório (10-11 dígitos)
- ✅ Endereço opcional
- ✅ Busca/filtro por nome, email ou telefone

## 🎯 Próximos Passos (Atividade 04)

Na próxima atividade, você irá:

1. **Conectar APIs reais**
   - Integrar backend/servidor
   - Fazer requisições HTTP para:
     - POST `/login` - Autenticar usuário
     - POST `/register` - Criar usuário
     - GET `/contacts` - Listar contatos
     - POST `/contacts` - Criar contato
     - PUT `/contacts/:id` - Editar contato
     - DELETE `/contacts/:id` - Deletar contato

2. **Armazenar dados persistentemente**
   - Usar AsyncStorage para dados locais
   - Armazenar token de autenticação

3. **Melhorar UX**
   - Adicionar loading spinners mais detalhados
   - Tratamento de erros de rede
   - Cache de dados

## 🔧 Estrutura de Serviços

### ContactService (em `src/services/ContactService.js`)
Fornece métodos prontos para CRUD de contatos:

```javascript
ContactService.getAllContacts()      // GET /contacts
ContactService.getContactById(id)    // GET /contacts/:id
ContactService.createContact(data)   // POST /contacts
ContactService.updateContact(id, data) // PUT /contacts/:id
ContactService.deleteContact(id)     // DELETE /contacts/:id
ContactService.searchContacts(term)  // GET /contacts/search?q=term
```

**NOTA**: Atualmente usa dados em array. Para a Atividade 04, substituir chamadas por requisições HTTP.

### AuthContext (em `src/context/AuthContext.js`)
Gerencia estado de autenticação:

```javascript
AuthContext.login(email)          // Substitua por POST /login
AuthContext.logout()              // Substitua por POST /logout
AuthContext.register(userData)    // Substitua por POST /register
```

## 📦 Dependências

- `react-native`: Framework mobile
- `expo`: CLI e SDK React Native
- `@react-navigation/native`: Navegação entre telas
- `@react-navigation/stack`: Stack navigator

## 🚨 Observações Importantes

1. **Dados em Memória**: Os dados não persistem após fechar o app. Isso será resolvido na Atividade 04.

2. **Autenticação Fictícia**: Login aceita qualquer email/senha válida. Verdadeira validação será feita com backend.

3. **Sem Sincronização**: Dados criados offline não sincronizam com server quando conectar.

4. **Nenhuma API Real Integrada**: Tudo usa dados locais e simuladas. Será integrado na Atividade 04.

## 📱 Compatibilidade

- ✅ Android (5.0+)
- ✅ iOS (13.0+)
- ✅ Web (navegadores modernos)

## 💡 Dicas para Desenvolvimento

1. Use `react-native-elements` para componentes mais polidos
2. Mantenha a pasta de telas organizada
3. Use Context API para estado global (já implementado)
4. Adicione loading states em todas as operações assincronas
5. Sempre valide entrada do usuário

## ❓ Dúvidas Frequentes

**P: Como adicionar mais campos aos contatos?**  
R: Atualize a estrutura em `ContactService.js` e adicione campos nos formulários.

**P: Como persistir dados entre sessões?**  
R: Use `AsyncStorage` (será feito na Atividade 04).

**P: Como conectar com um backend?**  
R: Substitua chamadas locais em `ContactService.js` por `fetch()` ou `axios` (será feito na Atividade 04).

---

**Status**: ✅ Pronto para Atividade 04  
**Última atualização**: Fevereiro 2026
