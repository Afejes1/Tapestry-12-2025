import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Card } from '@tapestry/ui';
import { capitalize } from '@tapestry/shared';

export default function Index() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>{capitalize('welcome to Tapestry!')}</Text>
      <Card title="Counter Example" style={styles.card}>
        <Text style={styles.count}>Count: {count}</Text>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
  },
  count: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
});
