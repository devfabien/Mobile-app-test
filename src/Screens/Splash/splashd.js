import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View ,Text ,Image } from "react-native";
import { Colors } from "../../Components/Colors";
import {scale} from "react-native-size-matters"

export const SplashD =({navigation}) =>{
    return(
       
            <View style={{backgroundColor:Colors.blue,height:"100%",paddingVertical:scale(38),paddingHorizontal:scale(15)}}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row"}}>
                <Image source={require("../../Assets/logo.png.png")} style={{width:scale(40),height:scale(40)}} />
                <Text style={{color:Colors.white,fontWeight:"800",marginTop:scale(7)}}>D Pay</Text>
                </View>
                <View>
                    <Text style={{color:Colors.white,fontWeight:"600",marginTop:scale(7)}}>Skip</Text>
                </View>
                
                </View>
                <Image source={require("../../Assets/se.jpg")} style={{borderRadius:scale(100),width :scale(150),height:scale(180),marginVertical:scale(30),alignSelf:"center"}} />
                <View>
                    <Text style={{alignSelf:"center",fontSize:scale(25),fontWeight:"bold",color:Colors.white,marginVertical:scale(10)}}>Shopping    </Text>
                    <Text onPress={()=> navigation.navigate("SplashE")} numberOfLines={5} style={{alignSelf:"center",fontSize:scale(16),color:Colors.semi_black,marginTop:scale(20),fontWeight:"600",}}>
You can use DPay to pay in-store, using scan and pay, or online anywhere DPay is accepted, up to your credit limit, without   </Text>
<Text onPress={()=> navigation.navigate("SplashE")} numberOfLines={5} style={{alignSelf:"center",fontSize:scale(16),color:Colors.semi_black,fontWeight:"600",}}>
needing a physical card.  </Text>
                </View>
                <StatusBar style="light" />
                 </View>
    )
}