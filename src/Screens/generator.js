import React,{useState} from "react";
import {View, Text ,ScrollView,RefreshControl,TouchableOpacity,TextInput} from "react-native";
import { StatusBar } from "expo-status-bar";

import {Colors} from "../Components/Colors"
import { moderateScale, scale } from "react-native-size-matters";
import QRCode from 'react-native-qrcode-svg';
let logoFromFile = require("../Assets/logo.png.png");
export const Generator =({route})=>{
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState({"total":route.params.storesum,"data":route.params.dataset});
  const [data,setData] = useState()
  console.log(route.params.storesum)
  // setQrvalue(route.params.storesum)
    return(
        <View style={{backgroundColor:Colors.bg,height:"100%"}}>
            <View style={{backgroundColor:Colors.blue,height:"18%"}}>
              
        
                <View style={{flexDirection:"row",alignSelf:"center",marginTop:scale(50)}}>
                  
                <Text style={{color:Colors.white,fontWeight:"800",fontSize:scale(20),marginLeft:scale(2)}}>Get Your code</Text>
               
                </View>
                </View>
            <ScrollView
      
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
             <View style={{marginVertical:moderateScale(30),padding:scale(10),alignSelf:"center",marginLeft:scale(15)}}>
              
             <QRCode
          
          // value={qrvalue}
          value={`total=${qrvalue.total} \n ${qrvalue.data.map(item) `name:${item.name} price:${item.price}\n`} `}     
          size={250}         
          color="black"
          backgroundColor="white"
          logo={logoFromFile}
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor={Colors.blue}
          
        />
            <Text style={{color:Colors.black,textAlign:"center",fontWeight:"700"}}>
          Please scan to generate total
        </Text>
        </View>  
</ScrollView>
<StatusBar style="light"/>
</View>
       
        
    )
}