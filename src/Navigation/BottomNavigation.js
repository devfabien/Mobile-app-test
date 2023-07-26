import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/homeScreen/homeScreen";
import { ProfileScreen } from "../Screens/profile";
import { Generator } from "../Screens";
import { MaterialCommunityIcons, Feather, FontAwesome, FontAwesome5, Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { ScannerScreen } from "../Screens";
import History from "../Components/history";

const { Navigator, Screen } = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => {
                        return <AntDesign name="home" size={24} color="black" />;
                    },

                }}
            />
            <Screen
                name="History"
                component={History}
                options={{
                    tabBarIcon: () => {
                        return <MaterialIcons name="history" size={26} color="black" />;
                    },

                }}
            />
            <Screen
                options={{
                    tabBarIcon: () => {
                        return <MaterialCommunityIcons name="qrcode-scan" size={28} color='black' />;
                    },
                }}
                name="Qrcode"
                component={ScannerScreen}
            />
            <Screen
                name="Profile"
                options={{
                    tabBarIcon: () => {
                        return <AntDesign name="user" size={26} color="black" />;
                    },
                }}
                component={ProfileScreen} />
        </Navigator>
    )
}

export default BottomNavigation