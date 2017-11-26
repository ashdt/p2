import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
export default class ButtonThemeExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button small iconLeft light>
          <Icon name='home' />
<Text> Light </Text></Button>
          <Button bordered primary><Text> Primary </Text></Button>
          <Button success><Text> Success </Text></Button>
          <Button info><Text> Info </Text></Button>
          <Button  bordered rounded warning><Text> Warning </Text></Button>
          <Button full bordered danger><Text> Danger </Text></Button>
          <Button block dark><Text> Dark </Text></Button>
        </Content>
      </Container>
    );
  }
}