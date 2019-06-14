import React, { Component } from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

import camera from '../assets/camera.png';
import api from '../services/api';

export default class Feeds extends Component {

  state = {
    feed: [],
  };

  async componentDidMount() {
    // this.registerToSocket();

    const response = await api.get('posts');
    console.log(response.data);
    
    this.setState({ feed: response.data });
  }

  static navigationOptions = ({ navigation }) => ({
    headerRight:  (
      <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.navigate('New')}>
        <Image source={camera} />
      </TouchableOpacity>
    ),
  });
  render() {
    return <View />;
  }
}
