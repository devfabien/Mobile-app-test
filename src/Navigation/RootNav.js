import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./AppNav";
export  const RootNavigation = () => {
  return (

      <NavigationContainer >
        <AppNavigation /> 
      </NavigationContainer>
    
  );
};