import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import { fontSizes, spacing } from './src/utils/sizes';
import { colors } from './src/utils/colors';

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusSubjectHistory, setFocusSubjectHistory] = useState([]);
  useEffect(() => {
    setFocusSubjectHistory([...focusSubjectHistory, focusSubject])
  }, [focusSubject])
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} onFocusEnd={() => { setFocusSubject(null) }} clearSubject={() => { setFocusSubject(null) }} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
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
