import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Focus } from './src/features/focus/Focus';
const App = () => {

  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      <Focus />
    </View>
  );
};

export default App;




const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#252250',
    color: 'white',
  },
  textStyle: {
    fontSize: 24,
  }
})