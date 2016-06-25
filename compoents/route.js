/**
 * 路由配置信息
 * @author jackieLin <dashi_lin@163.com>
 */

'use strict';

import React, { Component, PropTypes} from 'react';
import App from './app';

import {
  Text,
  Image,
  View,
  Navigator,
  TouchableOpacity,
  Animated
} from 'react-native';

const style = {
  menu: {
    position: 'absolute',
    top: 15,
    left: 10,
    height: 18,
    width: 27
  },
  more: {
    position: 'absolute',
    top: 15,
    right: 10,
    height: 18,
    width: 27
  },
  navigator: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },

  title: {
    lineHeight: 32,
    fontSize: 15
  }
};

class Route extends Component {
    constructor() {
      super();
    }
    
    navAnimate(toValue) {
      let isToggle = false;

      return (style) => {
        let value = isToggle ? 0 : toValue;
        
        Animated.timing(
           this.props.nav,
           {toValue: value},
         ).start();

        isToggle = !isToggle;
      };
    }

    /**
     * 显示左边的 view, 使用动画效果
     */
    toggleLeftNav() {
      return this.navAnimate(230);
    }

    /**
     * 显示右边的 view, 使用动画效果
     */
    toggleRightNav() {
      return this.navAnimate(-110);
    }
    
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

    routeMapper() {
      var self = this;
      var navigationBarRouteMapper = {
        LeftButton: function(route, navigator, index, navState) {
          let leftNav = self.toggleLeftNav();
          return (
            <TouchableOpacity
              onPress={leftNav.bind(self, 'shadowLeft')}
              style={{width: 100, height: 60}}>
              <Image source={require('../images/menu.png')} style={style.menu}/>
            </TouchableOpacity>
          );
        },

        RightButton: function(route, navigator, index, navState) {
          let rightNav = self.toggleRightNav();
          return (
            <TouchableOpacity
              onPress={rightNav.bind(self, 'shadowRight')}
              style={{width: 100, height: 60}}>
              <Image source={require('../images/more.png')} style={style.more}/>
            </TouchableOpacity>
          );
        },

        Title: function(router, navigator, index, navState) {
          return (
            <Text style={style.title}>
              {router.title}
            </Text>
          );
        },
      };

      return navigationBarRouteMapper;
    }

    render() {
      return (
        <Navigator
          debugOverlay={false}
          initialRoute={{ route: '/', title: 'V2EX' }}
          renderScene={this.renderScene}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={this.routeMapper()}
              style={style.navigator}
            />
          }
        />
      );
    }
}

Route.propTypes = {
  nav: PropTypes.object.isRequired
}

export default Route;
