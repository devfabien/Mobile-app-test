import React,{useEffect} from "react";
import {View, Text ,Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../Components/Colors";
import { scale } from "react-native-size-matters";
import Loader from "../../Components/loader";
import { Button } from "../../Components/button";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import FlashMessage,{ showMessage } from "react-native-flash-message";
import { getItemAsync } from "expo-secure-store";

export const VerificationScreen =({route,navigation})=>{
    const [loading,setLoading] =React.useState(false);
    const [token,setToken] = React.useState('');
    const [data1,setData1] = React.useState(route.params)
    const [verficationcode,setVerficationcode] = React.useState([])

    // console.log(data)
    useEffect(() => {
        getItemAsync("StoreToken").then((data)=>{
            setToken(data)
        }).catch(err => console.log(err))
        
    }, []) 

    const verfycode = async () =>{

        const data={
                "userOTP":verficationcode
        }
        try{
            console.log(token)
            console.log(verficationcode)
            const response = await axios({
                method:'post',
                url:'https://d-pay-api.onrender.com/api/v1/auth/verify-otp',data:data,               
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${token}`
                }

            })
            if(response.status == 200){
                navigation.navigate('bottomnavigation')
            }
            console.log(response.data)
        }catch(err){
            console.log(err.response.data)
            alert(err.response.data.error)
        }
    }


    // const Verifi =() =>{
    //     setLoading(true);
    //     setTimeout(()=>{
    //         setLoading(false); 

    //         if(verficationcode == ''){
    //             return(
    //             alert("Please enter the code")
    //             )
    //         }else if(verficationcode = data.userOTP.AuthorizationCode){
    //             verfycode()
    //             setTimeout(()=>{
    //                 navigation.navigate('Login')
    //             },2000
    //             )
    //         }
        
    //     },2000);
    // }
    return(
        <View style={{backgroundColor:Colors.bg,height:"100%"}}>
            <FlashMessage />
            <View style={{backgroundColor:Colors.blue,height:"33%"}}>
                <Loader visible={loading}/>
                <View style={{flexDirection:"row",alignSelf:"center",marginTop:scale(50)}}>
                <Image source={require("../../Assets/logo.png.png")} style={{height:scale(30),width:scale(30)}}/>
                <Text style={{color:Colors.white,fontWeight:"800",fontSize:scale(20),marginLeft:scale(2)}}>D Pay</Text>
                </View>
                <View style={{alignSelf:"center",backgroundColor:Colors.white,borderRadius:scale(17),padding:scale(10),width:"90%",marginTop:scale(30)}}>
                    <Text style={{color:Colors.black,fontWeight:"bold",fontSize:scale(22),alignSelf:"center"}}>Verification</Text>
                    
                    <View style={{width:scale(90),height:scale(90),borderRadius:scale(100),backgroundColor:Colors.circle,alignSelf:"center",marginTop:scale(28)}}>
                    <Image source={require("../../Assets/phon.jpg")} style={{width:scale(55),height:scale(75),alignSelf:"center",borderRadius:scale(7),position:"absolute"}}/>  
                    </View>
                    <View style={{marginVertical:scale(20),alignSelf:"center"}}>
                        <Text style={{color:Colors.grey,fontSize:scale(19),alignSelf:"center"}}>Please enter the code that was sent to your phone number</Text>
                    </View>
                    <View style={{flexDirection:"row",alignSelf:"center"}}>
                         <TextInput style={{borderWidth:1,borderColor:'grey',padding:5,width:260,borderRadius:5, textAlign:'center'}} 
                         keyboardType="numeric"
                         value={verficationcode}
                         onChangeText={(text)=>setVerficationcode(text)}
                         placeholder="XXXXXX"/>
                        </View>
                    <View style={{marginBottom:scale(20)}}>
                        <Button title="Verification" onPress={verfycode}/>
                    </View>
                   

                </View>

            </View>
            <StatusBar style="light"/>

        </View>
    )
}