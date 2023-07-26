import React from "react";
import {View, Text ,Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../Components/Colors";
import { scale } from "react-native-size-matters";
import { Input } from "../../Components/input";
import { Button } from "../../Components/button";
import FlashMessage,{ showMessage } from "react-native-flash-message";
import Loader from "../../Components/loader";
export const SetPassword =({navigation,route})=>{
    const [data,setData] = React.useState(route.params)
    const [loading,setLoading] =React.useState(false);
    const [pwd,setPwd1] = React.useState('')
    const [pwd2,setPwd2] = React.useState('')
    console.log(data,'password')

    const handlerpassword =() =>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false); 

            if(pwd == '' || pwd2 == ''){
                alert("Please fill all field")
            }else if(pwd !== pwd2){
                alert("Please all must be matched")
            }else if(true){
                setData({...data,password:pwd})
            }
            console.log(data)
        
        },2000);
    }


    return(
        <View style={{backgroundColor:Colors.bg,height:"100%"}}>
            <View style={{backgroundColor:Colors.blue,height:"33%"}}>
                <Loader visible={loading}/>
                <View style={{flexDirection:"row",alignSelf:"center",marginTop:scale(50)}}>
                <Image source={require("../../Assets/logo.png.png")} style={{height:scale(30),width:scale(30)}}/>
                <Text style={{color:Colors.white,fontWeight:"800",fontSize:scale(20),marginLeft:scale(2)}}>D Pay</Text>
                </View>
                <View style={{alignSelf:"center",backgroundColor:Colors.white,borderRadius:scale(17),padding:scale(10),width:"90%",marginTop:scale(30)}}>
                    <Text style={{color:Colors.black,fontWeight:"bold",fontSize:scale(22),alignSelf:"center"}}>Set Password</Text>
                    
                    <View style={{width:scale(90),height:scale(90),borderRadius:scale(100),backgroundColor:Colors.circle,alignSelf:"center",marginTop:scale(28)}}>
                    <Image source={require("../../Assets/phon.jpg")} style={{width:scale(55),height:scale(75),alignSelf:"center",borderRadius:scale(7),position:"absolute"}}/>  
                    </View>
                    <View style={{marginVertical:scale(20),alignSelf:"center"}}>
                        <Text style={{color:Colors.grey,fontSize:scale(19),alignSelf:"center"}}>Set a strong Password to continue registration</Text>
                    </View>
                    <View style={{marginBottom:scale(9)}}>
                    <Input  placeholder="Enter strong password" password  onChangeText={text=>setPwd1(text)} />
                        <Input  placeholder="Confirm password" password onChangeText={text => setPwd2(text)}/>
                        <Button title="Set Password" onPress={handlerpassword}/>
                    </View>
                   

                </View>

            </View>
            <StatusBar style="light"/>

        </View>
    )
}