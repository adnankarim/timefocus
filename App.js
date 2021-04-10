import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import { fontSizes, spacing } from './src/utils/sizes';
import { colors } from './src/utils/colors';

const STATUSES = {
  COMPLETED: 1,
  CANCELLED: 2,
};

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusSubjectHistory, setFocusSubjectHistory] = useState([]);

  const setFocusSubjectHistoryWithState = (subject, status) => {
    setFocusSubjectHistory([...focusSubjectHistory, { subject, status: status }]);
    console.log(focusSubjectHistory)
  };

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onFocusEnd={() => {
            setFocusSubjectHistoryWithState(focusSubject, STATUSES.COMPLETED);
          }}
          clearSubject={() => {
            setFocusSubjectHistoryWithState(focusSubject, STATUSES.CANCELLED);
          }}
        />
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
