import React from "react";
import {View, Text ,Image,TextInput} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../Components/Colors";
import { scale } from "react-native-size-matters";
import { Button } from "../../Components/button";
import RadioForm from "react-native-simple-radio-button";


export const TypeUser =({navigation})=>{
    const [value, setValue] =React.useState(0);
    const items =[ {label :"Customer/Buyer", value:0},{label:"Seller/Vendor", value:1}]
    return(
        <View style={{backgroundColor:Colors.bg,height:"100%"}}>
            <View style={{backgroundColor:Colors.blue,height:"33%"}}>
                <View style={{flexDirection:"row",alignSelf:"center",marginTop:scale(50)}}>
                <Image source={require("../../Assets/logo.png.png")} style={{height:scale(30),width:scale(30)}}/>
                <Text style={{color:Colors.white,fontWeight:"800",fontSize:scale(20),marginLeft:scale(2)}}>D Pay</Text>
                </View>
                <View style={{alignSelf:"center",backgroundColor:Colors.white,borderRadius:scale(17),padding:scale(10),width:"90%",marginTop:scale(30)}}>
                    <Text style={{color:Colors.black,fontWeight:"bold",fontSize:scale(22),alignSelf:"center"}}>Type of User</Text>
                    
                    <View style={{width:scale(90),height:scale(90),borderRadius:scale(100),backgroundColor:Colors.circle,alignSelf:"center",marginTop:scale(28)}}>
                    <Image source={require("../../Assets/phon.jpg")} style={{width:scale(55),height:scale(75),alignSelf:"center",borderRadius:scale(7),position:"absolute"}}/>  
                    </View>
                    <View style={{marginVertical:scale(20),alignSelf:"center"}}>
                        <Text style={{color:Colors.grey,fontSize:scale(19),alignSelf:"center"}}>Please Choose how you will use the system as</Text>
                    </View>
                    <View style={{marginLeft:scale(10)}}>
                    <Text style={{color:Colors.grey,fontSize:scale(17),fontWeight:"800",marginBottom:scale(10)}}>I Agree that i am A </Text>
                    <RadioForm radio_props={items} initial={value} onPress ={(value) => setValue(value)} selectedButtonColor="#2D2D9B" selectedLabelColor="#2D2D9B"/>
                                           </View>
                    <View style={{marginBottom:scale(20)}}>
                        <Button title="Confirm" onPress={()=> navigation.navigate("Setpassword")}/>
                    </View>
                   

                </View>

            </View>
            <StatusBar style="light"/>

        </View>
    )
}