/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserCenter from './compoents/userCenter';
import Nodes from './compoents/nodes';
import Route from './compoents/route';

import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  Animated
} from 'react-native';

// 内嵌 redux
const store = configureStore({
  isFetching: true,
  articleList: {
    items: []
  },
  commentList: {
    items: []    
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f5'
  },

  bg: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null
  },

  navigatorLeft: {
    transform: [
      {translateX: 230}
    ]
  },

  navigatorRight: {
    transform: [
      {translateX: -110}
    ]
  },

  shadowLeft: {
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: -5, height: 0}
  },

  shadowRight: {
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 5, height: 0}
  }
});

class v2ex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: new Animated.Value(0)
    };
  }

  render() {
    // console.warn(JSON.stringify(store.getState()));
    return (
      <Provider store={store}>
          <Image
          source={require('./images/bg.jpg')}
          style={[styles.bg]}>
              <UserCenter />
              <Nodes />
              <Animated.View 
                style={[styles.container, {transform: [{translateX: this.state.nav}]}, this.state.shadow]}>
                <Route nav={this.state.nav}/>                  
              </Animated.View>
        </Image>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('v2ex', () => v2ex);
