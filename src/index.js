import React,{Component }from 'react';
import { View, Text} from 'react-native';
import {Form,Item,Input ,Header,Body,Title,Container} from 'native-base';
export default class Login extends Component {
   render(){
       return( 
           <Container>
       <Header>
           <Body>
               <Title>BookShare</Title>
            </Body>
        </Header>
      <Form>
          <Item>
              <Input placeholder="enter email"></Input>
              </Item>
          </Form>
        </Container>
    );
   }
}