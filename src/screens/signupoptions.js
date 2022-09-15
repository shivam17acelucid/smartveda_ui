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
    Linking.openURL('http://3.110.155.54:5000/auth/google');
  };

  const redirectFacebook = () => {
    Linking.openURL('http://3.110.155.54:5000/auth/facebook');
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
            style={{marginTop: 10, marginLeft: 20}}
          />
          <Text style={styles.option}>Signup Using Facebook </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={redirectgoogle}>
          <Image
            source={require('../assets/images/Google.png')}
            style={{marginTop: 10, marginLeft: 20}}
          />
          <Text style={styles.option}>Signup Using Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={redirectOtpSignup}>
          <Image
            source={require('../assets/images/iPhone.png')}
            style={{marginTop: 10, marginLeft: 20}}
          />
          <Text style={styles.option}>Signup Using Phone </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '2%',
          marginRight: 50,
          width: 'auto',
          marginLeft: 50,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: '#5A995E'}} />
        <View>
          <Text style={styles.hr}>Or</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#5A995E'}} />
      </View>
      <View style={styles.box3}>
        <View style={styles.button4}>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={redirectSignup}>
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    backgroundColor:
      'radialGradient(155.73% 44.98% at 46.85% 2.81%, rgba(255, 255, 255, 0.23) 0%, rgba(91, 153, 90, 0.25) 97.23%), #FFFFFF',
  },
  box1: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  image: {
    width: 77,
    height: 76,
    marginTop: '15%',
  },
  header: {
    fontFamily: 'Poppins',
    width: 151,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 60,
    textAlign: 'center',
    color: '#000000',
    textShadow: '0 4 4 rgba(0, 0, 0, 0.25)',
  },
  box2: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  button1: {
    width: 'auto',
    height: 47,
    backgroundColor: '#DEEADE',
    boxShadow: '-1.18 -1.18 6.5368 #FFFFFF, 1.18 1.18 6.5368 #A0CCA0',
    borderRadius: 50,
    marginTop: '5%',
    marginBottom: '5%',
    display: 'flex',
    flexDirection: 'row',
  },
  button4: {
    width: 'auto',
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
    width: 'auto',
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
    width: 'auto',
    elevation: 8,
    height: 47,
    backgroundColor: '#5A995E',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: '4%',
  },
  buttonText: {
    width: 'auto',
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
    width: 'auto',
    height: 23,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22,
    alignSelf: 'center',
    marginTop: '7%',
  },
  footerText: {
    color: '#28282B',
    fontSize: 15,
    lineHeight: 22,
  },
});
export default SignupOptions;
