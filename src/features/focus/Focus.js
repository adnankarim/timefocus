import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';
import { spacing, fontSizes } from '../../utils/sizes';
export const Focus = ({ addSubject }) => {

    const [tmp, setTmp] = useState('hello');

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What would you like to focus on?</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} value={tmp} onChangeText={(text) => { setTmp(text) }} />
                    <RoundedButton title='+' size={50} style={styles.roundedButton} onSubmit={() => { addSubject(tmp); console.log(tmp) }} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        flex: 0.5,
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
