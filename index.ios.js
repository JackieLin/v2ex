/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './compoents/app';

import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
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
    backgroundColor: '#f2f3f5',
  },
});

class v2ex extends Component {
  render() {
    // console.warn(JSON.stringify(store.getState()));
    return (
      <Provider store={store}>
        <NavigatorIOS 
          style={styles.container} 
          initialRoute={{
            title: 'V2EX',
            component: App,
          }}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('v2ex', () => v2ex);
