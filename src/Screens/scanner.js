import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, RefreshControl, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../Components/Colors";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useSelector, useDispatch } from "react-redux";
import { scale } from "react-native-size-matters";
import { createIconSetFromFontello, MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { getItemAsync } from "expo-secure-store";




export const ScannerScreen = ({ navigation }) => {

    const [dataset, setDataset] = useState([])
    const [storesum,setStoresum] = useState([])
    const [token,setToken] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
    getItemAsync("StoreToken").then((data)=>{
        setToken(data)
    }).catch(err => console.log(err))
    },[])

    console.log(token)

const generatedtotal = () =>{
     axios({
        method: 'POST',
        url: 'http://192.168.43.101:8000/api/v1/products',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Barear: ${token}`
        },
     })


    let sum = 0
    for(let i=0; i < dataset.length; i++){
            sum = sum + dataset[i].price
            
        }
        console.log("total" ,sum)
    setStoresum(sum)
    
    
}

    const removeItem = (i) => {
        setDataset(dataset.filter((item, index) => index!== i))
    }
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('');
    const askForCameraPermission = () => {
        (async (e) => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == 'granted')
            if (status == 'granted') {
                setText(e.data)
            }
        })()
    }


    const addCart = () => {

        const convertdata = JSON.parse(text)
        generatedtotal()
        setDataset([...dataset, {
            "name": convertdata.name,
            "price": convertdata.price,

        }])
    }
    // Request camera permission
    useEffect(() => {
        askForCameraPermission();
    }, []);
    //What happens when we scan the barcode or qr code
    const handleBarcodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data);
    }
    //check permissions and return the screen
    if (hasPermission == null) {
        return (
            <View style={{ alignSelf: "center", marginVertical: scale(40) }}>
                <Text>Requesting Camera Permission</Text>
            </View>
        )
    }
    if (hasPermission === false) {
        return (
            <View style={{ alignSelf: "center", marginTop: scale(60) }}>
                <Text>No Access to Camera </Text>
                <TouchableOpacity onPress={() => askForCameraPermission()} style={{ backgroundColor: Colors.blue, borderRadius: scale(7), justifyContent: "center", width: "80%", height: scale(50), alignItems: "center", marginTop: scale(20), alignSelf: "center", padding: scale(10) }}><Text>Allow camera</Text></TouchableOpacity>
            </View>
        )
    }


    return (
        <View style={{backgroundColor: Colors.bg, height: "100%" }}>
            <ScrollView

                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>

                <View style={{ backgroundColor: Colors.blue, height: "18%" }}>

                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: scale(50), justifyContent: "space-evenly" }}>
                        <View style={{ marginLeft: scale(80) }}>
                            <Text style={{ color: Colors.white, fontWeight: "800", fontSize: scale(20), marginLeft: scale(2) }}>Scanner</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('cart')} >
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: Colors.white, fontWeight: "700", marginTop: scale(6), marginLeft: scale(50) }} >My cart</Text>
                                <MaterialCommunityIcons name="cart-variant" size={34} color={Colors.white} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, backgroundColor: Colors.circle, }}>
                        <View style={{ marginVertical: scale(20), alignSelf: 'center', padding: scale(10), width: scale(670), height: scale(350), alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
                                style={{ width: scale(500), height: scale(500), borderRadius: scale(20) }} />

                        </View>
                        {scanned &&
                            <View style={{ backgroundColor: Colors.white, elevation: scale(15), alignSelf: "center", width: "80%", padding: scale(10), borderRadius: scale(15) }}>
                                <Text style={{ fontSize: 17, fontWeight: "700", alignSelf: "center" }}>{text}</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: scale(20) }}>
                                    {scanned && <TouchableOpacity style={{ alignSelf: "center", backgroundColor: Colors.red, borderRadius: scale(15), justifyContent: "center", width: "40%", height: scale(35), alignItems: "center" }} onPress={() => setScanned(false)}><Text style={{ color: Colors.white, fontWeight: "600" }}>Cancel</Text></TouchableOpacity>}
                                    {scanned && <TouchableOpacity style={{ alignSelf: "center", backgroundColor: Colors.blue, borderRadius: scale(15), justifyContent: "center", width: "40%", height: scale(35), alignItems: "center" }} onPressOut={() => setScanned(false)} onPressIn={addCart} ><Text style={{ color: Colors.white, fontWeight: "600" }}>Add to cart</Text></TouchableOpacity>}
                                </View>
                            </View>
                        }
                    </View>
                    <View>
                        {
                            dataset.map((item, index) => {
                                return (
<>
                                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-around',padding:5 }}>
                                        <Text>{index + 1}</Text>
                                        <Text>{item.name} </Text>
                                        <Text>{item.price} </Text>
                                        {
                                            dataset &&
                                            <Text style={{
                                                borderColor:'#000000',
                                                backgroundColor:'red',
                                                padding:6,
                                                color:'white',
                                                fontWeight:'bold',
                                                borderRadius:10,
                                                width:scale(70),
                                                height:scale(30),
                                                alignSelf:'center'
                                            }} onPress={()=>removeItem(index)}>remove</Text>
                                        }

                                    </View>   
                                    </>
                                )
                            })
                        }
                        

                    </View>
                    <Button title="total" onPress={generatedtotal}></Button> 
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: scale(6),
                        marginBottom: scale(20),
                        marginLeft: scale(20),
                    }}>
                         <Text style={{
                            color: 'black',
                            fontWeight: "700",
                            fontSize: scale(20),
                            marginLeft: scale(2)
                         }}>Total:</Text>
                        <Text style={{
                            color: 'black',
                            fontWeight: "700",
                            fontSize: scale(20),
                            marginRight: scale(2)
                        }}
                        >{storesum}</Text></View>
                    {
                        storesum == ''?(
                            <View><Text></Text></View>
                            
                        ):(
                            <Button title="Generate QR code" onPress={()=>{navigation.navigate('genetorqr',{storesum,dataset})}}></Button> 
                        )
                    }
                </View>
                </ScrollView>
            <StatusBar style="light" />
        </View>

    )
}