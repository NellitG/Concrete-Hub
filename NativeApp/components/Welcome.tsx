/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.welcomeTxt}>Welcome to Little </Text>
      <Text style={styles.welcomeDesc}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails
        in a lively but casual environment. We would love to hear your experience with us!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTxt: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  welcomeDesc: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
