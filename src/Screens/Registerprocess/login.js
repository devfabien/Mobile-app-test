import React from "react";
import {View, Text ,Image, ScrollView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../Components/Colors";
import {FontAwesome} from "@expo/vector-icons";
import { scale } from "react-native-size-matters";
import { Input } from "../../Components/input";
import { Button } from "../../Components/button";
import Loader from "../../Components/loader";
import FlashMessage,{showMessage} from "react-native-flash-message";
import { Login } from "../../feather/authentication";
import { useDispatch, useSelector } from "react-redux";


export const LoginScreen =({navigation})=>{
    const err = useSelector(state =>state.storeAuthentication.error)
    const [loading,setLoading] =React.useState(false);
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('') 
    const [move,setMove] = React.useState(false)
    const dispatch = useDispatch()
    // const {navigate} = useNavigation()

    const LoginCredential =  () =>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false); 
            const data = {
                "email":email, 
                "password":password,
            }
         

            if(data.email == '',data.password == ''){
                return(
                    showMessage({
                        message: "Please fill all the fields",
                        type: "danger",
                        duration: 2000,
                        position: "top",
                    })
                )
            }
            else if(data != null){
                    console.log(data)
                    dispatch(Login(data))

                }
    
            },2000)}

    return(
        <View style={{backgroundColor:Colors.bg,height:"100%"}}>
            <FlashMessage />
            <ScrollView>
            <View style={{backgroundColor:Colors.blue,height:"33%"}}>

                <Loader visible={loading} />
                <View style={{flexDirection:"row",alignSelf:"center",marginTop:scale(50)}}>
                <Image source={require("../../Assets/logo.png.png")} style={{height:scale(30),width:scale(30)}}/>
                <Text style={{color:Colors.white,fontWeight:"800",fontSize:scale(20),marginLeft:scale(2)}}>D Pay</Text>
                </View>
                <View style={{alignSelf:"center",backgroundColor:Colors.white,borderRadius:scale(17),padding:scale(10),width:"90%",marginTop:scale(30)}}>
                    <Text style={{color:Colors.black,fontWeight:"bold",fontSize:scale(22),alignSelf:"center"}}>Login</Text>
                    
                    <View style={{width:scale(90),height:scale(90),borderRadius:scale(100),backgroundColor:Colors.circle,alignSelf:"center",marginTop:scale(28)}}>
                    <Image source={require("../../Assets/phon.jpg")} style={{width:scale(55),height:scale(75),alignSelf:"center",borderRadius:scale(7),position:"absolute"}}/>  
                    </View>
                    <View style={{marginVertical:scale(20),alignSelf:"center"}}>
                        <Text style={{color:Colors.grey,fontSize:scale(19),alignSelf:"center"}}>Type your email and password to continue</Text>
                    </View>
                    <View>
                        <Input  placeholder="input email" iconName="email" onChangeText={(text)=>{setEmail(text)}}/>
                        <Input  placeholder="input password" password onChangeText={(text)=>{setPassword(text)}}/>
                        {err !==""?(
                            <Text style={{color:Colors.red,alignSelf:"center"}}>{err}</Text>
                        ):null}
                        <Button title="Sign in"  onPress={LoginCredential}/>
                    </View>
                    <Text style={{color:Colors.grey,alignSelf:"center",marginTop:scale(10),fontSize:scale(17),textDecorationLine:"underline",fontWeight:"800"}}>Forgot Password</Text>

                </View>

            </View>
            </ScrollView>
            <StatusBar style="light"/>

        </View>
    )
}