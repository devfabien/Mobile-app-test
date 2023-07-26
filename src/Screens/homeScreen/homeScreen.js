import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View,StyleSheet,Dimensions,Image, ImageBackground, Pressable,Alert} from 'react-native';
import { scale } from 'react-native-size-matters';
import { Ionicons,MaterialCommunityIcons,MaterialIcons,Feather} from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Prompt from 'react-native-simple-prompt'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getItemAsync } from 'expo-secure-store';


const height = Dimensions.get('screen').height


const HomeScreen =  ({navigation}) => {
    const [token,setToken] = useState('')
    const [data,setData] = useState([])
    const [balance,setBalance] = useState()
    
    console.log(token)
    useEffect(() => {
        dataFetch()
        getBalance()
      }, [])
    
    const dataFetch = async () =>{
        try{
            const response = await axios({
                method:'get',
                url:'https://dummyjson.com/carts'
            })
            console.log(response.data.carts[0].products)
            setData(response.data.carts[0].products)
            
        }catch(err){
            console.log(err)
        }
    }

     const getBalance = async () =>{
      getItemAsync("StoreToken").then((data)=>{
        setToken(data)
    }).catch(err => console.log(err))
      try{

        const response = await axios({
            method:'get',
            url:'https://d-pay-api.onrender.com/api/v1/accountBalance/balance',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
        console.log(response.data)
        setBalance(response.data)
      }catch(err){
        console.log(err.response.data)
      }
    }
  return (
    
    
    <View style={styles.containerBody}>
      <StatusBar style="light"></StatusBar>
      <View  style={styles.container}>
            <View style={styles.containerInner}>
                <View style={styles.col1}>
                    <Text style={styles.balance}>Balance</Text>
                    <Text style={styles.subalance}>{balance}</Text>
                </View>
                <View style={styles.col2}>
                <Ionicons name="notifications-outline" size={24} color="white" />
                </View>
            </View>
            <Prompt />
            <View style={styles.containerIconinner}>
                  <TouchableOpacity onPress={()=>Prompt('enter ')}>
                  <View style={styles.colrow}>
                    <View>
                    <MaterialCommunityIcons name="qrcode-scan" size={28} color="white" />
                    </View>
                    <Text style={{fontWeight:'bold',fontSize:scale(12),color:'white'}}>Scan</Text>
                </View>
                  </TouchableOpacity>
                <Pressable onPress={()=>{navigation.navigate('addtopup')}}>
                <View style={styles.colrow}>
                    <View>
                    <Ionicons name="add-circle" size={28} color="white" />
                    </View>
                    <Text style={{fontWeight:'bold',fontSize:scale(12),color:'white'}}>Tap up</Text>
                 </View>
                </Pressable>
                 <View style={styles.colrow}>
                     <View>
                     <MaterialIcons name="present-to-all" size={28} color="white" 
                     onPress={()=>{
                      // Prompt.show('Tap up','Enter amount money')
                      alert('ello')
                     }}
                     />
                   </View>
                    <Text style={{fontWeight:'bold',fontSize:scale(12),color:'white'}} >Send</Text>
                 </View>
                 <View style={styles.colrow}>
                     <View>
                     <Feather name="arrow-down-circle" size={28} color="white" />
                     </View>
                    <Text style={{fontWeight:'bold',fontSize:scale(12),color:'white'}}>Recieve</Text>
                 </View>
            </View>
      </View>
      <View style={styles.containerBodydata}>
          <View style={styles.containerIconinner}>
            <ScrollView horizontal>
            {/* <View style={[styles.colrow,{backgroundColor:'#EDAFAF'}]}></View>
            <View style={[styles.colrow,{backgroundColor:'#E0AD5F'}]}></View>
            <View style={[styles.colrow,{backgroundColor:'#D9D9D9'}]}></View> */}
            {data.map((item,index)=>{
                return(
                    <View key={index} style={[styles.colrow,{backgroundColor:'#D9D9D9',marginHorizontal:3}]}>
                        <Text style={{fontSize:8,padding:3,alignSelf:'center'}} numberOfLines={2}>{item.title}</Text>
                        <Text style={{fontSize:8,padding:3,alignSelf:'center'}} numberOfLines={2}>{item.price}</Text>

                        </View>
                )
            })}
            {/* <View style={[styles.colrow,{backgroundColor:'#AB8585'}]}></View> */}
            </ScrollView>
          </View>
          <View style={styles.containerIconinner}>
            <View style={[styles.colrow,{backgroundColor:'#D9D9D9'}]}></View>
            <View style={[styles.colrow,{backgroundColor:'#AB8585'}]}></View>
            <View style={[styles.colrow,{backgroundColor:'#D9D9D9'}]}></View>
            <View style={[styles.colrow,{backgroundColor:'#EDAFAF'}]}></View>
          </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:-18,marginHorizontal:16}}>
        <View>
            <Text style={{fontWeight:'bold',fontSize:scale(12),color:'#000000',fontSize:15}}>Check new promo</Text>
            <Text style={{fontWeight:'bold',fontSize:scale(12),color:'#A5ABAB',fontSize:13}}>Funding with promo code</Text>
        </View>
        <View style={{borderColor:'#2D2D9B',borderWidth:1,padding:7,borderRadius:7}}>
            <Text style={{fontWeight:'bold'}}>View all</Text>
        </View>
      </View>
      <ScrollView horizontal>

            <Image 
                  style={{
                    width: 290,
                    height:140,
                    marginHorizontal:18,
                    marginVertical:30,
                    borderRadius:10,
                  }}
            source={{
                uri:'https://cdn.pixabay.com/photo/2016/02/20/00/24/credit-card-1211409__340.png'
            }} >

            </Image>

      <Image
      style={{
        width:290,
        height:140,
        marginHorizontal:18,
        marginVertical:30,
        borderRadius:10,
      }
    }
      source={{
        uri:'https://cdn.w600.comps.canstockphoto.com/credit-card-isolated-clip-art_csp9786362.jpg'
      }}
      ></Image>
      <Image
      style={{
        width:290,
        height:140,
        marginHorizontal:18,
        marginVertical:30,
        borderRadius:10,
      }
    }
      source={{
        uri:'http://about.martinr.com/shopify/images/Mermaid_II/medium/Mermaid_II_A2.jpg'
      }}
      ></Image>


      </ScrollView>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:-18,marginHorizontal:16}}>
        <View>
            <Text style={{fontWeight:'bold',fontSize:scale(12),color:'#000000',fontSize:15}}>Check new promo</Text>
            <Text style={{fontWeight:'bold',fontSize:scale(12),color:'#A5ABAB',fontSize:13}}>Funding with promo code</Text>
        </View>
        <View style={{borderColor:'#2D2D9B',borderWidth:1,padding:7,borderRadius:7}}>
            <Text style={{fontWeight:'bold'}}>View all</Text>
        </View>
      </View>
      <StatusBar style={'auto'}/>
      </View>
   
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default HomeScreen;


const styles = StyleSheet.create({
    containerBody:{
            backgroundColor: '#E5EBFF',
            height:height,
            marginTop:24
    },
    container:{
        justifyContent:'center',
        backgroundColor:'#2D2D9B',
        paddingHorizontal:10,
        paddingTop:30,
        paddingBottom:40
    },
    balance:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    subalance:{
        color:'white',
        fontWeight:'bold',
        fontSize:13
    },
    containerInner:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    containerIconinner:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:6

    },
    colrow:{
        width:60,
        height:60,
        marginRight:1,
        borderRadius:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'white',
        backgroundColor:'#2D2D9B'
    },
    containerBodydata:{
        backgroundColor:"#fff",
        borderRadius:7,
        padding:10,
        margin:17,
        position:'relative',
        top:-40,
    },
})

const credit = [
    {
    "src":"http://about.martinr.com/shopify/medium/Mermaid_II.jpg",
    "position":1
    },
    {
    "src":"http://about.martinr.com/shopify/images/Mermaid_II/medium/Mermaid_II_A0.jpg",
    "position":2
    },
    {
    "src":"http://about.martinr.com/shopify/images/Mermaid_II/medium/Mermaid_II_A1.jpg",
    "position":3
    },
    {
    "src":"http://about.martinr.com/shopify/images/Mermaid_II/medium/Mermaid_II_A2.jpg",
    "position":4
    }
]