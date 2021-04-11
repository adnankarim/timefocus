import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import { fontSizes, spacing } from './src/utils/sizes';
import { colors } from './src/utils/colors';
import { FocusHistory } from './src/features/focus/FocusHistory';
import AsyncStorage from '@react-native-async-storage/async-storage';
const STATUSES = {
  COMPLETED: 1,
  CANCELLED: 2,
};

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusSubjectHistory, setFocusSubjectHistory] = useState([]);

  const setFocusSubjectHistoryWithState = (subject, status) => {
    setFocusSubjectHistory([...focusSubjectHistory, { subject: subject, status: status }]);

  };
  const onClear = () => {
    setFocusSubjectHistory([])
  }
  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem('focusHistory', JSON.stringify(focusSubjectHistory))
    } catch (e) {
      console.log(e)
    }
  }
  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('focusHistory')
      if (history !== null && JSON.parse(history).length > 0) {
        setFocusSubjectHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadFocusHistory();
  }, [])
  useEffect(() => {
    saveFocusHistory();
  }, [focusSubjectHistory])
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
}

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
