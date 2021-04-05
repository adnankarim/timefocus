import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';
import { spacing, fontSizes } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { Timing } from './Timing';

export const Timer = ({ focusSubject }) => {
    const [minutes, setMinutes] = useState(0.1);
    const [tmp, setTmp] = useState(null);
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setprogress] = useState(1);

    const onProgress = (progress) => {
        setprogress(progress);

    }
    const changeTime = (min) => {
        setMinutes(min)
    }
    return (
        <View style={styles.container}>
            <View style={styles.countDownContainer}>
                <Countdown minutes={minutes} isPaused={!isStarted} onProgress={onProgress} />
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