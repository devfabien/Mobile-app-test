import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ProfileScreen,Generator,ScannerScreen} from "../Screens/index";
import {  FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;
export const MainNavigation = () => {
  return (
    <Navigator screenOptions={{
        headerShown:false,
        tabBarHideOnKeyboard: true
    }}>
 
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name="barcode-scan" size={size} color={color} />;
          },
        }}
        name="Barcode"
        component={ScannerScreen}
      />
       <Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name="qrcode-scan" size={size} color={color} />;
          },
        }}
        name="Qrcode"
        component={Generator}
      />
      <Screen 
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="user" size={size} color={color} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Navigator>
  );
};
