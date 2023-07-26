import React from "react";
import {View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../Components/Colors";
import {FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import { scale } from "react-native-size-matters";

export const SettingScreen =()=>{
    return(
        <View style={{backgroundColor:Colors.bg,height:"100%"}}>
           
            <View style={{backgroundColor:Colors.blue,height:"18%"}}>
             
                <View style={{flexDirection:"row",alignSelf:"center",marginTop:scale(50)}}>
                  
                <Text style={{color:Colors.white,fontWeight:"800",fontSize:scale(20),marginLeft:scale(2),width:"30%"}}>Settings</Text>
               
                </View>
             <View style={{marginVertical:scale(25),padding:scale(10)}}>
                <View style={{alignSelf:"center",borderRadius:scale(7),backgroundColor:Colors.white,paddingVertical:scale(8),paddingHorizontal:scale(14),elevation:20,flexDirection:"row",marginVertical:scale(5),width:"90%"}}>
                    <Ionicons name="notifications" size={scale(26)} color="#2D2D9B"/>
                    <Text style={{marginLeft:scale(5),color:Colors.black,fontWeight:"700",fontSize:scale(16)}}>Notifications</Text>
                </View>
                <View style={{alignSelf:"center",borderRadius:scale(7),backgroundColor:Colors.white,paddingVertical:scale(8),paddingHorizontal:scale(14),elevation:20,flexDirection:"row",marginVertical:scale(5),width:"90%"}}>
                    <FontAwesome name="paper-plane" size={scale(24)} color="#2D2D9B"/>
                    <Text style={{marginLeft:scale(5),color:Colors.black,fontWeight:"700",fontSize:scale(16)}}>Fast Payment</Text>
                </View>
                <View style={{alignSelf:"center",borderRadius:scale(7),backgroundColor:Colors.white,paddingVertical:scale(8),paddingHorizontal:scale(14),elevation:20,flexDirection:"row",marginVertical:scale(5),width:"90%"}}>
                    <FontAwesome5 name="language" size={scale(26)} color="#2D2D9B"/>
                    <Text style={{marginLeft:scale(5),color:Colors.black,fontWeight:"700",fontSize:scale(16)}}>Languages</Text>
                </View>
                <View style={{alignSelf:"center",borderRadius:scale(7),backgroundColor:Colors.white,paddingVertical:scale(8),paddingHorizontal:scale(14),elevation:20,flexDirection:"row",marginVertical:scale(5),width:"90%"}}>
                    <FontAwesome name="question-circle" size={scale(26)} color="#2D2D9B"/>
                    <Text style={{marginLeft:scale(5),color:Colors.black,fontWeight:"700",fontSize:scale(16)}}>FAQ</Text>
                </View>
                <View style={{alignSelf:"center",borderRadius:scale(7),backgroundColor:Colors.white,paddingVertical:scale(8),paddingHorizontal:scale(14),elevation:20,flexDirection:"row",marginVertical:scale(5),width:"90%"}}>
                    <FontAwesome name="exclamation-circle" size={scale(26)} color="#2D2D9B"/>
                    <Text style={{marginLeft:scale(5),color:Colors.black,fontWeight:"700",fontSize:scale(16)}}>Help</Text>
                </View>
                </View>
             
               

            </View>
            <StatusBar style="light"/>

        </View>
    )
}