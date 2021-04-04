import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';
import { spacing, fontSizes } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';

export const Timer = ({ focusSubject }) => {
    const [tmp, setTmp] = useState(null);
    const [isStarted, setIsStarted] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.countDownContainer}>
                <Countdown isPaused={!isStarted} />
            </View>
            <View style={{ paddingTop: spacing.xxl }}>
                <Text style={styles.title}>Focusing On:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
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
        alignItems: 'center',
        margin: 15
    },
    roundedButton: {
        justifyContent: 'center',
    }
});
