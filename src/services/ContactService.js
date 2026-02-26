let contactsData = [
  {
    id: 1,
    name: 'Marcos Andrade',
    email: 'mand@gmail.com',
    phone: '81 988553424',
  },
  {
    id: 2,
    name: 'Patrícia Tavares',
    email: '',
    phone: '81 998765332',
  },
  {
    id: 3,
    name: 'Rodrigo Antunes',
    email: '',
    phone: '81 987765525',
  },
];

let nextId = 4;

export const ContactService = {
  // Obter todos os contatos
  getAllContacts: () => {
    return [...contactsData];
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

  // Deletar contato
  deleteContact: (id) => {
    const index = contactsData.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      contactsData.splice(index, 1);
      return true;
    }
    return false;
  },
};

