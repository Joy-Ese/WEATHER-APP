import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

export default function Cities() {
    return (
    <>
    <View style={styles.container} >
        <View style={styles.timeWifi}>
            <Text style={styles.time}>9:45</Text>
            <MaterialCommunityIcons name="wifi" size={20} color="white" />
        </View>
        <View style={styles.chevronLeft}>
            <MaterialCommunityIcons name="chevron-left" size={30} color="white" />
        </View>
        <View style={styles.textContainer} >
            <View style={styles.london}>
                <Text style={styles.text1} >London</Text>
                <Text style={styles.text2} >England</Text>
                <View style={styles.button} >
                    <Text style={styles.text3} >$330</Text>
                </View>
            </View>
        </View>
        <View style={styles.iconsContainer}>
                <MaterialCommunityIcons name="cards-heart" size={25} color="white" />
                <MaterialCommunityIcons name="select" size={25} color="white" />
        </View>
        <View>
            <Text style={styles.text4} >Expires in: 58 h 23 min</Text>
        </View>
    </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        margin: 8,
        flex: 1.3,
    },

    chevronLeft: {
        marginLeft: 12,
    },

    textContainer: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginTop: -30,
        marginLeft: -200,
    },

    london: {
        marginLeft: 20,
    },

    timeWifi: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    time: {
        color: colors.white,
        fontSize: 15,
    },

    text1: {
        color: colors.white,
        fontSize: 20,
        fontWeight: "bold",
    },

    text2: {
        color: colors.white,
        fontSize: 15,
    },

    button: {
        backgroundColor: colors.secondary,
        width: 45,
        height: 22,
        borderRadius: 10,
        marginTop: 8,
    },

    text3: {
        fontSize: 13,
        color: colors.white,
        alignSelf: "center",
    },

    iconsContainer: {
        width: 80,
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        marginLeft: 250,
        marginTop: -80,
    },

    text4: {
        color: colors.white,
        fontSize: 15,
        marginLeft: 180,
        marginTop: -50,
    },
});
