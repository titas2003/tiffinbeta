import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flex from './assets/components/Flextest';
import Login from './assets/components/Login';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <AppNavigator />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
