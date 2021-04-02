import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { fontSizes } from './src/utils/sizes';
import { colors } from './src/utils/colors';
const App = () => {

  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? <Text>Build timer</Text> : <Focus addSubject={setFocusSubject} />}
      <Text>{focusSubject}</Text>
    </View>

  );
};

export default App;




const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#252250',
    color: colors.white,
  },
  textStyle: {
    fontSize: fontSizes.lg,
  }
})