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
  Text,
  Image,
  Navigator,
  TouchableOpacity
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

  navigator: {
    transform: [
      {translateX: 230}
    ]
  }
});

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={{width: 100, height: 60}}>
        <Image source={require('./images/menu.png')} style={{position: 'absolute', top: 15, left: 10, height: 18, width: 27}}/>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(newRandomRoute())}
        style={{width: 100, height: 60}}>
        <Image source={require('./images/more.png')} style={{position: 'absolute', top: 15, right: 10, height: 18, width: 27}}/>
      </TouchableOpacity>
    );
  },

  Title: function(router, navigator, index, navState) {
    return (
      <Text style={{lineHeight: 32, fontSize: 15}}>
        {router.title}
      </Text>
    );
  },
};

class v2ex extends Component {
  /**
   * 路由跳转
   */
  renderScene(router, nav) {
    switch (router.route) {
      case '/':
        return <App navigator={nav}/>
      default:
        return <App navigator={nav}/>
    }
  }

  render() {
    // console.warn(JSON.stringify(store.getState()));
    return (
      <Provider store={store}>
        <Image
          source={require('./images/bg.jpg')}
          style={styles.bg}>
              <Navigator
                debugOverlay={false}
                initialRoute={{ route: '/', title: 'V2EX' }}
                renderScene={this.renderScene}
                navigationBar={
                  <Navigator.NavigationBar
                    routeMapper={NavigationBarRouteMapper}
                    style={{backgroundColor: 'white', flexDirection: 'row'}}
                  />
                }
              />
        </Image>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('v2ex', () => v2ex);
