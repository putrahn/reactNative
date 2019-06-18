import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';
import { List, Checkbox, Appbar } from 'react-native-paper';
import { Container, Header,Title, Content,Button, Card, CardItem, Text, Body } from 'native-base';
import PureChart from 'react-native-pure-chart';
import Axios from 'axios';
import LineCharts from "react-native-pure-chart/examples/pure-chart/components/line-chart";

export default class TradingView extends Component <Props>{
  constructor() {
    super();
    this.state = {
      data: [],
      message: '',
    }
  }
  static navigationOptions = {
    title: 'Trading'
};

  async componentDidMount() { 
    Axios.get(`http://192.168.1.38:8090/exchanges`)
    .then((results) => {
      const response = results.data
      this.setState({data:response.data})
      console.log(JSON.stringify(response));
    }).catch(error => {
      alert(error);
    })
  }

  _dataBuy(){
    let newDate = '';
    let dataBuy = [];
    for(let i =0; i < this.state.data.length; i++){
      newDate = this.state.data[i].date.slice(0,10);
      dataBuy.push({x : newDate, y: this.state.data[i].buy })
    }
    return dataBuy;
  }

  _dataSell(){
    let newDate = '';
    let dataSell = [];
    for(let i =0; i < this.state.data.length; i++){
      newDate = this.state.data[i].date.slice(0,10);
      dataSell.push({x : newDate, y: this.state.data[i].sell })
    }
    return dataSell;
  }
render() {
  console.log(this._dataBuy());
  console.log(this._dataSell());

  let sample =
        [
          {
            seriesName: 'Buy',
            data:  this._dataBuy(),
            color: 'red'
          },
          {
            seriesName: 'Sell',
            data: this._dataSell(),
            color: 'green'
          }
        ]

console.log(sample);

    return (
      <View>
      <Appbar.Header>
          <Appbar.Content title="Trading" 
          subtitle=" "/>
      </Appbar.Header>

      <Button block success
          style={styles.btnByRegister}
          onPress={()=>{this.props.navigation.navigate('tradingtrans')}}
          >
            <Text>Trading Transaction</Text>
          </Button>
      </View>
    )
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
btnByRegister: {
  width:200,
  backgroundColor:'#3dd130',
   borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
},
title:{
  fontSize:30,
  color:'white',
  fontWeight:'bold'
}
})