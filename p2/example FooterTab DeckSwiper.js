import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail,
   Text, Left, Body, Icon, Footer,FooterTab, Button, Content, Badge } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./img/img1.jpg'),
  },
  {
    text: 'Card two',
    name: 'Two',
    image: require('./img/img2.jpg'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('./img/img3.jpg'),
  },
];
export default class DeckSwiperExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
            <Badge ><Text>51</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Icon name="person" />
              <Text>Person</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}