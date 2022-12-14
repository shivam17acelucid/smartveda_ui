import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
  // Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-simple-toast';

function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [hidePass, setHidePass] = useState(true);

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

  const showPassword = () => {
    setHidePass(!hidePass);
  };

  const signup = () => {
    fetch('http://3.110.155.54:5000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        const {errors} = data;
        if (errors) {
          console.log(errors);
          // Alert.alert('Warning', 'Enter Correct Email Address OR Password');
          Toast.show('Email Already Exists Or not Valid Email');
        } else {
          navigation.navigate('login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          source={require('../assets/images/Logo1.png')}
          style={styles.logo1}
        />
        <Text style={styles.header}>Create Your Account</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.inputbox}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderStyle={styles.placeholder}
          />
          <Image
            source={require('../assets/images/CircledEnvelope.png')}
            style={styles.inputImage}
          />
        </View>
        <View style={styles.inputbox}>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={hidePass ? true : false}
            placeholderStyle={styles.inputtext}
          />
          <Image
            source={require('../assets/images/UnlockPrivate.png')}
            style={styles.inputImage}
          />
          <TouchableOpacity onPress={showPassword} style={styles.inputImage2}>
            <Image source={require('../assets/images/Hide.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.save}>
          <CheckBox
            value={toggleCheckBox}
            onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
            color={toggleCheckBox ? '#4630EB' : undefined}
            style={{
              marginRight: 10,
              border: '2 solid #5A995E',
              borderRadius: 4,
            }}
          />
          <Text style={styles.remember}>Remember Me</Text>
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={signup}>
          <Text style={styles.innerText}>Sign Up</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            marginRight: 20,
            width: 330,
            marginLeft: 20,
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: '#5A995E'}} />
          <View>
            <Text style={styles.hr}>Or Continue With</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#5A995E'}} />
        </View>
      </View>
      <View style={styles.box3}>
        <View style={styles.footerImg}>
          <TouchableOpacity onPress={redirectFacebook}>
            <Image
              source={require('../assets/images/Facebook.png')}
              style={{marginRight: 50}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={redirectgoogle}>
            <Image source={require('../assets/images/Google.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={redirectOtpSignup}>
            <Image
              source={require('../assets/images/iPhone.png')}
              style={{marginLeft: 50}}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.footertext}>
          Already Have Account?{' '}
          <Text style={{color: '#5A995E'}} onPress={redirectLogin}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: 'auto',
    backgroundColor: 'rgba(91, 153, 90, 0.25)',
  },
  box1: {
    alignItems: 'center',
  },
  logo1: {
    width: 77,
    height: 76,
    alignSelf: 'center',
    marginTop: '12%',
  },
  header: {
    fontFamily: 'Poppins',
    width: 'auto',
    marginTop: '10%',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 60,
    textAlign: 'center',
    color: '#000000',
    textShadow: '0 4 4 rgba(0, 0, 0, 0.25)',
  },
  box2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%',
  },
  inputbox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  inputImage: {
    position: 'absolute',
    bottom: 10,
    zIndex: 9999,
    left: 10,
  },
  inputImage2: {
    position: 'absolute',
    bottom: 10,
    zIndex: 9999,
    right: 20,
  },
  input: {
    width: 320,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#D6E6D6',
    boxShadow:
      'inset -1.18 -1.18 6.5368 #FFFFFF, inset 1.18 1.18 6.5368 #A0CCA0',
    borderRadius: 50,
    borderColor: 'transparent',
    textAlign: 'center',
    color: '#00000',
  },
  save: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  remember: {
    height: 23,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: '#5A995E',
    marginRight: 120,
    marginTop: 4,
    // opacity: '0.8',
  },
  signupButton: {
    width: 320,
    elevation: 8,
    height: 47,
    backgroundColor: '#5A995E',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
  },
  innerText: {
    width: 60,
    height: 23,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
  hr: {
    width: 129,
    height: 23,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: '#5A995E',
  },
  footerImg: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  footertext: {
    marginTop: 15,
    textAlign: 'center',
    height: 23,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22,
    marginRight: 10,
    color: '#28282B',
  },
});
export default Signup;
