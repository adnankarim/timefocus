import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';
import { spacing, fontSizes } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';

export const Timer = ({ focusSubject }) => {

    const [tmp, setTmp] = useState(null);

    return (
        <View style={styles.container}>
            <Countdown />
            <View style={{ paddingTop: spacing.xxl }}>
                <Text style={styles.title}>
                    Focusing On:
                </Text>
                <Text style={styles.task}>
                    {focusSubject}
                </Text>
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
        textAlign: 'center'
    },
    task: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    inputContainer: {
        paddingTop: spacing.lg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        flex: 1,
        marginRight: spacing.lg,
    },
    roundedButton: {
        justifyContent: 'center',
    }
});
