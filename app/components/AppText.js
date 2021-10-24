import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

export default function AppText({ children, }) {
    return (
        <View>
            <Text style={styles.container} >{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 10,
        paddingVertical: 0,
        color: colors.white,
    },
});
