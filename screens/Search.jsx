import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Search.style';
import { COLORS, SIZES } from "../constants/index";
import { TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

// create a component
const Search = () => {
    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons name="camera-outline" size={30} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        onPressIn={() => {}}
                        placeholder="What are you looking for"
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Feather name="search" size={24} color={COLORS.offwhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Search;