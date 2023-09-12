import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './headings.style';
import { TouchableOpacity } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { COLORS } from '../../constants';

// create a component
const Heading = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New Launch</Text>
                <TouchableOpacity>
                    <Ionicons name="ios-grid" size={24} color={COLORS.primary}></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Heading;