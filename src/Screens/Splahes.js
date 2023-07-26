import React, {useState} from 'react';
import { scale } from 'react-native-size-matters';
import { Colors } from '../Components/Colors';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import { SplashE } from './index';
import { StatusBar } from 'expo-status-bar';

const Splashes = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
          paddingHorizontal:scale(10),
        }}>
           <View style={{flexDirection:"row",marginTop:scale(40)}}>
                <Image source={item.logo} style={{width:scale(40),height:scale(40)}} />
                <Text style={{color:Colors.white,fontWeight:"800",marginTop:scale(7)}}>{item.logotext}</Text>
                </View>
        <Image
          style={{borderRadius:scale(100),width :scale(180),height:scale(180),marginVertical:scale(30),alignSelf:"center"}}
          source={item.image} />
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
        <StatusBar style='light'/>
      </View>
    );
  };

  return (
    <>
      {showRealApp? (
       
          <SplashE/>
        
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default Splashes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Dpay have the ability tovallow you to withdraw money from your account as well as adding money to your account',
    title: 'Easy Top up &  Withdraw',
    image:require('../Assets/sb.jpg'),
    backgroundColor: '#2D2D9B',
    logo:require('../Assets/logo.png.png'),
    logotext:'DPay',
  },
  {
    key: 's2',
    title: 'Easy Payment',
    text: 'Providing different payment options and is beneficial for the company as well  given the ease of payment, customers are more likely to pay faster and sooner than if they had limited options.',
    image:require('../Assets/se.jpg'),
    backgroundColor: '#2D2D9B',
    logo:require('../Assets/logo.png.png'),
    logotext:'DPay',
  },
  {
    key: 's3',
    title: 'Shopping',
    text: 'You can use DPay to pay in-store, using scan and pay, or online anywhere DPay is accepted, up to your credit limit, without needing a physical card.',
    image:require('../Assets/sc.jpg'),
    backgroundColor: '#2D2D9B',
    logo:require('../Assets/logo.png.png'),
    logotext:'DPay',
  },
 
];