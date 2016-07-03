/**
 * 路由配置信息
 * @author jackieLin <dashi_lin@163.com>
 */

'use strict';

import React, { Component, PropTypes} from 'react';
import App from './app';
import dismissKeyboard from 'dismissKeyboard';
import PostDetail from './postDetail';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    width: 80, 
    flexDirection: 'row'
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
        case '/detail':
          dismissKeyboard();
          return <PostDetail navigator={nav} post={router.post}/>
        default:
          return <App navigator={nav}/>
      }
    }
    // <Image source={option.icon} style={{width:27, height: 18}}/>
    showLeftIcon(option={}) {
        return (
          <TouchableOpacity
            onPress={option.onPress}
            style={{width: 100, height: 60}}>
            <View style={style.menu}>
              <Icon name={option.icon} size={20} color="#666"/>
              <Text style={{color: '#666', fontSize: 15, marginLeft: 5}}>
                  {option.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
    }
    /**
     * 点击显示用户中心菜单
     */
    showMenu(route, navigator, index, navState) {
        let leftNav = this.toggleLeftNav();
        return this.showLeftIcon({
          icon: 'bars',
          onPress: leftNav.bind(this, 'shadowLeft')
        });
    }
    
    /**
     * 显示返回按钮
     */
    showBack(route, navigator, index, navState) {
        var previousRoute = navState.routeStack[index - 1];
        return this.showLeftIcon({
          icon: 'chevron-left',
          onPress: () => navigator.pop(),
          title: previousRoute.title
        });      
    }

    routeMapper() {
      var self = this;
      var navigationBarRouteMapper = {
        LeftButton: function(route, navigator, index, navState) {
          if(index === 0) {
            return self.showMenu();
          } else {
            return self.showBack(route, navigator, index, navState);
          }
        },

        RightButton: function(route, navigator, index, navState) {
          let rightNav = self.toggleRightNav();
          return (
            <TouchableOpacity
              onPress={rightNav.bind(self, 'shadowRight')}
              style={{width: 100, height: 60}}>
              <Icon name='ellipsis-h' size={20} color="#666" style={style.more}/>
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
