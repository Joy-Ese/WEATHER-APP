import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

export default function Included() {
    return (
        <>
        <View style={styles.container} >
            <View>
                <Text style={styles.Text1} >Included</Text>
                <Text style={styles.Text2} >For more details press on the icons</Text>
            </View>
            <View style={styles.iconContainer}>
            <View>
                <MaterialCommunityIcons 
                    style={styles.icon} 
                    name="airplane" 
                    size={28} 
                    color="white" />
                <Text style={styles.Text3} >Flight</Text>
            </View>
            <View>
                <MaterialCommunityIcons 
                    style={styles.icon} 
                    name="bed" 
                    size={28} 
                    color="white" />
                <Text style={styles.Text3} >Hotel</Text>
            </View>
            <View>
                <MaterialCommunityIcons 
                    style={styles.icon} 
                    name="car" 
                    size={28} 
                    color="white" />
                <Text style={styles.Text3} >Car</Text>
            </View>
            <View>
                <MaterialCommunityIcons 
                    style={styles.icon} 
                    name="diving-scuba-flag" 
                    size={28} 
                    color="white" />
                <Text style={styles.Text3} >Tour</Text>
            </View>
        </View>
        </View>
        
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        flex: 3.5,
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

    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginLeft: -20,
    },

    icon: {
        padding: 5,
        backgroundColor: colors.secondary,
        height: 40,
        width: 40,
        borderRadius: 100,
        marginTop: 5,
    },

    Text3: {
        color: colors.black,
        alignSelf: "center",
        fontWeight: "bold",
    },
});
