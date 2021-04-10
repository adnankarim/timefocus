import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
    return (
        <>
            <View style={styles.timingButton}>
                <RoundedButton
                    size={75}
                    title="10"
                    onSubmit={() => {
                        onChangeTime(10);
                    }}
                />
            </View>
            <View style={styles.timingButton}>
                <RoundedButton
                    size={75}
                    title="15"
                    onSubmit={() => {
                        onChangeTime(15);
                    }}
                />
            </View>
            <View style={styles.timingButton}>
                <RoundedButton
                    size={75}
                    title="20"
                    onSubmit={() => {
                        onChangeTime(20);
                    }}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
