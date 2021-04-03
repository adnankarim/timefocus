import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import { fontSizes, spacing } from './src/utils/sizes';
import { colors } from './src/utils/colors';

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      <Text>{focusSubject}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    color: colors.white,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
  },
  textStyle: {
    fontSize: fontSizes.lg,
  },
});
