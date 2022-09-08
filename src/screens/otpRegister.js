import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  // Alert,
} from 'react-native';
import Toast from 'react-native-simple-toast';

function OtpRegister({navigation}) {
  const [phone, setPhone] = useState('');

  const redirectLogin = () => {
    navigation.navigate('login');
  };

  const otpRegister = () => {
    fetch('http://3.108.53.130:5000/otpsignup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone,
      }),
    })
      .then(response => response.json())
      .then(data => {
        const {errors} = data;
        if (errors) {
          console.log(errors);
          // Alert.alert('Warning', 'Enter Valid Mobile Number');
          Toast.show('Enter Valid Mobile Number');
        } else {
          navigation.navigate('otpVerify');
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
        <Text style={styles.header}>Sign Up Using Phone</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.inputbox}>
          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
            placeholder="Phone"
            placeholderStyle={styles.placeholder}
            keyboardType="numeric"
          />
          <Image
            source={require('../assets/images/iphonese.png')}
            style={styles.inputImage}
          />
        </View>
      </View>
      <View style={styles.box3}>
        <TouchableOpacity style={styles.button1} onPress={otpRegister}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 40,
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
        <View style={styles.footerImg}>
          <Image
            source={require('../assets/images/Facebook.png')}
            style={{marginRight: 50}}
          />
          <Image source={require('../assets/images/Google.png')} />
          <Image
            source={require('../assets/images/iPhone.png')}
            style={{marginLeft: 50}}
          />
        </View>
        <Text style={styles.footerText}>
          Already have an Account?
          <Text style={{color: '#5A995E'}} onPress={redirectLogin}>
            Sign In.
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
  },
  box1: {
    alignItems: 'center',
  },
  logo1: {
    width: 77,
    height: 76,
    alignSelf: 'center',
    marginTop: 40,
  },
  header: {
    fontFamily: 'Poppins',
    width: 272,
    marginTop: 40,
    alignSelf: 'center',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 60,
    textAlign: 'center',
    color: '#000000',
  },
  box2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputbox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  inputImage: {
    position: 'absolute',
    bottom: 10,
    zIndex: 9999,
    left: 20,
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
  box3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    width: 320,
    elevation: 8,
    backgroundColor: '#5A995E',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'center',
    marginTop: 50,
  },
  buttonText: {
    width: 58,
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
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
  },
  footerText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22,
    color: '#000000',
    marginTop: 20,
  },
});
export default OtpRegister;
