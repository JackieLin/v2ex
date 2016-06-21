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
  Image,
  Navigator
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
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(newRandomRoute())}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Next
        </Text>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title} [{index}]
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
                style={styles.container}
                initialRoute={{ route: '/' }}
                renderScene={this.renderScene}
                navigationBar={
                  <Navigator.NavigationBar
                    routeMapper={NavigationBarRouteMapper}
                    style={{backgroundColor: 'white'}}
                  />
                }
              />
        </Image>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('v2ex', () => v2ex);
