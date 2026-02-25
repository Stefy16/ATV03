import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';

// Import screens
import LoginScreen from '../screens/LoginScreen';
import RegisterUserScreen from '../screens/RegisterUserScreen';
import ContactListScreen from '../screens/ContactListScreen';
import CreateContactScreen from '../screens/CreateContactScreen';
import EditContactScreen from '../screens/EditContactScreen';

const Stack = createStackNavigator();

// Navegador de autenticação (antes de fazer login)
function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ animationEnabled: false }}
      />
      <Stack.Screen
        name="RegisterUser"
        component={RegisterUserScreen}
        options={{
          cardStyle: { backgroundColor: '#f5f5f5' },
        }}
      />
    </Stack.Navigator>
  );
}

// Navegador principal (depois de fazer login)
function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen
        name="ContactList"
        component={ContactListScreen}
        options={{ animationEnabled: false }}
      />
      <Stack.Screen
        name="CreateContact"
        component={CreateContactScreen}
        options={{
          cardStyle: { backgroundColor: '#f5f5f5' },
        }}
      />
      <Stack.Screen
        name="EditContact"
        component={EditContactScreen}
        options={{
          cardStyle: { backgroundColor: '#f5f5f5' },
        }}
      />
    </Stack.Navigator>
  );
}

// Navegador raiz que controla qual fluxo mostrar
export function RootNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user == null ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
}
