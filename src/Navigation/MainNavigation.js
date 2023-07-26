import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen} from "../Screens/index";
const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Screen name="LoginScreen" component={LoginScreen}/>
        </NavigationContainer> 
    );
}

export default MainNavigation;