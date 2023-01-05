import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import axios from "axios";

const TrendingProducts = () => {
  const [trendingProduct, setProducts] = useState("");
  let trimmeddata = trendingProduct.slice(0, 4);
  console.log("trimmeddata", trimmeddata);
  // console.log("banners",trendingProduct)
  useEffect(() => {
    products();
  }, []);
  const products = () => {
    axios
      .post("https://test.freshandfetch.com/api/v1/home", {
        warehouse_id: 1,
      })
      .then(function (response) {
        setProducts(response.data.data.trending_products);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const trendingProductDisplay = ({ item }) => {
    return (
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.mainContainer}>
          <Text style={styles.BannerText}>{item.name}</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.BannerText}>{item.unit_price}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.topContainer}>
      <Text style={styles.headerStyle}>Trending Products</Text>
      <FlatList
        data={trimmeddata}
        renderItem={trendingProductDisplay}
        keyExtractor={(item) => {
          item.id;
        }}
      />
    </View>
  );
};
export default TrendingProducts;
const styles = StyleSheet.create({
  topContainer: {
    marginTop: 30,
  },
  mainContainer: {
    overflow: "hidden",
    flexDirection: "row",
    margin: 30,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 8,
  },
  BannerText: {
    color: "white",
    fontStyle: "italic",
  },
  image: {
    width: 30,
    height: 40,
    borderColor: "black",
    borderWidth: 3,
  },
  headerStyle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "100",
    color: "black",
  },
});
