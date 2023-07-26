import React from "react";
import { StatusBar } from 'expo-status-bar';
import {View,Text,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../Components/Colors"
import { scale } from "react-native-size-matters";

export const Splashscreen =({navigation}) =>{
    return(
        
        <View style={{backgroundColor:Colors.blue,height:"100%"}}>
          <View style={{justifyContent:"center",alignItems:"center", flex:1,flexDirection:"row"}} >
            <Image source={require("../../Assets/logo.png.png")} style={{width:scale(90),height:scale(90)}} />
            <Text style={{fontSize: scale(25),fontWeight:"bold",marginLeft :scale(10), color:Colors.white}}> D Pay</Text>
          </View>
          <StatusBar style="light" />
        </View>
       
    )
}