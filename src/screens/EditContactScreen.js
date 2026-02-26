import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EditContactScreen({ route, navigation }) {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      {/* cabeçalho idêntico ao da lista */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={28}
              color="#fff"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Contato</Text>
          <View style={styles.backButton} />
        </View>
      </View>

      {/* campos no mesmo padrão da tela de login */}
      <View style={styles.infoContainer}>
        <Text style={styles.fieldLabel}>Nome</Text>
        <TextInput
          style={styles.input}
          value={contact.name}
          editable={false}
        />

        <Text style={styles.fieldLabel}>E‑mail</Text>
        <TextInput
          style={styles.input}
          value={contact.email || ''}
          editable={false}
        />

        <Text style={styles.fieldLabel}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={contact.phone}
          editable={false}
        />
      </View>

      {/* botões empilhados */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.actionButton, styles.changeButton]}
        >
          <Text style={styles.actionButtonText}>Alterar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
        >
          <Text style={styles.actionButtonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3c4c4' },
  header: {
    backgroundColor: '#078dfc',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  backButton: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },

  infoContainer: { padding: 16 },
  fieldLabel: { fontSize: 14, color: '#666', marginTop: 8 },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 4,
  },

  actions: {
    marginTop: 32,
    alignItems: 'center',
  },
  actionButton: {
    width: '80%',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  actionButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  changeButton: { backgroundColor: '#007AFF' },
  deleteButton: { backgroundColor: '#FF3B30' },
});
