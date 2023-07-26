import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export const Invite=()=> {
  const [buttonText, setButtonText] = useState('Send invitation');
  const [buttonStyle, setButtonStyle] = useState(styles.button);

  const handlePress = () => {
    setButtonText('Invited');
    setButtonStyle(styles.pressedButton);
  };

  return (
    <View>
    <View style={{flexDirection:"row", marginTop:20,justifyContent:"space-between"}}>
<View>
  <View style={{backgroundColor:"grey",width:100,height:100,borderRadius:200}}>
    
  </View>
  <Text> Heis</Text>
</View>
    <View >
      <TouchableOpacity style={buttonStyle} onPress={handlePress}>
        <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
    </View>

    <View style={{flexDirection:"row", marginTop:20,justifyContent:"space-between"}}>
<View>
  <View style={{backgroundColor:"grey",width:100,height:100,borderRadius:200}}>
    
  </View>
  <Text> me</Text>
</View>
    <View >
      <TouchableOpacity style={buttonStyle} onPress={handlePress}>
        <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  button: {backgroundColor:"blue",borderRadius:20, paddingHorizontal:17,paddingVertical:10},
  pressedButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 20,
  },
 
})