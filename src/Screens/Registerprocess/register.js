import React from "react";
import {View, Text ,Image,Keyboard, Alert} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../Components/Colors";
import { scale } from "react-native-size-matters";
import { Input } from "../../Components/input";
import { Button } from "../../Components/button";
import Loader from "../../Components/loader";
import FlashMessage,{showMessage} from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";
import { SiginUp } from "../../feather/authentication";
import { ScrollView } from "react-native";


export const RegisterScreen =({navigation})=>{
    const err = useSelector((state)=>state.storeAuthentication.error) 
    console.log(err)
    const [errors,setErrors] =React.useState({});
    const [loading,setLoading] =React.useState(false);
    const [name,setName] = React.useState('')
    const [phone,setPhone] = React.useState('')
    const [pwd,setPwd] = React.useState('')
    const dispatch = useDispatch()
    const [email,setEmail] = React.useState('')
    const Register =() =>{ 
        setLoading(true);
        setTimeout(()=>{
            setLoading(false); 
            const data = {
                "name":name,
                "email":email, 
                "password":pwd,
                "phone":phone
            }
        if(data.name == '' || data.email == '' || data.phone == '',data.password == ''){
            return(
                showMessage({
                    message: "Please fill all the fields",
                    type: "danger",
                    duration: 2000,
                    position: "top",
                })
            )}
        // else if(err){
        //     return(
        //         showMessage({
        //             message: err,
        //             type: "danger",
        //             duration: 2000,
        //             position: "top",
        //         })
        //     )
        // }
        else if(data.email != '' || data.name != '' || data.phone != ''){
            console.log(data)
            dispatch(SiginUp(data))
        }
        },2000);
    }
    return(
        <View style={{backgroundColor:Colors.bg,height:"100%"}}>
            <FlashMessage />
            <ScrollView>
            <View style={{backgroundColor:Colors.blue,height:"33%"}}>
                <Loader visible={loading}/>
                <View style={{flexDirection:"row",alignSelf:"center",marginTop:scale(50)}}>
                <Image source={require("../../Assets/logo.png.png")} style={{height:scale(30),width:scale(30)}}/>
                <Text style={{color:Colors.white,fontWeight:"800",fontSize:scale(20),marginLeft:scale(2)}}>D Pay</Text>
                </View>
                <View style={{alignSelf:"center",backgroundColor:Colors.white,borderRadius:scale(17),padding:scale(10),width:"90%",marginTop:scale(30)}}>
                    <Text style={{color:Colors.black,fontWeight:"bold",fontSize:scale(22),alignSelf:"center"}}>Register</Text>
                    
                    <View style={{width:scale(90),height:scale(90),borderRadius:scale(100),backgroundColor:Colors.circle,alignSelf:"center",marginTop:scale(28)}}>
                    <Image source={require("../../Assets/phon.jpg")} style={{width:scale(55),height:scale(75),alignSelf:"center",borderRadius:scale(7),position:"absolute"}}/>  
                    </View>
                    <View style={{marginVertical:scale(20),alignSelf:"center"}}>
                        <Text style={{color:Colors.grey,fontSize:scale(19),alignSelf:"center"}}>Please enter your Email to continue to register</Text>
                    </View>
                    <View>
                        <Input  placeholder="firstname , lastname" iconName="face-woman-profile" keyboardType="default" onChangeText={text => setName(text)}   />
                        <Input  placeholder="Dpay@gmail.com" iconName="email" keyboardType="email-address" onChangeText={text => setEmail(text)}/>
                        <Input  placeholder="+250 79" iconName="phone" keyboardType="numeric" onChangeText={text => setPhone(text)}/>
                        <Input  placeholder="Enter strong password" password  onChangeText={text=>setPwd(text)} />
                        {err !==""?(
                            <Text style={{color:Colors.red,alignSelf:"center"}}>{err}</Text>
                        ):null}
                        <Button title="Register" onPress={Register}/>
                    </View>
                    <View style={{flexDirection:"row",marginTop:scale(3),alignSelf:"center"}}>
                    <Text style={{color:Colors.grey,fontSize:scale(17),fontWeight:"800"}}>Already have an account </Text>
                    <Text onPress={()=> navigation.navigate('Login')} style={{color:Colors.blue,fontSize:scale(17),textDecorationLine:"underline",fontWeight:"800"}}>Sign in</Text>
                    </View>

                </View>

            </View>
            </ScrollView>
            <StatusBar style="light" />
        </View>
    )
}
