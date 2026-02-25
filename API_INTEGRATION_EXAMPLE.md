# 🔌 Integração de APIs - Exemplo para Atividade 04

Este arquivo mostra como integrar as APIs reais na próxima atividade.

## 📋 Exemplo de Implementação

### 1. ContactService - Substituir por requisições HTTP

#### Atual (Atividade 03):
```javascript
export const ContactService = {
  getAllContacts: () => {
    return [...contactsData];
  },
};
```

#### Próximo (Atividade 04):
```javascript
import axios from 'axios';

const API_URL = 'https://api.example.com';

export const ContactService = {
  getAllContacts: async () => {
    try {
      const response = await axios.get(`${API_URL}/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createContact: async (contactData) => {
    try {
      const response = await axios.post(
        `${API_URL}/contacts`,
        contactData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateContact: async (id, contactData) => {
    try {
      const response = await axios.put(
        `${API_URL}/contacts/${id}`,
        contactData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteContact: async (id) => {
    try {
      const response = await axios.delete(
        `${API_URL}/contacts/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
```

### 2. AuthContext - Integrar com servidor

#### Atual (Atividade 03):
```javascript
const login = async (email) => {
  // Simular chamada à API
  const userData = { id: 1, email: email };
  setUser(userData);
};
```

#### Próximo (Atividade 04):
```javascript
const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/login`,
      { email, password }
    );
    
    const { token, user } = response.data;
    
    // Armazenar token
    await AsyncStorage.setItem('authToken', token);
    
    setUser(user);
    return user;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    await axios.post(`${API_URL}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    await AsyncStorage.removeItem('authToken');
    setUser(null);
  } catch (error) {
    throw error;
  }
};
```

### 3. Instalar dependências necessárias

```bash
npm install axios
npm install @react-native-async-storage/async-storage
```

### 4. Exemplo de requisição completa

```javascript
// Criar contato com requisição HTTP
async function handleCreateContact(contactData) {
  try {
    setLoading(true);
    
    const token = await AsyncStorage.getItem('authToken');
    
    const response = await axios.post(
      'https://api.example.com/contacts',
      {
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        address: contactData.address,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }
    );
    
    if (response.status === 201) {
      Alert.alert('Sucesso', 'Contato criado com sucesso!');
      navigation.navigate('ContactList');
    }
  } catch (error) {
    if (error.response?.status === 401) {
      Alert.alert('Erro', 'Sessão expirada. Faça login novamente.');
      logout();
    } else {
      Alert.alert('Erro', error.response?.data?.message || 'Erro ao criar contato');
    }
  } finally {
    setLoading(false);
  }
}
```

## 🌐 Endpoints da API (Exemplo)

```
POST   /auth/login              # Login
POST   /auth/register           # Cadastro
POST   /auth/logout             # Logout
GET    /contacts                # Listar contatos
GET    /contacts/:id            # Obter contato
POST   /contacts                # Criar contato
PUT    /contacts/:id            # Editar contato
DELETE /contacts/:id            # Deletar contato
GET    /contacts/search?q=termo # Buscar contatos
```

## 📊 Exemplo de Response

### Login Response
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "name": "João Silva"
  }
}
```

### Contatos Response
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "João Silva",
      "email": "joao@example.com",
      "phone": "11999999999",
      "address": "Rua A, 123"
    }
  ]
}
```

## 🔐 Armazenar Token com AsyncStorage

```javascript
// Após login bem-sucedido
await AsyncStorage.setItem('authToken', token);

// Ao iniciar app, recuperar token
useEffect(() => {
  const checkToken = async () => {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      // Validar token com servidor
      // Se válido, fazer login automático
    }
  };
  checkToken();
}, []);

// Ao fazer logout
await AsyncStorage.removeItem('authToken');
```

## ⚠️ Tratamento de Erros

```javascript
try {
  const response = await axios.get(`/contacts`);
} catch (error) {
  if (error.response) {
    // Erro retornado pelo servidor
    console.log('Status:', error.response.status);
    console.log('Mensagem:', error.response.data.message);
    
    if (error.response.status === 401) {
      // Não autorizado - fazer logout
      logout();
    } else if (error.response.status === 404) {
      // Não encontrado
      Alert.alert('Erro', 'Recurso não encontrado');
    } else if (error.response.status === 500) {
      // Erro do servidor
      Alert.alert('Erro', 'Erro no servidor. Tente novamente mais tarde');
    }
  } else if (error.request) {
    // Requisição feita mas sem resposta
    Alert.alert('Erro', 'Sem conexão com a rede');
  } else {
    // Erro na configuração da requisição
    console.error('Erro:', error.message);
  }
}
```

## 💾 AsyncStorage para Dados Locais

```javascript
// Salvar contatos localmente
async function saveContactsLocally(contacts) {
  try {
    await AsyncStorage.setItem(
      'contacts',
      JSON.stringify(contacts)
    );
  } catch (error) {
    console.error('Erro ao salvar contatos:', error);
  }
}

// Recuperar contatos locais
async function getLocalContacts() {
  try {
    const contacts = await AsyncStorage.getItem('contacts');
    return contacts ? JSON.parse(contacts) : [];
  } catch (error) {
    console.error('Erro ao recuperar contatos:', error);
    return [];
  }
}

// Sincronizar dados
async function syncContacts() {
  try {
    // Obter do servidor
    const contacts = await ContactService.getAllContacts();
    
    // Salvar localmente
    await saveContactsLocally(contacts);
    
    return contacts;
  } catch (error) {
    // Se falhar, usar dados locais
    return await getLocalContacts();
  }
}
```

## 📱 Exemplo Completo em uma Tela

```javascript
import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = 'https://api.example.com';

export default function ContactListScreen({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        // 1. Obter token
        const savedToken = await AsyncStorage.getItem('authToken');
        setToken(savedToken);

        // 2. Buscar contatos do servidor
        setLoading(true);
        const response = await axios.get(
          `${API_URL}/contacts`,
          {
            headers: {
              Authorization: `Bearer ${savedToken}`,
            }
          }
        );

        // 3. Salvar localmente (cache)
        await AsyncStorage.setItem(
          'contacts',
          JSON.stringify(response.data)
        );

        setContacts(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          // Token expirado
          Alert.alert('Sessão expirada', 'Faça login novamente');
          navigation.navigate('Login');
        } else {
          // Sem conexão - usar cache
          const cached = await AsyncStorage.getItem('contacts');
          setContacts(cached ? JSON.parse(cached) : []);
          Alert.alert('Aviso', 'Usando dados em cache (offline)');
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContactCard contact={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
```

---

Estes exemplos devem guiar o desenvolvimento da Atividade 04. Adapte conforme a documentação da sua API!
