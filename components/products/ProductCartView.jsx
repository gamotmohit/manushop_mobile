import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './productCartView.style';
import { Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

// create a component
const ProductCartView = (item) => {
    const navigation = useNavigation();
    item = item.item;
    return (
        <TouchableOpacity onPress={() => { navigation.navigate("ProductDetails", {item}) }}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item.imageUrl }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>
                        {item.title}
                    </Text>
                    <Text style={styles.supplier} numberOfLines={1}>
                        {item.supplier}
                    </Text>
                    <Text style={styles.price} numberOfLines={1}>
                        {item.price}
                    </Text>
                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name="add-circle" size={35} color={COLORS.primary}></Ionicons>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCartView;