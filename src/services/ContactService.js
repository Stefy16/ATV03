// Mock data - Em produção, isso viria de uma API
let contactsData = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@example.com',
    phone: '11999999999',
    address: 'Rua A, 123 - São Paulo, SP',
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@example.com',
    phone: '11988888888',
    address: 'Avenida B, 456 - Rio de Janeiro, RJ',
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    email: 'pedro@example.com',
    phone: '11977777777',
    address: 'Rua C, 789 - Belo Horizonte, MG',
  },
];

let nextId = 4;

export const ContactService = {
  // Obter todos os contatos
  getAllContacts: () => {
    return [...contactsData];
  },

  // Obter contato por ID
  getContactById: (id) => {
    return contactsData.find((contact) => contact.id === id);
  },

  // Criar novo contato
  createContact: (contactData) => {
    const newContact = {
      id: nextId,
      ...contactData,
    };
    contactsData.push(newContact);
    nextId += 1;
    return newContact;
  },

  // Atualizar contato
  updateContact: (id, contactData) => {
    const index = contactsData.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      contactsData[index] = {
        ...contactsData[index],
        ...contactData,
      };
      return contactsData[index];
    }
    return null;
  },

  // Deletar contato
  deleteContact: (id) => {
    const index = contactsData.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      contactsData.splice(index, 1);
      return true;
    }
    return false;
  },

  // Buscar contatos por nome
  searchContacts: (searchTerm) => {
    return contactsData.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
};
