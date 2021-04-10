import React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { fontSizes } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item, index }) => {
    return (
        <Text key={index} style={styles.historyItem(item.status)}>
            {item.subject}
        </Text>
    );
};
export const FocusHistory = ({ focusSubjectHistory, onClear }) => {
    return (
        <>
            <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
                <Text style={styles.title}>Things we have focused on</Text>
                {focusSubjectHistory.length > 0 && (
                    <>
                        <FlatList
                            data={focusSubjectHistory}
                            style={{ flex: 1 }}
                            contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                            renderItem={HistoryItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <RoundedButton
                            size={50}
                            title="clear"
                            style={styles.roundedButton}
                            onSubmit={() => onClear()}></RoundedButton>
                    </>
                )}
                {focusSubjectHistory.length === 0 && (
                    <>
                        <Text style={{ fontSize: fontSizes.md, color: 'red' }}>No data exists.</Text>
                    </>
                )}
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    historyItem: status => ({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.md,
    }),
    title: {
        color: 'white',
        fontSize: fontSizes.lg,
    },
    roundedButton: {
        justifyContent: 'center',
    },
});
