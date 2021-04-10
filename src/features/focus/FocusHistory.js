import React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { fontSizes } from '../../utils/sizes';


const HistoryItem = ({ item, index }) => {
    return (<Text key={index} style={styles.historyItem(item.status)}>
        {item.subject}
    </Text>);
}
export const FocusHistory = ({ focusSubjectHistory, onClear }) => {


    return (<><SafeAreaView style={{ flex: 0.5, alignItems: 'center' }} >
        <Text style={styles.title}>Things we have focused on</Text>
        {
            focusSubjectHistory.length > 0 && (<FlatList
                data={focusSubjectHistory}
                style={{ flex: 1 }}
                contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                renderItem={HistoryItem}
                keyExtractor={(item, index) => index.toString()}

            />)

        }
    </SafeAreaView></>);

}


const styles = StyleSheet.create({
    historyItem: (status) => ({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.md
    }),
    title: {
        color: 'white',
        fontSize: fontSizes.lg
    }
});