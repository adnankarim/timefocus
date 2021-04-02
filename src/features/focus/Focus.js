import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

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
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    },
    inputContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        flex: 1,
        marginRight: 20,
    },
    roundedButton: {
        justifyContent: 'center',
    }
});
