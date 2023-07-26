import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {scale} from "react-native-size-matters";
import { Colors } from "./Colors";
export const Button =({title, onPress =()=>{}})=>{
    return(
        <TouchableOpacity onPress={onPress} style={{backgroundColor:Colors.blue,borderRadius:scale(7),justifyContent:"center",width:"100%",height:scale(50),alignItems:"center",marginTop:scale(20)}} >
            <Text style={{color:Colors.white,fontWeight:"bold",fontSize:20}}>{title}</Text>
        </TouchableOpacity>
    ) 
}