import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Pressable } from 'react-native';
import Box from './src/components/Box';
export default function App() {
  return (
      <View style={styles.container}>
        {/* <Box children='Box 1' style={{backgroundColor: 'green'}} />
        <Box children='Box 2' style={{backgroundColor: 'red'}}/>
        <Box children='Box 3' style={{backgroundColor: 'blue'}}/>
        <Box children='Box 4' style={{backgroundColor: 'yellow'}} />
        <Box children='Box 5' style={{backgroundColor: 'cyan'}} />
        <Box children='Box 6' style={{backgroundColor: 'magenta'}} />
        <Box children='Box 7' style={{backgroundColor: 'orange'}} /> */}
        <Box children='Box 1' style={{backgroundColor: 'green'}} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    gap: 20,
    marginTop: 50,
    borderWidth: 5,
    borderColor: 'red',
  },

});
