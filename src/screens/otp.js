import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const otp = ({navigation}) => {
  //   const handleNext4 = ()=>{
  //     navigation.navigate('Signup')
  //   }
  return (
    <View>
      <Image
        source={require('../assets/otp/Group105.png')}
        style={styles.image}
      />
      <Image
        source={require('../assets/otp/EnterOTP.png')}
        style={styles.image}
      />
      <Text style={styles.text}>A 5 digit code has been sent to </Text>
      <Text style={styles.text}>user123@mail.com</Text>

      <View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="" />
        </View>
      </View>

      <View>
        <View style={styles.inputContainer2}>
          <TextInput style={styles.input} placeholder="" />
        </View>
      </View>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default otp;

const styles = StyleSheet.create({
  image: {
    marginLeft: 40,
    marginTop: 40,
  },
  text: {
    marginLeft: 40,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 40,
    width: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputContainer2:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 40,
    width: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10
  },
  icon: {
    marginLeft: 5,
  },
  input: {
    flex: 1,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 40,
    marginVertical: 10,
    marginTop: 60,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picture: {
    marginRight: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: 10,
  },
  sign: {
    marginRight: 5,
  },
  add: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addition: {
    color: 'black',
    fontWeight: 'bold',
  },
});
