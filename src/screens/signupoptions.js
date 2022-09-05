import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const SignupOptions = ({navigation}) => {
  const redirectSignup = () => {
    navigation.navigate('signup');
  };

  const redirectLogin = () => {
    navigation.navigate('login');
  };

  const redirectOtpSignup = () => {
    navigation.navigate('otpRegister');
  };

  const redirectgoogle = () => {
    Linking.openURL('http://3.108.53.130:5000/auth/google');
  };

  const redirectFacebook = () => {
    Linking.openURL('http://3.108.53.130:5000/auth/facebook');
  };

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          source={require('../assets/images/Logo1.png')}
          style={styles.image}
        />
        <Text style={styles.header}>Sign Up Using</Text>
      </View>
      <View style={styles.box2}>
        <TouchableOpacity style={styles.button1} onPress={redirectFacebook}>
          <Image
            source={require('../assets/images/Facebook.png')}
            style={{marginTop: 10, marginLeft: 50}}
          />
          <Text style={styles.option}>Signup Using Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={redirectgoogle}>
          <Image
            source={require('../assets/images/Google.png')}
            style={{marginTop: 10, marginLeft: 50}}
          />
          <Text style={styles.option}>Signup Using Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={redirectOtpSignup}>
          <Image
            source={require('../assets/images/iPhone.png')}
            style={{marginTop: 10, marginLeft: 50}}
          />
          <Text style={styles.option}>Signup Using Phone</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginRight: 20,
          width: 300,
          marginLeft: 50,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: '#5A995E'}} />
        <View>
          <Text style={styles.hr}>Or</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#5A995E'}} />
      </View>
      <View style={styles.button4}>
        <TouchableOpacity style={styles.signupButton} onPress={redirectSignup}>
          <Text style={styles.buttonText}>Sign up with Email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already Have Account?
          <Text style={{color: 'green'}} onPress={redirectLogin}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 428,
    height: 926,
    backgroundColor:
      'radialGradient(155.73% 44.98% at 46.85% 2.81%, rgba(255, 255, 255, 0.23) 0%, rgba(91, 153, 90, 0.25) 97.23%), #FFFFFF',
  },
  box1: {
    padding: 30,
  },
  image: {width: 77, height: 76, marginLeft: 130, marginTop: 40},
  header: {
    fontFamily: 'Poppins',
    width: 151,
    marginTop: 30,
    marginLeft: 90,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 60,
    textAlign: 'center',
    color: '#000000',
    textShadow: '0 4 4 rgba(0, 0, 0, 0.25)',
  },
  box2: {
    alignItems: 'center',
  },
  button1: {
    width: 340,
    height: 47,
    backgroundColor: '#DEEADE',
    boxShadow: '-1.18 -1.18 6.5368 #FFFFFF, 1.18 1.18 6.5368 #A0CCA0',
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  button2: {
    width: 340,
    height: 47,
    backgroundColor: '#DEEADE',
    boxShadow: '-1.18 -1.18 6.5368 #FFFFFF, 1.18 1.18 6.5368 #A0CCA0',
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  button3: {
    width: 340,
    height: 47,
    backgroundColor: '#DEEADE',
    boxShadow: '-1.18 -1.18 6.5368 #FFFFFF, 1.18 1.18 6.5368 #A0CCA0',
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  button4: {
    width: 342,
    height: 47,
    background: '#5A995E',
    borderRadius: 50,
  },
  option: {
    textAlign: 'center',
    color: '#28282B',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
    marginLeft: 15,
    marginTop: 13,
  },
  hr: {
    width: 18,
    height: 23,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 22,
    color: '#5A995E',
    marginLeft: 10,
    marginRight: 10,
  },
  signupButton: {
    width: 342,
    height: 47,
    backgroundColor: '#5A995E',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 25,
    marginLeft: 35,
  },
  buttonText: {
    width: 140,
    height: 23,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
  footer: {
    width: 220,
    height: 23,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22,
    alignSelf: 'center',
    marginTop: 50,
    marginRight: 20,
  },
  footerText: {
    color: '#28282B',
    fontSize: 15,
    lineHeight: 22,
    marginRight: 10,
  },
});
export default SignupOptions;
