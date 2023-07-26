import React from "react";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from "react-native";
import { View ,Text ,Image } from "react-native";
import { Colors } from "../../Components/Colors";
import {scale} from "react-native-size-matters"
import { useNavigation } from "@react-navigation/native";

export const SplashE =() =>{
    const {navigate} = useNavigation()
    return(
       
            <View style={{backgroundColor:Colors.blue,height:"100%",paddingVertical:scale(38),paddingHorizontal:scale(15)}}>
                <View style={{flexDirection:"row",alignSelf:"center",marginVertical:scale(15)}}>
                    
                <Image source={require("../../Assets/logo.png.png")} style={{width:scale(40),height:scale(40)}} />
                <Text style={{color:Colors.white,fontWeight:"800",marginTop:scale(7),fontSize:scale(19)}}>D Pay</Text>
                </View>
                
                <Image source={require("../../Assets/sd.jpg")} style={{borderRadius:scale(100),width :scale(150),height:scale(150),marginBottom:scale(30),alignSelf:"center"}} />
                <View>
                    <Text style={{alignSelf:"center",fontSize:scale(32),fontWeight:"bold",color:Colors.white,marginVertical:scale(10)}}>Welcome in D pay   </Text>
                    <View style={{width:"95%"}}>
                    <Text numberOfLines={5} style={{fontSize:scale(18),color:Colors.white,marginTop:scale(20),textAlign:"center"}}>Easy and fast shopping awaits for you complete few steps ahead to unlock the new version of your life.  </Text>
</View>
                </View>
                <TouchableOpacity onPress={()=> navigate("Login")} style={{backgroundColor:Colors.orange,paddingVertical:scale(10),paddingHorizontal:scale(15),alignSelf:"center",borderRadius:scale(10),width:"90%",marginTop:scale(50)}}>
                    <Text style={{color:Colors.white,fontWeight:"700",alignSelf:"center",fontSize:20}}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigate("Register")} style={{backgroundColor:Colors.blue,paddingVertical:scale(10),paddingHorizontal:scale(15),alignSelf:"center",borderRadius:scale(10),borderWidth:scale(1),borderColor:Colors.white,width:"90%",marginTop:scale(30)}}>
                    <Text style={{color:Colors.white,fontWeight:"700",alignSelf:"center",fontSize:20}}>Register now</Text>
                </TouchableOpacity>
                <StatusBar style="light" />
                 </View>
    )
}