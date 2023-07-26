import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, RefreshControl, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../Components/Colors";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useSelector, useDispatch } from "react-redux";
import { scale } from "react-native-size-matters";
import { createIconSetFromFontello, MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { getItemAsync } from "expo-secure-store";



export const PayScan = ({ navigation }) => {

    const [dataset, setDataset] = useState([])
    
    const [token,setToken] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
    getItemAsync("StoreToken").then((data)=>{
        setToken(data)
    }).catch(err => console.log(err))
    },[])

    console.log(token)



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
                        
                            <Text style={{ color: Colors.white, fontWeight: "800", fontSize: scale(20), alignSelf:"center" }}>Pay scanner</Text>
                       
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
                                    {scanned && <TouchableOpacity style={{ alignSelf: "center", backgroundColor: Colors.red, borderRadius: scale(15), justifyContent: "center", width: "40%", height: scale(35), alignItems: "center" }} onPress={() => setScanned(false)}><Text style={{ color: Colors.white, fontWeight: "600" }}>Rescan</Text></TouchableOpacity>}
                                    {scanned && <TouchableOpacity style={{ alignSelf: "center", backgroundColor: Colors.blue, borderRadius: scale(15), justifyContent: "center", width: "40%", height: scale(35), alignItems: "center" }}  onPressIn={addCart} ><Text style={{ color: Colors.white, fontWeight: "600" }}>Confirm</Text></TouchableOpacity>}
                                </View>
                            </View>
                        }
                    </View>
                   
                
                   
                </View>
                </ScrollView>
            <StatusBar style="light" />
        </View>

    )
}