import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>
        <Text style={styles.fontHello}>Hello World{"\n"}</Text>
        <Text style={styles.fontHola}>Hola Mundo{"\n"}</Text>
        <Text style={styles.fontHallo}>Hallo Welt</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdb491',
    alignItems: 'center',
    justifyContent: 'center',
  },

  font: {
  textAlign: 'center',
  },

  fontHello: {
    fontSize: 25,
    color: '#f6c2cb',
    backgroundColor: '#808080',
  },

  fontHola: {
    fontSize: 50,
    color: '#377d22',
    backgroundColor: '#000000',
  },

  fontHallo: {
    fontSize: 37.5,
    color: '#000c7b',
    backgroundColor: '#fffd54',
  },
});
