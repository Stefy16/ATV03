# 🧪 Guia de Testes - SLA Contatos

Use este guia para testar todas as funcionalidades da aplicação.

## ✅ Teste 1: Login

**Objetivo**: Validar autenticação e navegação

**Passos**:
1. Inicie a aplicação
2. Na tela de Login, deixe os campos vazios
3. Clique em "Entrar"
4. **Esperado**: Alert "Por favor, preencha o email e senha!"

**Passos**:
1. Digite um email inválido: `teste` (sem @)
2. Digite qualquer senha
3. Clique em "Entrar"
4. **Esperado**: Alert "Por favor, insira um email válido!"

**Passos**:
1. Digite um email válido: `user@example.com`
2. Digite uma senha: `123456`
3. Clique em "Entrar"
4. **Esperado**: Navega para ContactList

---

## ✅ Teste 2: Cadastro de Usuário

**Objetivo**: Validar formulário de cadastro

**Passos**:
1. Na tela de Login, clique em "Não tem conta? Cadastre-se"
2. **Esperado**: Navega para RegisterUser

**Passos**:
1. Clique em "← Voltar"
2. **Esperado**: Volta para Login

**Passos**:
1. Volte para RegisterUser
2. Deixe campos vazios e clique em "Cadastrar"
3. **Esperado**: Alert "Por favor, preencha todos os campos!"

**Passos**:
1. Preencha:
   - Nome: `João Silva`
   - Email: `invalid-email` (sem @)
   - Senha: `123456`
   - Confirmar: `123456`
2. Clique em "Cadastrar"
3. **Esperado**: Alert "Por favor, insira um email válido!"

**Passos**:
1. Preencha:
   - Nome: `João Silva`
   - Email: `joao@example.com`
   - Senha: `123`
   - Confirmar: `123`
2. Clique em "Cadastrar"
3. **Esperado**: Alert "A senha deve ter no mínimo 6 caracteres!"

**Passos**:
1. Preencha:
   - Nome: `João Silva`
   - Email: `joao@example.com`
   - Senha: `123456`
   - Confirmar: `654321` (diferente)
2. Clique em "Cadastrar"
3. **Esperado**: Alert "As senhas não coincidem!"

**Passos**:
1. Preencha corretamente:
   - Nome: `Novo Usuário`
   - Email: `novo@example.com`
   - Senha: `senha123`
   - Confirmar: `senha123`
2. Clique em "Cadastrar"
3. **Esperado**: Alert "Usuário cadastrado com sucesso!" → Navega para ContactList

---

## ✅ Teste 3: Lista de Contatos

**Objetivo**: Validar exibição e busca de contatos

**Setup**: Faça login ou cadastro para chegar em ContactList

**Passos**:
1. Verifique se aparecem os 3 contatos de exemplo:
   - João Silva
   - Maria Santos
   - Pedro Oliveira
2. **Esperado**: Todos os contatos são exibidos

**Passos**:
1. Na barra de busca, Digite: `João`
2. **Esperado**: Filtra apenas "João Silva"

**Passos**:
1. Digite: `@gmail.com`
2. **Esperado**: Nenhum resultado (emails são @example.com)

**Passos**:
1. Limpe a busca
2. Digite: `11999999999` (telefone)
3. **Esperado**: Filtra "João Silva"

**Passos**:
1. Limpe a busca completamente
2. **Esperado**: Todos os 3 contatos reaparecem

**Passos**:
1. Puxe a tela para baixo (pull-to-refresh)
2. **Esperado**: Lista atualiza (loading indicator aparece)

---

## ✅ Teste 4: Criar Novo Contato

**Objetivo**: Validar criação de contato

**Passos**:
1. Na ContactList, clique no botão `+` (flutuante)
2. **Esperado**: Navega para CreateContact

**Passos**:
1. Clique em "← Voltar"
2. **Esperado**: Volta para ContactList

**Passos**:
1. Abra CreateContact novamente
2. Deixe campos vazios e clique em "Salvar Contato"
3. **Esperado**: Alert "Por favor, preencha Nome, Email e Telefone!"

**Passos**:
1. Preencha:
   - Nome: `Ana Costa`
   - Email: `ana@invalid` (sem domínio)
   - Telefone: `21987654321`
2. Clique em "Salvar Contato"
3. **Esperado**: Alert "Por favor, insira um email válido!"

**Passos**:
1. Preencha:
   - Nome: `Ana Costa`
   - Email: `ana@example.com`
   - Telefone: `2198` (muito curto)
2. Clique em "Salvar Contato"
3. **Esperado**: Alert "Por favor, insira um telefone válido..."

**Passos**:
1. Preencha corretamente:
   - Nome: `Ana Costa`
   - Email: `ana@example.com`
   - Telefone: `21987654321`
   - Endereço: `Avenida C, 123 - Rio de Janeiro`
2. Clique em "Salvar Contato"
3. **Esperado**: Alert "Contato criado com sucesso!" → Volta para ContactList

**Passos**:
1. Na ContactList, verifique se "Ana Costa" foi adicionada
2. **Esperado**: Novo contato aparece na lista

**Passos**:
1. Volte para CreateContact
2. Preencha alguns dados e clique em "Cancelar"
3. **Esperado**: Alert "Descartar alterações?" com opções Não/Sim

**Passos**:
1. Clique em "Sim"
2. **Esperado**: Volta para ContactList sem salvar

**Passos**:
1. Abra CreateContact vazio
2. Clique em "Cancelar"
3. **Esperado**: Volta direto para ContactList (sem alert, pois está vazio)

---

## ✅ Teste 5: Editar Contato

**Objetivo**: Validar edição de contato

**Passos**:
1. Na ContactList, clique em "Editar" no contato "João Silva"
2. **Esperado**: Navega para EditContact com dados carregados

**Passos**:
1. Verifique se os campos estão pré-preenchidos:
   - Nome: João Silva
   - Email: joao@example.com
   - Telefone: 11999999999
   - Endereço: Rua A, 123 - São Paulo, SP
2. **Esperado**: Todos os campos carregados corretamente

**Passos**:
1. Adicione um loading indicator (deve aparecer enquanto carrega)
2. **Esperado**: Estados pré-checados aparecem

**Passos**:
1. Altere o nome para: `João Silva Junior`
2. Clique em "Atualizar Contato"
3. **Esperado**: Alert "Contato atualizado com sucesso!" → Volta para ContactList

**Passos**:
1. Verifique na lista se o nome foi atualizado
2. **Esperado**: Contato agora mostra "João Silva Junior"

**Passos**:
1. Clique novamente em "Editar" no contato atualizado
2. **Esperado**: Novos dados estão no formulário

**Passos**:
1. Digite dados inválidos (email sem @, telefone curto)
2. Clique em "Atualizar Contato"
3. **Esperado**: Validação funciona como na criação

**Passos**:
1. Clique em "Cancelar"
2. **Esperado**: Volta para ContactList sem salvar alterações

---

## ✅ Teste 6: Deletar Contato

**Objetivo**: Validar exclusão de contato

**Passos**:
1. Na ContactList, clique em "Excluir" em qualquer contato
2. **Esperado**: Alert "Excluir Contato" com confirmação

**Passos**:
1. Clique em "Cancelar"
2. **Esperado**: Alert fechado, contato permanece

**Passos**:
1. Clique em "Excluir" novamente
2. Clique em "Excluir" (confirmação)
3. **Esperado**: 
   - Alert "Sucesso" "Contato excluído com sucesso!"
   - Contato desaparece da lista

**Passos**:
1. Verifique se o contato foi realmente removido
2. **Esperado**: Contato não aparece mais na lista

---

## ✅ Teste 7: Logout

**Objetivo**: Validar saída da aplicação

**Passos**:
1. Na ContactList, clique em "Sair"
2. **Esperado**: Alert "Sair" com confirmação

**Passos**:
1. Clique em "Cancelar"
2. **Esperado**: Permanece na ContactList

**Passos**:
1. Clique em "Sair" novamente
2. Clique em "Sair" (confirmação)
3. **Esperado**: Volta para tela de Login

**Passos**:
1. Verifique se está na tela de Login
2. **Esperado**: Tela de login é exibida, lista de contatos desapareceu

---

## ✅ Teste 8: Responsividade

**Objetivo**: Validar funcionamento em diferentes tamanhos

**Passos**:
1. Teste em um emulador Android de diferentes tamanhos
2. Teste em um emulador iOS
3. Teste na web (se disponível)
4. **Esperado**: Interface se adapta a diferentes telas

---

## 🏆 Resultado Final

Se todos os testes passarem, a aplicação está **100% funcional** e pronta para:
- ✅ Entrega da Atividade 03
- ✅ Integração com APIs (Atividade 04)
- ✅ Produção (com ajustes de backend)

---

**Dúvidas durante testes?**

Consulte:
- `/README.md` - Visão geral do projeto
- `/ATIVIDADE_03.md` - Instruções da atividade
- `/API_INTEGRATION_EXAMPLE.md` - Como será a integração

---

Boa sorte nos testes! 🚀
