import React from "react";
import {TextInput, View} from "react-native";
import {scale} from "react-native-size-matters";
import { Colors } from "./Colors";
export const Verify =({error,onFocus=() =>{}, ...props})=>{
    const [isFocused,setIsFocused] =React.useState(false);
    return(
        <View>
        <TextInput  autoCorrect={false}
        onFocus={() =>{onFocus(); 
        setIsFocused(true)}}
        onBlur ={()=>{
            setIsFocused(false);
        }} 
         style={{width:scale(35),borderWidth:scale(2),marginRight:scale(10),borderRadius:scale(4),fontSize:scale(20),borderColor: error?Colors.red:isFocused ? Colors.blue:Colors.black}}/>
         {error && (

<Text style={{color:Colors.red,fontWeight:"600",marginLeft:scale(5)}}>{error}</Text>
)}
    </View>
    )
}

