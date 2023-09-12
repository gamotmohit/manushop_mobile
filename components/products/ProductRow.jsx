import React, {useState} from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from "../../constants";
import ProductCartView from './ProductCartView';
import styles from './productRow.style';
import useFetch from '../../hook/useFetch';

// create a component
const ProductRow = () => {
    const {data, isLoading, error} = useFetch();
    //const [isLoading, setIsLoading] = useState(false);
    //const products = {"documents":[{"_id":"64e4fb54bb1737a4e3a59dd4","title":"Green Couch","supplier":"Playfull Interiors","price":"$799.99","imageUrl":"https://d326fntlu7tb1e.cloudfront.net/uploads/5d445b91-c01a-4564-8ff8-c27c2b88ea5b-fn7.png","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","product_location":"Mumbai","__v":0},{"_id":"64e4fc55bb1737a4e3a59dd8","title":"Green Couch","supplier":"Playfull Interiors","price":"$799.99","imageUrl":"https://d326fntlu7tb1e.cloudfront.net/uploads/5d445b91-c01a-4564-8ff8-c27c2b88ea5b-fn7.png","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","product_location":"Mumbai","__v":0},{"_id":"64e4fc7e0ab817d874fb7047","title":"Green Couch","supplier":"Playfull Interiors","price":"$799.99","imageUrl":"https://d326fntlu7tb1e.cloudfront.net/uploads/5d445b91-c01a-4564-8ff8-c27c2b88ea5b-fn7.png","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","product_location":"Mumbai","__v":0},{"_id":"64e4fd8fbf6983b6cde4e834","title":"Green Couch Mag","supplier":"Playfull Interiors","price":"$799.99","imageUrl":"https://d326fntlu7tb1e.cloudfront.net/uploads/5d445b91-c01a-4564-8ff8-c27c2b88ea5b-fn7.png","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","product_location":"Mumbai","__v":0},{"_id":"64e5024293d9633aac4a7427","title":"Wood Couch","supplier":"IKEA Interiors","price":"$79.59","imageUrl":"https://images.pexels.com/photos/3614082/pexels-photo-3614082.jpeg?auto=compress&cs=tinysrgb&w=1403&h=788&dpr=1","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","product_location":"Delhi","__v":0},{"_id":"64e5027f93d9633aac4a7429","title":"Brown Bed","supplier":"IKEA Interiors","price":"$99.59","imageUrl":"https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1403&h=788&dpr=1","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","product_location":"Chennai","__v":0}]}
    //const prdt = products.documents;
    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
            ): error ? (
                <Text>Something went wrong.</Text>
            ):(
                <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    renderItem={({item}) => <ProductCartView item={item} />}
                    horizontal
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                />
            )}            
        </View>
    );
};

export default ProductRow;