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
import App from '../App';
import DatePicker from 'react-native-datepicker'

export default class Signup extends Component<{}> {
  
  constructor(props,context){
    super(props,context);
    this.state = {
          EmailTextBox : '',
          PasswordTextBox : '',
          UserNameTextBox:'',
          MobileTextBox:'',
          date:"Enter Your DOB",
          CityTextBox:'',
         LoginButton: false,
         SignupButon:false,
         showPassword:true,
      }
    
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };
  
  handleSignup = async() => {
       this.setState({LoginButton:true})
        if(this.state.EmailTextBox == ''  || !this.validateEmail(this.state.EmailTextBox))
        {
        Alert.alert('please enter correct email')
        this.setState({LoginButton:false})
        }
        else{
          Alert.alert('Logged in');
          this.setState({LoginButton:false})
        }
       
    }
  
    
handleLogin= async()=>{
  this.setState({LoginButton:true})
  this.setState({SignupButon: true})
}

  handleEmailChange = EmailTextBox => {
    this.setState({
      ...this.state,
      EmailTextBox: EmailTextBox
    })
  }
  handleUserNameChange = UserNameTextBox => {
    this.setState({
      ...this.state,
      UserNameTextBox: UserNameTextBox
    })
  }
  handleCityChange = CityTextBox => {
    this.setState({
      ...this.state,
      CityTextBox: CityTextBox
    })
  }
 
  handleMobileChange = MobileTextBox => {
    this.setState({
      ...this.state,
      MobileTextBox: MobileTextBox
    })
  }

  managePasswordVisibility = () =>
    {
      this.setState({ showPassword: !this.state.showPassword });
    }

  handlePasswordChange = PasswordTextBox => {
    this.setState({
      ...this.state,
      PasswordTextBox: PasswordTextBox
    })
  }


 
  render() {
   if(this.state.LoginButton==false){

    return (
   
  <View>
  
    <ImageBackground source={require('../backImg.jpg')} style={{
          width: '100%',
          height: '100%',}}>
<Content style={{padding:20,paddingTop:0}}>
<Form>
<Text style={{fontSize:40, paddingBottom:5, alignSelf:'center'}}>BOOKSHARE</Text>
          
<Item  style={{borderColor:'black'}} rounded>
            <Input placeholder='Enter UserName' placeholderTextColor='white' value= {this.state.UserNameTextBox} onChangeText={this.handleUserNameChange} style={{color:'white'}}/>
          </Item>
          <Text style={{ paddingBottom:10, alignSelf:'center'}}></Text>
         
          <Item rounded style={{borderColor:'black'}} >
            <Input placeholder='Enter Email' placeholderTextColor='white'  style={{color:'white'}} onChangeText={this.handleEmailChange} value= {this.state.EmailTextBox} />
          </Item >
          <Text style={{ paddingBottom:10, alignSelf:'center'}}></Text>
          <Item  style={{borderColor:'black'}} rounded>
            <Input  secureTextEntry={this.state.showPassword} placeholder='Enter Password' placeholderTextColor='white' 
            value= {this.state.PasswordTextBox} onChangeText={this.handlePasswordChange} style={{color:'white'}}/>
            <Button transparent onPress={this.managePasswordVisibility}><Icon name="eye"/></Button>
          </Item>
         
         <Text style={{ paddingBottom:10, alignSelf:'center'}}></Text>
         
         <Item  style={{borderColor:'black'}} rounded>
           <Input placeholder='Mobile No.' placeholderTextColor='white' value= {this.state.MobileTextBox} onChangeText={this.handleMobileChange} style={{color:'white'}}/>
         </Item>
         <Text style={{ paddingBottom:10, alignSelf:'center'}}></Text>
         
         <Item  style={{borderColor:'black'}} rounded>
           <Input placeholder='City' placeholderTextColor='white' value= {this.state.CityTextBox} onChangeText={this.handleCityChange} style={{color:'white'}}/>
         </Item>


          <Text style={{ paddingBottom:10, alignSelf:'center'}}></Text>
         
          <Item  style={{borderColor:'black'}} rounded>
           
          <Text style={{paddingRight:80,color:'white'}}>{this.state.date}</Text>
            <DatePicker rounded  onDateChange={(date) => {this.setState({date: date})}} style={{borderColor:'black',alignSelf:'flex-end',paddingLeft:100 }}
                        />
                       
         </Item>
         
          <Text style={{ paddingBottom:10, alignSelf:'center'}}></Text>
          
          <Button block bordered rounded style={{padding:30,borderColor:'black'}} onPress={this.handleSignup}>
            <Text  style={{color:'white'}}>SIGNUP</Text>
          </Button>
          <Text style={{ paddingBottom:10, alignSelf:'center'}}></Text>
          
            <Button  transparent style={{alignSelf:'center',}}><Text style={{color:'white',fontSize:20,paddingBottom:30}} 
            onPress={this.handleLogin}
            >Already Register Login Here!</Text></Button>
           
          </Form>
        </Content>
    
      </ImageBackground>
     
    </View>  
    );
  }
  else  if(this.state.SignupButon==true){
    return(
      <View>
        <App/>
        </View>
    );
  }
  }
}

const styles = StyleSheet.create({
  });
