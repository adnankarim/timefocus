import React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';


const HistoryItem = ({ item, index }) => {
    return (<>
        {item}
    </>);
}
export const FocusHistory = ({ focusSubjectHistory, onClear }) => {


    return (<><SafeAreaView>
        <Text>Things we have focused on</Text>
        {
            focusSubjectHistory.length && <FlatList
                data={ }
                style={{ flex: 1 }}
                contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                renderItem={HistoryItem}
            />

        }
    </SafeAreaView></>);

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});