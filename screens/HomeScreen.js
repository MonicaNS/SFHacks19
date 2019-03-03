import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Dimensions } from "react-native";

import { MonoText } from '../components/StyledText';

var wVar = Dimensions.get('window').width; //full width
var hVar = Dimensions.get('window').height; //full height

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const state = this.state;
    return (

      <Table stye={styles.table} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>

        <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={state.tableData} style={styles.table} textStyle={styles.text}/>

      </Table>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  contentContainer: {
    paddingTop: 30,
  },

  head: { flex: 1, backgroundColor: '#c8e1ff' },
  text: { textAlign: 'center' },

  table: {
    flex: 1,
    width: wVar,
    height: hVar
  }
});
