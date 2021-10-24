import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';

export default function PickItems({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <AppText>{label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({});
