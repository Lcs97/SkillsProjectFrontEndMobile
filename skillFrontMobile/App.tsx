import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppStack from './src/routes/appRoutes';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <AppStack />
    </View>
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
