import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import AppPicker from './AppPicker';

export default function Ratings() {
    return (
        <>
        <View style={styles.container} >
            <View style={styles.textContainer}>
                <Text style={styles.Text1} >Ratings & Reviews</Text>
                <AppPicker
                    placeholder="Sorted by recent reviews"
                />
            </View>
            <MaterialCommunityIcons name="star" size={24} color="orange" style={styles.starIcon} />
            <View style={styles.rating}>
                <Text style={styles.number}>4.6</Text>
            </View>
            <View><Text style={styles.reviews}>429 Reviews</Text></View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textContainer: {
        marginTop: -300,
    },

    Text1: {
        color: colors.black,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
    },

    Text2: {
        color: colors.grey,
        fontSize: 15,
        marginLeft: 20,
    },

    starIcon: {
        marginTop: -300,
        marginLeft: 50,
    },

    number: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.orange,
    },

    reviews: {
        color: colors.grey,
        marginLeft: -90,
        marginTop: -270,
        fontSize: 12,
    },

    rating: {
        marginTop: -300,
        marginLeft: -30,
    },
});
