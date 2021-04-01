import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hello</Text>
    </View>
  );
};

export default App;




const styles = StyleSheet.create({

  textStyle: {

    fontSize: 45,
  }
})