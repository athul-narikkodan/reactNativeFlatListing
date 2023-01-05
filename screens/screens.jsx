import { View,Text,FlatList,StyleSheet,Image,ScrollView } from "react-native";
import axios from "axios";
import TrendingProducts from "./trendindProducts";
import { useEffect,useState } from "react";
const HomeScreen =()=>{
    const [banners,setBanner]=useState('')
    useEffect(()=>{
       homeApi()
            },[ ])
    const homeApi=()=>{
        axios.post('https://test.freshandfetch.com/api/v1/home', {
            warehouse_id:1
          })
          .then(function (response) {
           setBanner(response.data.data.banners)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  
    const bannerDisplay=({item})=>{
        return(
           <View >
                 <View >
                 <Image source={{uri:item.image}} style={styles.image}/>
                 </View> 
                    <View style={styles.mainContainer}>
                    <Text style={styles.BannerText}>{item.name}</Text> 
                    </View> 
                <View style={styles.mainContainer}>
                <Text style={styles.BannerText}>{item.link}</Text>
                </View>
          </View>
        )
    }
    return(
            <ScrollView>
                <View>
                    <View style={styles.topContainer}>
                        <Text style={styles.headerStyle}>Banners</Text>
                        <FlatList
                        data={banners}
                        renderItem={bannerDisplay}
                        keyExtractor={(item)=>{item.id}}
                        />
                    </View>
                    <TrendingProducts/>
                </View>
            </ScrollView>
    )

}
export default HomeScreen
const styles=StyleSheet.create({
    topContainer:{
        flex:1,
        marginTop:30
    },
    mainContainer:{
        overflow:"hidden",
        flexDirection:"row",
        margin:30,
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'blue',
        borderRadius:8,

    },
    BannerText:{
        color:'white',
        fontStyle:'italic',

    },
    image:{
        width:30,
        height:40,
        borderColor:'black',
        borderWidth:3
    },
    headerStyle:{
        textAlign:'center',
        fontSize:20,
        fontWeight:"100",
        color:'black',
        padding:20
    }
})