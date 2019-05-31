import React, { Component } from "react";
import { View, Stylesheet, Image, Button, Text } from 'react-native';
import { List, Checkbox, Appbar } from 'react-native-paper';

export default class TradingView extends Component <Props>{


render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Content
          title="Trading"
          subtitle="Do Some Transaction Here" />
          </Appbar.Header>
      </View>
    )
  }
}