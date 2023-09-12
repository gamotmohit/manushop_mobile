import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import styles from './home.style';
import { ScrollView } from 'react-native';
import { Welcome } from '../components';
import Carousel from '../components/home/Carousel';
import Heading from '../components/home/Heading';
import ProductRow from '../components/products/ProductRow';
import { SIZES } from '../constants';

// create a component
const Home = () => {
    console.log("APPLICATION STARTED....");
    return (
        <SafeAreaView>
            <View style={styles.appBarWarpper}>
                <View style={styles.appBar}>
                    <Ionicons name="location-outline" size={24} />
                    <Text style={styles.location}>Mumbai, India</Text>
                    <View style={{ alignItems: "flex-end" }}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>8</Text>
                        </View>
                        <TouchableOpacity>
                            <Fontisto name="shopping-bag" size={24}></Fontisto>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView style={{ paddingBottom: SIZES.large }}>
                <Welcome></Welcome>
                <Carousel></Carousel>
                <Heading></Heading>
                <ProductRow></ProductRow>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
