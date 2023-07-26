import React,{useState} from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const History = () => {
    return(
      <SafeAreaView>
        <View style={{
            backgroundColor:'darkblue',
            width:'100%',
            height:'20%',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            borderRadius:6,
        }}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:40}} >History</Text>
        </View>
        {fetchdata.map((item,index)=>{
            return(

                <View 
                key={index}
                style={{
                    flexDirection:'row',
                    borderWidth:1,
                    padding:10,
                    margin:10,
                    justifyContent:'space-between',
                    borderRadius:10,
                    backgroundColor:'#ffffff',

                }}>
                    <View style={{marginHorizontal:3}}>
                       <Text>{item.name}</Text> 
                    </View>
                    <View style={{marginHorizontal:3}}>
                       <Text>{item.offer}</Text> 
                    </View>
                    <View style={{marginHorizontal:3}}>
                       <Text>{item.price}</Text> 
                    </View>
                </View>
            )
        })}
        
        <StatusBar style='auto'/>
        </SafeAreaView>
    )
}

export default History;


const fetchdata = 
[{
	"name": "hero Product",
	"detail": "Lorem ipsum dolor sit amet",
	"price": "99",
	"offer": "OMG",
	"image": "http://placehold.it/940x300/999/CCC"
},{
	"name": "OMG",
	"detail": "Lorem ipsum dolor sit amet",
	"price": "$99",
	"offer": " Derp corp.",
	"image": "http://placehold.it/300x300/999/CCC"
},{
	"name": "Oil fliat",
	"detail": "Lorem ipsum dolor sit amet",
	"price": "99",
	"offer": "BOGOF",
	"image": "http://placehold.it/300x300/999/CCC"
},{
	"name": "Electricity",
	"detail": "Lorem ipsum dolor sit amet",
	"price": "$100",
    "offer": "No srsly GTFO",
	"image": "http://placehold.it/300x300/999/CCC"
},{
	"name": "Maize flour",
	"detail": "Lorem ipsum dolor sit amet",
	"price": "$9",
	"offer": "No srsly GTFO",
	"image": "http://placehold.it/300x300/999/CCC"
},{
	"name": "Computer ",
	"detail": "Lorem ipsum dolor sit amet",
	"price": "$699",
    "offer":"Tech",
	"image": "http://placehold.it/300x300/999/CCC"
},{
	"name": "Wifi Connect",
	"detail": "Lorem ipsum dolor sit amet",
	"price": "$20",
	"info": "This is the latest and greatest product from Derp corp.",
	"offer": "info with offer",
	"image": "http://placehold.it/300x300/999/CCC"
}]