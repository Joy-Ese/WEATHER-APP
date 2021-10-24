import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

export default function Reviews() {
    return (
        <>
        <View style={styles.container}>
            <View>
                <View style={styles.first}>
                    <Text style={styles.london}>London is great!</Text>
                    <View style={styles.fiveStar}>
                        <MaterialCommunityIcons name="star" size={18} color="orange" />
                        <MaterialCommunityIcons name="star" size={18} color="orange" />
                        <MaterialCommunityIcons name="star" size={18} color="orange" />
                        <MaterialCommunityIcons name="star" size={18} color="orange" />
                        <MaterialCommunityIcons name="star" size={18} color="orange" />
                    </View>
                </View>
                <View style={styles.second}>
                    <Text style={styles.johnDoe}>John Doe</Text>
                    <Text style={styles.date}>12/08/18</Text>
                </View>
            </View>
            <View style={styles.loremContainer}>
                <Text style={styles.lorem}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit, 
                    sapien sed dapibus sodales, erat ante blandit quam, non dignissim velit nibh 
                    id ipsum. Duis faucibus lorem et egestas luctus.
                </Text>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
    },

    first: {
        height: 150,
        margin: 25,
        width: 310,
        borderRadius: 20,
        backgroundColor: colors.waterblue,
        marginTop: -255,
    },

    london: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 15,
    },

    fiveStar: {
        flexDirection: "row",
        marginLeft: 15,
    },

    second: {
        marginTop: -160,
        marginLeft: 270,
    },

    johnDoe: {
        fontSize: 13,
        fontWeight: "bold",
        color: colors.darkgrey,
    },

    date: {
        fontSize: 11,
        marginLeft: 6,
        fontWeight: "bold",
        color: colors.darkgrey,
    },

    loremContainer: {
        marginTop: -205,
        marginLeft: 40,
        width: 280,
    },

    lorem: {
        fontSize: 12,
        lineHeight: 18,
    },
});
