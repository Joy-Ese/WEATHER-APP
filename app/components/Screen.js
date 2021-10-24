import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import constants from 'expo-constants';

export default function Screen({children}) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
});
