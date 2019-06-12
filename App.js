/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import NetInfo from "@react-native-community/netinfo";

export default class App extends Component {
  state = {
    isConnected: false
  }

  componentWillMount() {
    this.checkNetwork()
  }

  checkNetwork() {
    NetInfo.fetch().then(state => {
      this.setState(() => {
        return {
          isConnected: state.isConnected
        }
      })
    });
  }

  render() {
    const { isConnected } = this.state

    return (
      isConnected ? (
        <WebView source={{ uri: 'https://online.acb.com.vn' }} />
      ) : (
        <TouchableOpacity style={styles.container} onPress={this.checkNetwork.bind(this)}>
          <Image style={styles.imageContainer} source={require('./img/reload.png')} />
        </TouchableOpacity>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
  }
})