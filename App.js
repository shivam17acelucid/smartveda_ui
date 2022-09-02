import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupOptions from './src/screens/signupoptions';
import Login from './src/screens/login';
import OtpRegister from './src/screens/otpRegister';
import OtpVerify from './src/screens/otpVerify';
import PrefScreen from './src/screens/preferrenceScreen';
import Signup from './src/screens/signup';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
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
