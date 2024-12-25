import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const LoadingIndicator = ({ message }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00ff00" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
});

export default LoadingIndicator;
