import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View ,Text ,Image } from "react-native";
import { Colors } from "../../Components/Colors";
import {scale} from "react-native-size-matters"
import {SafeAreaView} from "react-native-safe-area-context";
export const SplashB =({navigation}) =>{
    return(
       
            <View style={{backgroundColor:Colors.blue,height:"100%",paddingVertical:scale(38),paddingHorizontal:scale(15)}}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row"}}>
                <Image source={require("../../Assets/logo.png.png")} style={{width:scale(40),height:scale(40)}} />
                <Text style={{color:Colors.white,fontWeight:"800",marginTop:scale(7)}}>D Pay</Text>
                </View>
                <View>
                    <Text style={{color:Colors.white,fontWeight:"600",marginTop:scale(7)}}
                    onPress={()=>navigation.navigate('SplashC')}
                    >Skip</Text>
                </View>
                
                </View>
                <Image source={require("../../Assets/sb.jpg")} style={{borderRadius:scale(100),width :scale(180),height:scale(180),marginVertical:scale(30),alignSelf:"center"}} />
                <View>
                    <Text  style={{alignSelf:"center",fontSize:scale(26),fontWeight:"bold",color:Colors.white,marginVertical:scale(10)}}>Easy Top up &  Withdraw  </Text>
                    <Text  onPress={()=> navigation.navigate("SplashC")} numberOfLines={6} style={{alignSelf:'center',fontSize:scale(18),color:Colors.semi_black,marginTop:scale(20),fontWeight:"600",}}>Dpay have the ability tovallow you to withdraw money from your account as well as adding money to your account
 </Text>
           

                </View>
                <StatusBar style="light" />
                 </View>
    )
}