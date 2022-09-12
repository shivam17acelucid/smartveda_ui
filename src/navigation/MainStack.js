import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupOptions from '../screens/signupoptions';
import Login from '../screens/login';
import OtpRegister from '../screens/otpRegister';
import OtpVerify from '../screens/otpVerify';
import PrefScreen from '../screens/preferrenceScreen';
import Signup from '../screens/signup';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const Stack = createNativeStackNavigator();
  const linking = {
    prefixes: ['mychat://preferrenceScreen'],
    screen: {
      welcome: {
        path: 'signupoption',
      },
      preferrenceScreen: {
        path: 'preferrenceScreen',
        parse: {
          id: id => `${id}`,
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" component={SignupOptions} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="otpRegister" component={OtpRegister} />
        <Stack.Screen name="otpVerify" component={OtpVerify} />
        <Stack.Screen name="preferrenceScreen" component={PrefScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
