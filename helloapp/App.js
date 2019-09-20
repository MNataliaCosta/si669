import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // let y = x;
  // console.log("hey, I'm logging!");
  return (
    <View style={styles.container}>
      <Text style={styles.font}>
        <Text style={styles.fontHello}>Hello World{"\n"}</Text>
        <Text style={styles.fontHola}>Hola World{"\n"}</Text>
        <Text style={styles.fontHallo}>Hallo Welt</Text>
    l</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98FB98',
    alignItems: 'center',
    justifyContent: 'center',
  },

  font: {
    textAlign: 'center',
  },

  fontHello: {
    fontSize: 20,
    color: '#ffc0cb',
    backgroundColor: '#c0c0c0',
  },

  fontHola: {
    fontSize: 40,
    color: '#006400',
    backgroundColor: '#000000',
  },

  fontHallo: {
    fontSize: 30,
    color: '#000080',
    backgroundColor: '#fffff0',
  },
// for HW: 1) review requirements and 2) change background color
});
