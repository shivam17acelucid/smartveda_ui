import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const PrefScreen = () => {
  const welcome = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          source={require('../assets/images/Logo1.png')}
          style={styles.logo1}
        />
        <Text style={styles.header}>What Brings You Here?</Text>
      </View>
      <View style={styles.option}>
        <View style={styles.bgHeader}>
          <Text style={styles.header2}>You can provide upto 5 preferences</Text>
        </View>
        <View>
          <View style={styles.label1}>
            <TouchableOpacity style={{marginLeft: 60, marginTop: '5%'}}>
              <Text style={styles.optionLabel}>Diabetes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 120, marginTop: '5%'}}>
              <Text>Diabetes</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{marginLeft: 180, marginTop: '5%'}}>
            <Text style={styles.optionLabel}>General Welness</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 60, marginTop: '5%'}}>
            <Text style={styles.optionLabel}>Blood Pressure</Text>
          </TouchableOpacity>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity style={{marginLeft: 60, marginTop: '5%'}}>
              <Text style={styles.optionLabel}>Diabetes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 120, marginTop: '5%'}}>
              <Text style={styles.optionLabel}>Vitality</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{alignSelf: 'center', marginTop: '5%'}}>
            <Text style={styles.optionLabel}>Digestion</Text>
          </TouchableOpacity>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity style={{marginLeft: 60, marginTop: '5%'}}>
              <Text>Diabetes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 120, marginTop: '5%'}}>
              <Text style={styles.optionLabel}>Know Your Body</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{alignSelf: 'center', marginTop: '5%'}}>
            <Text style={styles.optionLabel}>Weight Management</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button1} onPress={welcome}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>Ask me later</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: '100%',
    backgroundColor: 'rgba(91, 153, 90, 0.25)',
  },
  box1: {
    alignItems: 'center',
  },
  logo1: {
    width: 77,
    height: 76,
    marginTop: '10%',
  },
  header: {
    marginTop: '3%',
    height: 48,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 48,
    fontSize: 32,
    color: '#000000',
  },
  bgHeader: {
    height: '12%',
    width: 'auto',
    backgroundColor: '#5B995A',
    marginTop: '5%',
  },
  header2: {
    height: 23,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: '3%',
  },
  optionLabel: {
    height: 23,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    color: '#5B995A',
  },
  label1: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  button1: {
    width: 342,
    elevation: 8,
    backgroundColor: '#5A995E',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'center',
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
  footer: {
    height: 23,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
    color: '#5B995A',
    marginTop: '3%',
  },
});
export default PrefScreen;
