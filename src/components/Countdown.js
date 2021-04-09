import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Vibration, Platform } from 'react-native';
import { spacing, fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';
import { ProgressBar } from 'react-native-paper';

const minutesToMillis = min => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;


export const Countdown = ({ minutes = 20, isPaused = true, onEnd }) => {
    const [millis, setMillis] = useState(null);
    const [progress, setProgress] = useState(1);
    const interval = React.useRef(null);
    const vibrate = () => {
        if (Platform.OS === 'ios') {
            const interval = setInterval(() => (Vibration.vibrate), 1000)
            setTimeout(() => (clearInterval(interval)), 10000)
        }
        else {
            Vibration.vibrate(10000);
        }
    }
    const countDown = () => {
        setMillis((time) => {
            if (time === 0) {
                clearInterval(interval.current)
                setProgress(1);
                vibrate();
                onEnd();
                return time;
            }
            const timeLeft = time - 1000;
            setProgress(timeLeft / minutesToMillis(minutes))
            return timeLeft;
        })
    }

    useEffect(() => {
        setMillis(minutesToMillis(minutes));
        setProgress(1);
    }, [minutes])
    useEffect(() => {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current)
            return;
        }
        interval.current = setInterval(countDown, 1000)
        return () => (clearInterval(interval.current))
    }, [isPaused])

    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60
    return (
        <View>

            <View style={{ paddingTop: spacing.sm }}>
                <ProgressBar
                    color='#5E84E2'
                    style={{ height: 10, }}
                    progress={progress}
                />
            </View>
            <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
        </View>);
};

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.lg,
        backgroundColor: 'rgba(94,132,226,0.3)'
    },

});
