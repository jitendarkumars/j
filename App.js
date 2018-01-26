/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Alert
} from 'react-native';
import {Header,Left,Right,Body,Icon,Content,Item,Input,Form,Button,Spinner} from 'native-base'


export default class App extends Component<{}> {
  
  constructor(props,context){
    super(props,context);
    this.state = {
          EmailTextBox : '',
          PasswordTextBox : '',
         buttonPressed: false,
      }
    
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };
  
  handleLogin = async() => {
       this.setState({buttonPressed:true})
        if(this.state.EmailTextBox == ''  || !this.validateEmail(this.state.EmailTextBox))
        {
        Alert.alert('please enter correct email')
        this.setState({buttonPressed:false})
        }
        else{
          Alert.alert('Logged in');
          this.setState({buttonPressed:false})
        }
       
    }
  
  handleEmailChange = EmailTextBox => {
    this.setState({
      ...this.state,
      EmailTextBox: EmailTextBox
    })
  }

  handlePasswordChange = PasswordTextBox => {
    this.setState({
      ...this.state,
      PasswordTextBox: PasswordTextBox
    })
  }

 
  render() {
   if(this.state.buttonPressed==false){

    return (
   
  <View>
  
    <ImageBackground source={require('./backImage.jpg')} style={{
          width: '100%',
          height: '100%',}}>
<Content style={{padding:20}}>
<Form>
<Text style={{fontSize:40, paddingBottom:30, alignSelf:'center'}}>BOOKSHARE</Text>
          <Item rounded style={{borderColor:'black'}} >
            <Input placeholder='Enter Your Email' placeholderTextColor='white'  style={{color:'white'}} onChangeText={this.handleEmailChange} value= {this.state.EmailTextBox} />
          </Item >
          
          <Text style={{ paddingBottom:20, alignSelf:'center'}}></Text>
         
          <Item  style={{borderColor:'black'}} rounded>
            <Input  secureTextEntry placeholder='Enter Your Password' placeholderTextColor='white' value= {this.state.PasswordTextBox} onChangeText={this.handlePasswordChange} style={{color:'white'}}/>
          </Item>
          
          <Text style={{ paddingBottom:20, alignSelf:'center'}}></Text>
          
          <Button block bordered rounded style={{padding:30,borderColor:'black'}} onPress={this.handleLogin}>
            <Text  style={{color:'white'}}>LOGIN</Text>
          </Button>
         
          <Text style={{ paddingBottom:20, alignSelf:'center'}}></Text>
         
          <Button transparent style={{ alignSelf:'center'}}><Text style={{fontSize:20,color:'white'}}>Forgot Password!</Text></Button>
          
          <Text style={{ paddingBottom:50, alignSelf:'center'}}></Text>
          
            <Button  transparent style={{alignSelf:'center',}}><Text style={{color:'white',fontSize:20}} 
            onClick='handleSignup'
            >New User? Register Here!</Text></Button>
           
          </Form>
        </Content>
    
      </ImageBackground>
     
    </View>  
    );
  }
  else {
    return(
      <View>
        <Spinner/>
        </View>
    );
  }
  }
}

const styles = StyleSheet.create({
  });
