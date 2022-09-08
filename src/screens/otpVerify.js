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

function OtpVerify({navigation}) {
  const [otp, setOtp] = useState('');
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  const otpVerify = () => {
    let data = otp1 + otp2 + otp3 + otp4;
    setOtp(data);
    fetch('http://3.108.53.130:5000/otpverify', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // phone: phone,
        otp: otp,
      }),
    })
      .then(response => response.json())
      .then(jsonres => {
        const {errors} = jsonres;
        if (errors) {
          console.log(errors);
          Toast.show('Incorrect OTP');
        } else {
          navigation.navigate('preferrenceScreen');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.part1}>
        <Image
          source={require('../assets/images/Logo1.png')}
          style={styles.logo1}
        />
      </View>
      <View>
        <Text style={styles.header}>OTP Sent to your Phone :</Text>
        <Text style={styles.number}>9520373042</Text>
      </View>
      <View style={styles.inputBoxContainer}>
        <TextInput
          style={styles.inputBox}
          onChangeText={setOtp1}
          value={otp1}
          placeholder=""
          autoFocus={true}
          keyboardType="numeric"
          secureTextEntry={true}
          maxLength={1}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={setOtp2}
          value={otp2}
          placeholder=""
          keyboardType="numeric"
          secureTextEntry={true}
          maxLength={1}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={setOtp3}
          value={otp3}
          placeholder=""
          keyboardType="numeric"
          secureTextEntry={true}
          maxLength={1}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={setOtp4}
          value={otp4}
          placeholder=""
          keyboardType="numeric"
          secureTextEntry={true}
          maxLength={1}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button1} onPress={otpVerify}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
  },
  part1: {
    alignItems: 'center',
  },
  logo1: {
    width: 77,
    height: 76,
    marginTop: 70,
  },
  header: {
    width: 289,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 60,
    color: '#000000',
    marginLeft: 20,
  },
  number: {
    width: 289,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    color: '#000000',
    marginLeft: 20,
  },
  inputBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  inputBox: {
    marginLeft: 11,
    marginRight: 11,
    marginTop: 50,
    width: 65,
    height: 65,
    borderWidth: 1,
    backgroundColor: '#D6E6D6',
    borderRadius: 10,
    borderColor: 'transparent',
    textAlign: 'center',
    color: '#00000',
    boxShadow:
      'inset -1.18px -1.18px 6.5368px #FFFFFF, inset 1.18px 1.18px 6.5368px #A0CCA0',
  },
  button1: {
    height: 47,
    width: 342,
    elevation: 8,
    backgroundColor: '#5A995E',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'center',
    marginTop: 80,
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
});
export default OtpVerify;
