import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
         <View style={styles.container}>
            <Text>
                New Page
            </Text>
        
         </View>
         </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
