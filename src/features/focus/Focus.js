import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';
import { spacing, fontSizes } from '../../utils/sizes';
export const Focus = ({ addSubject }) => {
    const [subject, setSubject] = useState('hello');

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>What would you like to focus on?</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={subject}
                        onChangeText={text => {
                            setSubject(text);
                        }}
                    />
                    <RoundedButton
                        title="+"
                        size={50}
                        style={styles.roundedButton}
                        onSubmit={() => {
                            addSubject(subject);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: spacing.md,
        justifyContent: 'center',
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: fontSizes.lg,
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
});
