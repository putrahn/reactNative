/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Alert, Image, Button } from 'react-native';
import Axios from 'axios';
import DatePicker from 'react-native-datepicker';

export default class Register extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            stateEmail:'',
            statePassword:'',
            stateFirstname:'',
            stateLastname:'',
            stateNIK:'',
            stateMom:'',
            stateBirthdate:'',
        };
    }
    static navigationOptions = {
        title: 'LOGIN',
    };

    static navigationOptions = { header: null }

    _registerApi= async() => {
    const data = {
      nik : this.state.stateNIK,
      email: this.state.stateEmail,
      password: this.state.statePassword,
      firstname : this.state.stateFirstname,
      lastname : this.state.stateLastname,
      mom : this.state.stateMom,
      birth_date : this.state.stateBirthdate
    } 
    Axios.post("http://192.168.1.8:8090/customers/login", data)
    .then(async(result) => {
        const response = result.data
        console.log(data);
        console.log(JSON.stringify(response));
        if(response.response_code == "01") {
            console.log("dapet");
          const login = await signIn(this.state.stateUsername, this.state.statePassword);
          if(login) {
            this.props.navigation.navigate('Login');
          } else {
            alert("Username or password is invalid");            
          }
        } else {
          Alert.alert(response.response_message);
        }
      }).catch(error => {
        alert(error);
      })
  }
    render() {
        return (
          <View style={styles.container}>

          <Text style={styles.textByUp}>Sign Up</Text>

            <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="NIK"
                underlineColorAndroid='transparent'
                onChangeText={(nik) => this.setState({ stateNIK: nik })} value={this.state.stateNIK} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="First Name"
                underlineColorAndroid='transparent'
                onChangeText={(firstname) => this.setState({ stateFirstname: firstname })} value={this.state.stateFirstname} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Last Name"
                underlineColorAndroid='transparent'
                onChangeText={(lastname) => this.setState({ stateLastname: lastname })} value={this.state.stateLastname} />
          </View>

          <View style={styles.inputContainer}>
                    <DatePicker
                        mode="date"
                        date={this.state.stateBirthdate}
                        placeholder="Birth Date"
                    
                        format="YYYY-MM-DD"
                        minDate="1910-01-01"
                        maxDate="2040-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                                
                            },
                            dateInput: {
                                marginRight: 68,
                                borderWidth: 0,                      
                            },
                          
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(birth) => this.setState({ stateBirthdate: birth }) }
                 
                    />
                </View>

          <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Mother's Maiden Name"
              underlineColorAndroid='transparent'
              onChangeText={(mom) => this.setState({ stateMom: mom })} value={this.state.stateMom} />
        </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Email"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({ stateEmail: email })} value={this.state.stateEmail} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(pass) => this.setState({statePassword : pass})} value={this.state.statePassword}/>
          </View>

          <View>
          <Button
            onPress={() =>  this.props.navigation.navigate("Login")}
            title="Register"
          />
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
    height:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:20,
    width:300,
    backgroundColor:'transparent'
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