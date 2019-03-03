import React from 'react';
import { Button } from 'react-native-elements';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';

import { MonoText } from '../components/StyledText';

export default class LogInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <LinearGradient
          colors={['#45B5AA', '#403F6F']}
          style={{width: '100%', height: '100%'}}
        >
           <StatusBar barStyle="light-content" />    
          <View
          style = {styles.container}
          >
          <Button title="Log In"     
          type="solid" 
          /> 
          
          </View>

       </LinearGradient>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  
});
