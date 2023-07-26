import React, { useState} from "react";
import { View, Text, TouchableOpacity, ScrollView, RefreshControl, TextInput,Button } from "react-native";
import { StatusBar } from "expo-status-bar";







export const AddGroup = ({ navigation }) => {

    const [groups, setgroups] = useState([]);
    const [groupInput, setgroupInput] = useState('');
  
    const handleAddgroup = () => {
      if (groupInput.length > 0) {
        setgroups([...groups, { id: groups.length + 1, text: groupInput }]);
        setgroupInput('');
      }
    };
  
    const handleDeletegroup = (id) => {
      const updatedgroups = groups.filter((group) => group.id !== id);
      setgroups(updatedgroups);
    };

    return (
        <View >
            <ScrollView

                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>

                <View>

                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 50, justifyContent: "space-evenly" }}>
                        <View style={{ marginLeft: 80 }}>
                            <Text style={{ color: "black", fontWeight: "800", fontSize: 20, textAlign:"center" }}>add group</Text>
                        </View>
                    </View>

                    
                            
                                
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }} >
                        <TextInput style={{width:"80%",height:30,borderColor:"black",borderWidth:1}} value={groupInput}
          onChangeText={(text) => setgroupInput(text)}/>
                                  
                                    <TouchableOpacity style={{ alignSelf: "center", backgroundColor: "blue", borderRadius: 15, justifyContent: "center", width: "40%", height: 35, alignItems: "center" }} onPress={handleAddgroup}><Text style={{ color: "black", fontWeight: "600" }}>create</Text></TouchableOpacity>
                                        
                    </View>
                    <View style={{textAlign:"center",paddingHorizontal:20}}>
                    {groups.map((group) => (
          <View key={group.id} style={{elevation:20,marginVertical:7}}>
            <Text >{group.text}</Text>
            <TouchableOpacity onPress={() => handleDeletegroup(group.id)}>
              <Text style={{color:"red"}}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
                    </View>
                    
                   
                </View>
                </ScrollView>
            <StatusBar style="light" />
        </View>

    )
}