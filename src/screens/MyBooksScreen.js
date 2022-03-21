import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyBooksScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Here is MyBooksScreen.js</Text>
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
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});

export default MyBooksScreen;
