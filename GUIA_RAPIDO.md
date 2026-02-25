# 🚀 Guia Rápido - Comandos Essenciais

## 📋 Comandos Principales

### Instalação Inicial
```bash
# Navegar para a pasta do projeto
cd c:\Users\Aluno\sla

# Instalar dependências
npm install
```

### Execução da Aplicação
```bash
# Iniciar o app
expo start --dev-client

# No terminal, pressione:
# 'a' para Android
# 'i' para iOS
# 'w' para Web
```

### Atualizar Dependências
```bash
# Instalar uma nova dependência
npm install Nome-da-Dependencia

# Desinstalar uma dependência
npm uninstall Nome-da-Dependencia
```

---

## 📁 Estrutura do Código

```
src/
├── screens/                    # 👈 Adicione novas telas aqui
│   ├── LoginScreen.js
│   ├── RegisterUserScreen.js
│   ├── ContactListScreen.js
│   ├── CreateContactScreen.js
│   └── EditContactScreen.js
├── navigation/                 # 👈 Configure rotas aqui
│   └── RootNavigator.js
├── services/                   # 👈 APIs/dados aqui
│   └── ContactService.js
└── context/                    # 👈 Estado global aqui
    └── AuthContext.js
```

---

## 🔧 Criar Nova Tela

### Passo 1: Criar arquivo em `src/screens/`
```javascript
import React from 'react';
import { View, Text } from 'react-native';

export default function NovaScreen({ navigation }) {
  return (
    <View>
      <Text>Nova Tela</Text>
    </View>
  );
}
```

### Passo 2: Adicionar rota em `src/navigation/RootNavigator.js`
```javascript
<Stack.Screen
  name="NovaTela"
  component={NovaScreen}
/>
```

### Passo 3: Navegar para a tela
```javascript
<TouchableOpacity onPress={() => navigation.navigate('NovaTela')}>
  <Text>Ir para Nova Tela</Text>
</TouchableOpacity>
```

---

## 🔄 Adicionar Nova API

### Em `src/services/ContactService.js`:
```javascript
export const ContactService = {
  // ... métodos existentes ...
  
  // Nova função
  novoMetodo: (params) => {
    // Lógica aqui
    return resultado;
  },
};
```

### Usar em uma screen:
```javascript
import { ContactService } from '../services/ContactService';

// Usar o serviço
const resultado = ContactService.novoMetodo(params);
```

---

## 📦 Estrutura de Componente Típica

```javascript
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function MeuComponente({ navigation }) {
  const [estado, setEstado] = useState('');

  const handleAcao = () => {
    // Lógica aqui
  };

  return (
    <View style={styles.container}>
      <Text>Olá</Text>
      <TouchableOpacity onPress={handleAcao}>
        <Text>Botão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
```

---

## 🎨 Padrão de Cores

```javascript
// Cores usadas no projeto
PRIMARY: '#007AFF'      // Azul principal (botões)
DANGER: '#FF3B30'       // Vermelho (delete)
SUCCESS: '#34C759'      // Verde (sucesso)
LIGHT_GRAY: '#f5f5f5'   // Fundo
DARK_GRAY: '#666'       // Textos secundários
BLACK: '#000'           // Textos principais
```

---

## 📱 Exemplo: Buscar contato por ID

```javascript
import { ContactService } from '../services/ContactService';

// Na sua screen
const idAtual = 1;
const contato = ContactService.getContactById(idAtual);
```

---

## 🔐 Usar Contexto de Autenticação

```javascript
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function MinhaScreen() {
  const { user, login, logout } = useContext(AuthContext);

  // Usar o contexto
  useEffect(() => {
    if (user) {
      console.log('Usuário:', user.name);
    }
  }, [user]);
}
```

---

## 🧪 Debug

### Ver estado em tempo real
```javascript
console.log('Debug:', meuValor);
```

### Parar em um ponto
```javascript
debugger;  // A execução para aqui
```

### Verificar errors
```bash
# No terminal do Expo, pressione:
# 'j' para abrir o debugger
```

---

## 📝 Exemplo de Validação

```javascript
// Email
if (!email.includes('@')) {
  Alert.alert('Erro', 'Email inválido');
  return;
}

// Telefone
const phoneRegex = /^[0-9]{10,11}$/;
if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
  Alert.alert('Erro', 'Telefone inválido');
  return;
}
```

---

## 🔄 Fazer Reload

```bash
# No terminal Expo:
# 'r' para reload
# 'Ctrl+C' para parar
```

---

## 💾 Arquivos Importantes

| Arquivo | Propósito |
|---------|-----------|
| `App.js` | Entrada principal |
| `package.json` | Dependências |
| `README.md` | Documentação geral |
| `ATIVIDADE_03.md` | Requisitos desta atividade |
| `API_INTEGRATION_EXAMPLE.md` | Como conectar APIs |
| `GUIA_TESTES.md` | Como testar a app |

---

## ❌ Erros Comuns e Soluções

### "Cannot find module"
```bash
# Solução
npm install
```

### "Navigation.navigate is not a function"
```javascript
// Verifique se a rota está registrada em RootNavigator
// Verifique se o navigation prop foi passado
```

### "Blank screen"
```javascript
// Verifique o console para erros
// Pressione 'j' no Expo para abrir debugger
// Verifique se App.js está exportando corretamente
```

### Contatos não aparecem
```javascript
// Verifique se ContactService.getAllContacts() retorna dados
// Verifique se ContactListScreen está chamando loadContacts()
```

---

## 🚀 Preparado para Atividade 04?

Para integrar APIs reais:

1. Abra `src/services/ContactService.js`
2. Substitua métodos locais por requisições HTTP
3. Use `axios` ou `fetch()`
4. Armazene tokens com `AsyncStorage`
5. Veja `API_INTEGRATION_EXAMPLE.md` para exemplos

---

## 📞 Estrutura Rápida de Contato

```javascript
{
  id: 1,
  name: "João Silva",
  email: "joao@example.com",
  phone: "11999999999",
  address: "Rua A, 123"
}
```

---

## ✅ Checklist para Começar

- [ ] Clonei o repositório
- [ ] Executei `npm install`
- [ ] Iniciei com `expo start --dev-client`
- [ ] Consegui fazer login
- [ ] Consegui criar um contato
- [ ] Consegui editar um contato
- [ ] Consegui deletar um contato

Se tudo passou ✅, você está pronto!

---

**Dúvidas? Consulte:**
- README.md
- ATIVIDADE_03.md
- GUIA_TESTES.md
- API_INTEGRATION_EXAMPLE.md

Boa sorte! 🚀
