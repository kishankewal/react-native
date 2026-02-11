import { StyleSheet, View } from "react-native";
import React from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ddd',
      padding: 10,
    },
  });