import React from "react";
import { View ,Text ,useWindowDimensions, ActivityIndicator} from "react-native";
import { scale } from "react-native-size-matters";
import { Colors } from "./Colors";
const Loader = ({visible = false}) => {
    const {height,width} = useWindowDimensions();
    return (
        visible && <View style={[{position:"absolute",zIndex:10,backgroundColor:"rgba(0,0,0,0.5)" ,justifyContent:"center"},{height,width}]}>
            <View style={{height:scale(70),backgroundColor:Colors.white,marginHorizontal:scale(50),borderRadius:scale(5),flexDirection:"row",alignItems:"center",paddingHorizontal:scale(20)}}>
                <ActivityIndicator size={'large'} color={Colors.blue}/>
                <Text style={{marginLeft:scale(10),fontSize:16}}>Loading...</Text>
            </View>
        </View> 
    );
}

export default Loader;