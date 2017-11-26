import React, { Component } from 'react';
import { Container, Header,Button,Icon, Content, Card, CardItem, Text, 
  Body,ListItem, CheckBox } from 'native-base';
export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
                <Button  primary><Text> Primary </Text></Button>
                <Button small iconLeft light>
                  <Icon name='home' />
                <Text> Light </Text></Button>
               
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
         <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}