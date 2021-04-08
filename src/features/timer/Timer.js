import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';
import { spacing, fontSizes } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { Timing } from './Timing';
import KeepAwake from 'react-native-keep-awake';

export const Timer = ({ focusSubject }) => {
    KeepAwake.activate();
    const [minutes, setMinutes] = useState(0.1);
    const [tmp, setTmp] = useState(null);
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);

    const onProg = (prog) => {
        setProgress(prog);
        // console.log(prog)
    }
    const changeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.countDownContainer}>
                <Countdown minutes={minutes} isPaused={!isStarted} onProg={(prog) => onProg(prog)} />
            </View>
            <View style={{ paddingTop: spacing.xxl }}>
                <Text style={styles.title}>Focusing On:</Text>
                <Text style={styles.task}>{focusSubject}</Text>

            </View>
            <View style={{ paddingTop: spacing.sm }}>
                <ProgressBar
                    color='#5E84E2'
                    style={{ height: 10, }}
                    progress={progress}
                />
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});
