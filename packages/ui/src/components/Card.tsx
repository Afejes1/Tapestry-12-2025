import React from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  title: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children, style, ...props }) => {
  return (
    <View style={[styles.card, style]} {...props}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000000',
  },
});
