import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainNavigation } from "./MainNav";
import {
  SplashB,
  SplashC,
  SplashD,
  SplashE,
  LoginScreen,
  RegisterScreen,
  TypeUser,
  VerificationScreen,
  SetPassword,
  SettingScreen,
  Generator,
  ScannerScreen,
} from "../Screens/index";
import BottomNavigation from "./BottomNavigation";
import { useSelector } from "react-redux";
import Splashes from "../Screens/Splahes";
import History from "../Components/history";
import { AddTopup } from "../Screens/homeScreen/addTopup";
import { PayScan } from "../Screens/homeScreen/payScan";
const Stack = createNativeStackNavigator();

const { Navigator, Screen } = Stack;

export const AppNavigation = () => {
  const islog = useSelector(
    (state) => state.storeAuthentication.isAuthenticated
  );
  const isVerified = useSelector((state) => state.isVerified);
  console.log(islog);
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {islog == true ? (
        <>
          <Screen name="bottomnavigation" component={BottomNavigation} />
          <Screen name="addtopup" component={AddTopup} />
          <Screen name="Payscan" component={PayScan} />
          <Screen name="scannercameras" component={ScannerScreen}></Screen>
          <Screen name="genetorqr" component={Generator}></Screen>
        </>
      ) : (
        <>
          {!isVerified ? (
            <>
              <Screen name="SplashE" component={Splashes} />
              <Screen name="Splashe" component={SplashE} />
              <Screen name="Register" component={RegisterScreen} />
              <Screen name="Verification" component={VerificationScreen} />
            </>
          ) : (
            <>
              <Screen name="Login" component={LoginScreen} />
              <Screen name="Typeuser" component={TypeUser} />
              <Screen name="Setpassword" component={SetPassword} />
              <Screen name="Setting" component={SettingScreen} />
              <Screen
                options={{ headerShown: false }}
                name="MainNav"
                component={MainNavigation}
              />
            </>
          )}
        </>
      )}
    </Navigator>
  );
};
