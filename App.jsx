import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/views/Main';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}
