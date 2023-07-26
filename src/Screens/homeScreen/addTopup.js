import React,{useEffect} from "react";
import {View, Text ,Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../Components/Colors";
import { scale } from "react-native-size-matters";
import Loader from "../../Components/loader";
import { Button } from "../../Components/button";
import { TextInput } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { getItemAsync } from "expo-secure-store";

const apiUrl= 'https://d-pay-api.onrender.com/api/v1/accountBalance/topup';

export const AddTopup =({route,navigation})=>{
    const [loading,setLoading] =React.useState(false);
    const [token,setToken] = React.useState('');
    const [data,setData] = React.useState();
    const [verficationcode,setVerficationcode] = React.useState([])
   
    const dispatch = useDispatch();

    useEffect(() => {
    getItemAsync("StoreToken").then((data)=>{
        setToken(data)
    }).catch(err => console.log("cannot store",err))
    },[])

    console.log(token)
  

    const AddAmount = async() =>{
        try {
           const response = await axios.post(`${apiUrl}/data`,{data},{
               headers: {
                   'Content-Type': 'application/json',
                   'Accept': 'application/json',
                   'Authorization': `Bearer: ${token}`
               },
           });
           console.log('data added successfully:',response.data);
           
        } catch (error) {
           console.log('error adding data',error)
        }
     
   };
    return(
        
        <View style={{backgroundColor:Colors.bg,height:"100%"}}>
         
            <View style={{backgroundColor:Colors.blue,height:"33%"}}>
                
                <View style={{flexDirection:"row",alignSelf:"center",marginTop:scale(50)}}>
                <Image source={require("../../Assets/logo.png.png")} style={{height:scale(30),width:scale(30)}}/>
                <Text style={{color:Colors.white,fontWeight:"800",fontSize:scale(20),marginLeft:scale(2)}}>D Pay</Text>
                </View>
                <View style={{alignSelf:"center",backgroundColor:Colors.white,borderRadius:scale(17),padding:scale(10),width:"90%",marginTop:scale(30)}}>
                    <Text style={{color:Colors.black,fontWeight:"bold",fontSize:scale(22),alignSelf:"center"}}>Top up</Text>
                    
                    <View style={{width:scale(90),height:scale(90),borderRadius:scale(100),backgroundColor:Colors.circle,alignSelf:"center",marginTop:scale(28)}}>
                    <Image source={require("../../Assets/phon.jpg")} style={{width:scale(55),height:scale(75),alignSelf:"center",borderRadius:scale(7),position:"absolute"}}/>  
                    </View>
                    <View style={{marginVertical:scale(20),alignSelf:"center"}}>
                        <Text style={{color:Colors.grey,fontSize:scale(19),alignSelf:"center"}}>Add amount to wallet </Text>
                    </View>
                    <View style={{flexDirection:"row",alignSelf:"center"}}>
                         <TextInput style={{borderWidth:1,borderColor:'grey',padding:5,width:260,borderRadius:5, textAlign:'center'}} 
                         keyboardType="numeric"
                         value={data}
                         onChangeText={(text)=>setData(text)}
                         placeholder="Top up "/>
                        </View>
                    <View style={{marginBottom:scale(20)}}>
                        <Button title="Add amount" onPress={AddAmount}/>
                    </View>
                   

                </View>

            </View>
            <StatusBar style="light"/>

        </View>
    )
}