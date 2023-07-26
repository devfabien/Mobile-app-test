import React from "react";
import {View, Text ,Image,ScrollView,TouchableOpacity} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../Components/Colors";
import {FontAwesome, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import { scale } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { Logout } from "../feather/authentication";


export const ProfileScreen =({navigation})=>{
    const dispatch = useDispatch()
    const logout = () =>{
            dispatch(Logout())
            navigation.navigate("Login")
    }
    return(
        <View style={{backgroundColor:Colors.bg,height:"100%"}}>
            <ScrollView>
            <View style={{backgroundColor:Colors.blue,height:"20%"}}>
             
                <View style={{flexDirection:"row",alignSelf:"center",marginTop:scale(50),justifyContent:"space-between"}}>
                    <Text style={{width:"28%"}}> </Text>
                <Text style={{color:Colors.white,fontWeight:"800",fontSize:scale(20),marginLeft:scale(2),width:"30%"}}>Profile</Text>
                <Ionicons name="notifications-outline" size={25} color="white"style={{marginLeft:scale(45)}}/>
                </View>
                <View style={{alignSelf:"center",backgroundColor:Colors.white,borderRadius:scale(17),padding:scale(10),width:"90%",margin:scale(30),elevation:scale(20)}}>
                   
                    
                    
                    <Image source={require("../Assets/og.jpg")} style={{width:scale(50),height:scale(50),alignSelf:"center",borderRadius:scale(10)}}/>  
                   
                    <View style={{marginTop:scale(5),alignSelf:"center"}}>
                    <Text style={{fontSize:scale(17),fontWeight:"400",color:Colors.black}}>Ishimwe Fabien </Text>
                    <Text style={{color:Colors.semi_black,fontSize:scale(16),fontWeight:"400"}}>ish001fabi@gmail.com </Text> 
                    </View>
                    <Text style={{textDecorationLine:"underline",alignSelf:"center"}}>                                                                           </Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:scale(10),width:"90%"}}>
                        <View style={{borderColor:Colors.black,borderRadius:scale(4),width:"45%",flexDirection:"row",borderWidth:scale(1),marginLeft:scale(15),paddingLeft:scale(6)}}>
                            <MaterialCommunityIcons name="qrcode-scan" size={24} color="black"/>
                            <Text style={{color:Colors.black,fontWeight:"700",marginLeft:scale(5)}}>QRcode</Text>
                        </View>
                        <View style={{borderColor:Colors.black,borderRadius:scale(4),width:"45%",flexDirection:"row",borderWidth:scale(1),paddingLeft:scale(6)}}>
                        <MaterialCommunityIcons name="barcode-scan" size={24} color="black"/>
                        <Text style={{color:Colors.black,fontWeight:"700",marginLeft:scale(5)}}>BarCode</Text>
                        </View>
                    </View>

                </View>
                
                <View style={{alignSelf:"center",borderRadius:scale(7),backgroundColor:Colors.white,paddingVertical:scale(8),paddingHorizontal:scale(14),elevation:20,flexDirection:"row",marginVertical:scale(5),width:"90%"}}>
                    <FontAwesome name="user" size={scale(27)} color="#2D2D9B"style={{marginLeft:scale(6)}}/>
                    <Text style={{marginLeft:scale(10),color:Colors.black,fontWeight:"700",fontSize:scale(16)}}>Change Profile</Text>
                </View>
                <View style={{alignSelf:"center",borderRadius:scale(7),backgroundColor:Colors.white,paddingVertical:scale(8),paddingHorizontal:scale(14),elevation:20,flexDirection:"row",marginVertical:scale(5),width:"90%"}}>
                    <FontAwesome name="credit-card-alt" size={scale(24)} color="#2D2D9B"/>
                    <Text style={{marginLeft:scale(5),color:Colors.black,fontWeight:"700",fontSize:scale(16)}}>My Card</Text>
                </View>
                <View style={{alignSelf:"center",borderRadius:scale(7),backgroundColor:Colors.white,paddingVertical:scale(8),paddingHorizontal:scale(14),elevation:20,flexDirection:"row",marginVertical:scale(5),width:"90%"}}>
                    <MaterialCommunityIcons name="shield-check" size={scale(26)} color="#2D2D9B"/>
                    <Text style={{marginLeft:scale(5),color:Colors.black,fontWeight:"700",fontSize:scale(16)}}>Change Security Code</Text>
                </View>
                <TouchableOpacity>
                <View style={{alignSelf:"center",borderRadius:scale(7),backgroundColor:Colors.white,paddingVertical:scale(8),paddingHorizontal:scale(14),elevation:20,flexDirection:"row",marginVertical:scale(5),width:"90%"}}>
                    <Ionicons name="settings" size={scale(26)} color="#2D2D9B"/>
                    <Text style={{marginLeft:scale(5),color:Colors.black,fontWeight:"700",fontSize:scale(16)}}>Settings</Text>
                </View>
                </TouchableOpacity>
                <View style={{alignSelf:"center",borderRadius:scale(7),backgroundColor:Colors.white,paddingVertical:scale(8),paddingHorizontal:scale(14),elevation:20,flexDirection:"row",marginVertical:scale(5),width:"90%"}}>
                    <FontAwesome name="file-text" size={scale(26)} color="#2D2D9B"/>
                    <Text style={{marginLeft:scale(5),color:Colors.black,fontWeight:"700",fontSize:scale(16)}}>Terms of Services</Text>
                </View>
                <TouchableOpacity style={{marginLeft:scale(15),backgroundColor:Colors.red,borderRadius:scale(7),justifyContent:"center",width:"90%",height:scale(50),alignItems:"center",marginVertical:scale(20)}} onPress={logout} >
            <Text style={{color:Colors.white,fontWeight:"bold",fontSize:20}}>Sign out</Text>
        </TouchableOpacity>
               

            </View>
            <StatusBar style="light"/>
</ScrollView>
        </View>
    )
}