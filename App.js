import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import { fontSizes, spacing } from './src/utils/sizes';
import { colors } from './src/utils/colors';
import { FocusHistory } from './src/features/focus/FocusHistory';
const STATUSES = {
  COMPLETED: 1,
  CANCELLED: 2,
};
const onClear = () => {
  //done
}
const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusSubjectHistory, setFocusSubjectHistory] = useState([]);

  const setFocusSubjectHistoryWithState = (subject, status) => {
    setFocusSubjectHistory([...focusSubjectHistory, { subject: subject, status: status }]);

  };

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onFocusEnd={() => {
            setFocusSubjectHistoryWithState(focusSubject, STATUSES.COMPLETED);
            setFocusSubject(null)
          }}
          clearSubject={() => {
            setFocusSubjectHistoryWithState(focusSubject, STATUSES.CANCELLED);
            setFocusSubject(null);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusSubjectHistory={focusSubjectHistory} onClear={onClear} />
        </>
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
