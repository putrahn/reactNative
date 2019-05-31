/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native';
import {signIn} from '../Auth';
import Axios from 'axios';


export default class Login extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            stateEmail:'',
            statePassword:''
        };
    }
    static navigationOptions = {
        title: 'LOGIN',
    };

    static navigationOptions = { header: null }

    _loginApi = async() => {
    const data = {
      email: this.state.stateEmail,
      password: this.state.statePassword
    }
    this.props.navigation.navigate("Dashboard")
    // Axios.post("http://192.168.1.8:8090/customers/login", data)
    // .then(async(result) => {
    //     const response = result.data
    //     console.log(data);
    //     console.log(JSON.stringify(response));
    //     if(response.response_code == "20") {
    //         console.log("dapet");
    //       const login = await signIn(this.state.stateUsername, this.state.statePassword);
    //       if(login) {
    //         this.props.navigation.navigate('Main');
    //       } else {
    //         alert("Username or password is invalid");            
    //       }
    //     } else {
    //       Alert.alert(response.response_message);
    //     }
    //   }).catch(error => {
    //     alert(error);
    //   })

    // fetch("http://192.168.0.0:8080/customer/login", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type':'application/json',
    //     'Accept':'application/json'
    //   }
    // }).
    //   then((result => result.json())).
    //   then(async(response) => {
    //     console.log(JSON.stringify(response));
    //     if(response.responseCode == '01') {
    //       const login = await signIn(this.state.username, this.state.password)
    //       if(login) {
    //         this.props.navigation.navigate('App');
    //       } else {
    //         alert("Username or password is invalid");            
    //       }
    //     } else {
    //       alert(response.responseMessage);
    //     }
    //   }).catch(error => {
    //     alert(error);
    //   })
  }
    render() {
        return (
          <View style={styles.container}>
          <Text style={styles.textByUp}>Login With Your</Text>
          <Text style={styles.textByUp}>Email and Password</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Email"
                underlineColorAndroid='transparent'
                onChangeText={(user) => this.setState({ stateEmail: user })} value={this.state.stateEmail} />
            <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/pastel-glyph/64/000000/secured-letter.png'}}/>
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(pass) => this.setState({statePassword : pass})} value={this.state.statePassword}/>
            <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
          </View>

          <View>
          <Button
          style={styles.btnByRegister}
            onPress={this._loginApi}
            title="Login"
          />
          </View>

        <View>
        <Text style={styles.textByRegister}>If You Dont Have an Account, Please Sign Up</Text>
				 <TouchableOpacity onPress={() =>  this.props.navigation.navigate("Register")}><Text style={styles.textByRegister}> Sign Up</Text></TouchableOpacity>
				</View>
  
          
        </View>
      );
    }
    
_auth = async ()=>{
    const { stateUsername, statePassword } = this.state;
    if (stateUsername != statePassword) {
        alert('invalid username or password');
    }else{
        const login = await signIn(stateUsername, statePassword);
        if (login) {
            this.props.navigation.navigate('Main');
            alert('login succes');
        }else{
            alert('login failed');
        }
    }

}

}


const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dee3ea',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnByRegister: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode:'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  textByRegister:{
    color:"#011838",
    fontWeight:'bold',
    textAlign:'center',

    textShadowColor: 'rgba(0, 0, 0, 0)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  textByUp:{
    color:"#011838",
    fontWeight:'bold',
    textAlign:'center',
    fontSize: 25,

    textShadowColor: 'rgba(0, 0, 0, 0)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
}); 