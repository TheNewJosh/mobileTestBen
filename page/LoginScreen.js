import React, { useState, useContext, useEffect } from 'react'
import { Image, StyleSheet, View, TouchableOpacity, Text, StatusBar, TextInput, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <View style={styles.bodyImage}>
          <Image
              source={require('../assets/image/logo.png')} 
            />
            <View style={styles.logoView}>
              <Text style={styles.logoBckText}>Fast</Text>
              <Text style={styles.logoGrnText}>Fast</Text>
            </View>
        </View>               
      </View>
      <View>
          <Text style={styles.loginText}>Login To Your Account</Text>
      </View>
      <View style={styles.inputArea}>
        <View>
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={text => setEmail(text)}
            cursorColor={"#E75B16"}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            cursorColor={"#E75B16"}
          />
        </View> 
        <TouchableOpacity>
          <Text style={styles.forgetText}>Forgot Your Account Password?</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() =>navigation.navigate("Dashboard")}>
          <Text style={styles.loginButtonText}>Login</Text>  
        </TouchableOpacity>
        <Text style={styles.continueText}>Or Continue With</Text> 
        <View style={styles.socialView}>
          <View style={styles.socialViewBox}>
            <Entypo name="facebook-with-circle" size={28} color="#3C5A9A" />
            <Text style={styles.socialText}>Facebook</Text>  
          </View>
          <View style={styles.socialViewBox}>
            <AntDesign name="google" size={28} color="#EB4335" />
            <Text style={styles.socialText}>Google</Text>  
          </View>
        </View>
        <TouchableOpacity style={styles.logoView}>
          <Text style={styles.continueText}>Don't have account?</Text>
          <Text style={styles.signupText}> Sign Up</Text>
        </TouchableOpacity>
      </View> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  body: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  bodyImage: {
    marginTop: 25,
    textAlign: 'center'
  },
  logoBckText: {
    color: '#0D2A0E',
    fontSize: 30,
    fontWeight: 'bold'
  },
  logoGrnText: {
    color: '#68DC9A',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoView:{
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  loginText: {
    color: '#0D2A0E',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  inputArea: {
    padding: 10,
    marginTop: 30
  },
  inputText: {
    color: '#A5A6A8',
    fontSize: 16,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: '#EAF1EF',
    height: 50,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 25
  },
  forgetText: {
    color: '#0D2A0E',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#009655',
    padding: 15,
    width: '100%',
    borderRadius: 20,
    textAlign: 'center',
    marginTop: 20
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center'
  },
  continueText: {
    color: '#0D2A0E',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10
  },
  signupText: {
    color: '#68DC9A',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10
  },
  socialText: {
    color: '#2A273B',
    fontSize: 20,
    marginLeft: 10
  },
  socialView: {
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15
  },
  socialViewBox: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#F6F6F7',
    padding: 10,
    borderRadius: 10
  }
});

export default HomeScreen