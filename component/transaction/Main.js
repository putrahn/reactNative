import React, { Component } from 'react';
import { View, Stylesheet, Image, Button, Text } from 'react-native';
import { List, Checkbox, Appbar } from 'react-native-paper';


type Props={};

export default class Main extends Component <Props>{
  static navigationOptions = {
    title: 'Main Menu',
    header: null,
    headerTitleStyle: { color: 'white' },
    headerStyle: { backgroundColor: 'red' },
  }

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Content
          title="Menu"
          subtitle="Do Some Transaction Here" />
        </Appbar.Header>

        <List.Section title="Transaction">
        <List.Accordion
          title="Transaction"
          left={props => <List.Icon {...props} icon="monetization-on" />}
        >
          <List.Item title="Transfer" />
          <List.Item title="Top Up" />
          <List.Item title="Withdraw"/>
        </List.Accordion>
        </List.Section>
      </View>
    )
  }
}