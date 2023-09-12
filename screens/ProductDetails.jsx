import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Fontisto, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from "../constants/index";
import styles from './productDetails.style';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { YellowBox } from 'react-native-web';
import { useRoute } from '@react-navigation/native';

// create a component
const ProductDetails = () => {
    const route = useRoute();
    const {item} = route.params;
    //console.log(item);

    const [count, setCount] = useState(1);

    const increment = () => {
        if(count < 5){
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="chevron-back-circle" size={30}></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="heart" size={30} color={COLORS.primary}></Ionicons>
                </TouchableOpacity>
            </View>
            <Image
             source={{uri: item.imageUrl }} 
             style={styles.image}
            />
            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>{item.price}</Text>    
                    </View>
                </View>
                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {[1,2,3,4,5].map((index) => {
                            return (<Ionicons 
                                    key={index} 
                                    name="star" 
                                    size={24} 
                                    color="gold"
                                    />)
                        })}                        
                        <Text style={styles.ratingText}> (4.9)</Text>
                    </View>
                    <View style={styles.rating}> 
                        <TouchableOpacity onPress={()=>increment()}>
                            <SimpleLineIcons name="plus" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.ratingText}>{count}</Text>
                        <TouchableOpacity onPress={()=>decrement()}>
                            <SimpleLineIcons name="minus" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.descText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
                <View style={{marginBottom: SIZES.small, marginHorizontal: SIZES.large}}>
                    <View style={styles.location}>
                        <View style={{flexDirection: "row"}}>
                            <Ionicons name="location-outline" size={20}/>
                            <Text> Mumbai, India</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <MaterialCommunityIcons name="truck-delivery-outline" size={20}/>
                            <Text> Free Delivery </Text>
                        </View>
                    </View>
                    <View style={styles.cartRow}>
                        <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
                            <Text style={styles.cartTitle}>BUY NOW</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}} style={styles.addCart}>
                            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        
    );
};

export default ProductDetails;