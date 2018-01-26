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
  ImageBackground
} from 'react-native';
import {Header,Left,Right,Body,Icon,Content,Item,Input,Form,Button} from 'native-base'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
   
  <View>
  
    <ImageBackground source={require('./backImage.jpg')} style={{
          width: '100%',
          height: '100%',}}>
<Content style={{padding:20}}>
<Form>
<Text style={{fontSize:40, paddingBottom:30, alignSelf:'center'}}>BOOKSHARE</Text>
          <Item rounded style={{borderColor:'black'}}>
            <Input placeholder='Enter Your Email' placeholderTextColor='white' style={{color:'white'}}/>
          </Item >
          <Text style={{ paddingBottom:20, alignSelf:'center'}}></Text>
  
          <Item  style={{borderColor:'black'}} rounded>
            <Input placeholder='Enter Your Name' placeholderTextColor='white' style={{color:'white'}}/>
          </Item>

          <Text style={{ paddingBottom:20, alignSelf:'center'}}></Text>
  <Item  style={{borderColor:'black'}} rounded>
    <Input placeholder='Enter Mobile No.' placeholderTextColor='white' style={{color:'white'}}/>
  </Item>
  
  <Text style={{ paddingBottom:20, alignSelf:'center'}}></Text>
  <Item  style={{borderColor:'black'}} rounded>
    <Input placeholder='Enter Your City' placeholderTextColor='white' style={{color:'white'}}/>
  </Item>
          <Text style={{ paddingBottom:20, alignSelf:'center'}}></Text>
          <Button block bordered rounded style={{padding:30,borderColor:'black'}}>
          <Text  style={{color:'white'}}>LOGIN</Text>
          </Button>
          <Text style={{ paddingBottom:20, alignSelf:'center'}}></Text>
         
            <Text  style={{color:'white', alignSelf:'center'}}>Forgot Password!</Text>
          <Text style={{ paddingBottom:50, alignSelf:'center'}}></Text>
            <Text  style={{color:'white',alignSelf:'center'}}>New User? Register Here!</Text>
           
          </Form>
        </Content>
    
      </ImageBackground>
     
    </View>  
    );
  }
}

const styles = StyleSheet.create({
  });
