import React from "react";

import {scale} from "react-native-size-matters"
import {View, Text,TextInput} from "react-native";
import { Colors } from "./Colors";
import {MaterialCommunityIcons} from "@expo/vector-icons"
export const Input =({label,iconName,error,password,onFocus=() =>{}, ...props})=>{
    const [isFocused,setIsFocused] =React.useState(false);
    const [hidePassword,setHidePassword] =React.useState(password);

 return(
    <View style={{marginBottom:scale(8)}}>
       
        <View style={{backgroundColor:Colors.white,height:scale(50),flexDirection:"row",paddingHorizontal:scale(15),borderWidth:scale(1),borderRadius:scale(10),borderColor: error?Colors.red:isFocused ? Colors.blue:Colors.black}}>
            
            <TextInput secureTextEntry={hidePassword}
             autoCorrect={false}
            onFocus={() =>{onFocus(); 
            setIsFocused(true)}}
            onBlur ={()=>{
                setIsFocused(false);
            }} 
            style={{color:Colors.semi_black,flex:1,fontWeight:"400",fontSize:15}} {...props}/>
            <MaterialCommunityIcons name={iconName} style={{fontSize:scale(24),color:Colors.semi_black,alignSelf:"center"}}/>
            {password && (

              <MaterialCommunityIcons onPress={()=> setHidePassword(!hidePassword)} name={hidePassword ? "eye" :"eye-off"} style={{fontSize:scale(24),color:Colors.semi_black,alignSelf:"center"}}/>
            )}
        </View>
        {error && (

        <Text style={{color:Colors.red,fontWeight:"600",marginLeft:scale(5)}}>{error}</Text>
        )}
    </View>
 )
}
  