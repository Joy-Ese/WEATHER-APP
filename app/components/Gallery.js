import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import AppPicker from './AppPicker';

export default function Gallery() {
    return (
        <>
        <View style={styles.container} >
            <View style={styles.textContainer}>
                <Text style={styles.Text1} >Gallery</Text>
                <AppPicker
                    placeholder="Sorted by recent photos"
                />
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box} >
                    <MaterialCommunityIcons 
                        name="image-filter-hdr" 
                        size={100} 
                        color="darkgrey" />
                </View>
                <View style={styles.box} >
                    <MaterialCommunityIcons 
                        name="image-filter-hdr" 
                        size={100} 
                        color="darkgrey" />
                </View>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        flex: 0.001,
    },

    textContainer: {
        marginTop: -120,
    },

    Text1: {
        color: colors.black,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
    },

    boxContainer: {
        flex: 1,
        margin: 12,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    box: {
        width: 150,
        height: 150,
        borderRadius: 20,
        backgroundColor: colors.waterblue,
        alignItems: "center",
    },
});
