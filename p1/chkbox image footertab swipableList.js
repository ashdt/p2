import React, { Component } from 'react';
import { ListView, Image, Alert } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text,
Footer,FooterTab, Badge } from 'native-base';
const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Phil Coutinho',
];

export default class SwipeableListExample extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
 
  render() {
    let pic = {  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Header />
        <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              
              <ListItem>
                <Text> {data} </Text>                
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
          <Text>Hello!!</Text>
          <Icon active name="thumbs-up" />
          <Button full onPress={this._onPressButton} title="Hi"/>

          <Image source={pic} style={{width: 193, height: 110}}/>

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