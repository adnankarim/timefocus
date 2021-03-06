import React, { useState } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { Timing } from './Timing';
import KeepAwake from 'react-native-keep-awake';

const DEFAULT_TIME = 0.1
export const Timer = ({ focusSubject, onFocusEnd, clearSubject }) => {
    KeepAwake.activate();
    const [minutes, setMinutes] = useState(DEFAULT_TIME);
    const [isStarted, setIsStarted] = useState(false);


    const onEnd = () => {
        setMinutes(DEFAULT_TIME);
        setIsStarted(false)
        onFocusEnd();
    }
    const changeTime = (min) => {
        setMinutes(min);
        setIsStarted(false)
    }

    return (<View style={styles.container}>
        <View style={styles.countDownContainer}>
            <Countdown minutes={minutes} isPaused={!isStarted} onEnd={() => { onEnd() }} />
        </View>
        <View style={{ paddingTop: spacing.xxl }}>
            <Text style={styles.title}>Focusing On:</Text>
            <Text style={styles.task}>{focusSubject}</Text>

        </View>
        <View style={styles.buttonWrapper}>
            <Timing onChangeTime={changeTime} />
        </View>
        <View style={styles.buttonWrapper}>
            {isStarted ? (
                <RoundedButton
                    title="pause"
                    style={styles.roundedButton}
                    onSubmit={() => setIsStarted(false)}></RoundedButton>
            ) : (
                <RoundedButton
                    title="start"
                    style={styles.roundedButton}
                    onSubmit={() => setIsStarted(true)}></RoundedButton>
            )}
        </View>
        <View style={styles.clearSubject}>
            <RoundedButton
                title="-"
                size={50}
                style={styles.roundedButton}
                onSubmit={() => clearSubject()}></RoundedButton>
        </View>

    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    inputContainer: {
        paddingTop: spacing.lg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        marginRight: spacing.lg,
    },
    roundedButton: {
        justifyContent: 'center',
    },
    countDownContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        flex: 0.3,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    roundedButton: {
        justifyContent: 'center',
    },
    title: {
        color: colors.white,
        textAlign: 'center',
    },
    task: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    clearSubject: {
        paddingBottom: 25,
        paddingLeft: 25
    }
});
