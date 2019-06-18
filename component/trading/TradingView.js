import React, { Component } from "react";
import { View, Stylesheet, Image, Button, Text } from 'react-native';
import { List, Checkbox, Appbar } from 'react-native-paper';
import { LineChart, Grid } from 'react-native-svg-charts';

export default class TradingView extends Component <Props>{


render() {
    return (
      <View>

      <View>
        <Appbar.Header>
          <Appbar.Content
          title="Trading"
          subtitle="Do Some Transaction Here" />
          </Appbar.Header>
          </View>

          </View>
      
    )
  }
}