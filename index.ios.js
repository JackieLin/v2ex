/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './compoents/app';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  TouchableOpacity,
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
      nav: new Animated.Value(0),
      shadow: styles.shadowLeft
    };
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

  navAnimate(toValue) {
    let isToggle = false;

    return (style) => {
      let value = isToggle ? 0 : toValue;
      
      Animated.timing(
         this.state.nav,
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

  routeMapper() {
    var self = this;
    var navigationBarRouteMapper = {
        LeftButton: function(route, navigator, index, navState) {
          let leftNav = self.toggleLeftNav();
          return (
            <TouchableOpacity
              onPress={leftNav.bind(self, 'shadowLeft')}
              style={{width: 100, height: 60}}>
              <Image source={require('./images/menu.png')} style={{position: 'absolute', top: 15, left: 10, height: 18, width: 27}}/>
            </TouchableOpacity>
          );
        },

        RightButton: function(route, navigator, index, navState) {
          let rightNav = self.toggleRightNav();
          return (
            <TouchableOpacity
              onPress={rightNav.bind(self, 'shadowRight')}
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

      return navigationBarRouteMapper;
  }

  render() {
    // console.warn(JSON.stringify(store.getState()));
    return (
      <Provider store={store}>
          <Image
          source={require('./images/bg.jpg')}
          style={[styles.bg, {width: 375}]}>
              <View style={{position: 'absolute', top: 0, left: 0, width: 230, backgroundColor: 'transparent'}}>
                <View style={{height: 180, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}
                      style={{width: 75, height: 75, borderWidth: 2, borderColor: '#f5f5ea', borderRadius: 38, }}
                      resizeMode={'cover'}
                    />
                  <Text style={{marginTop: 13, fontSize: 15, color: '#353535'}}>jackieLin</Text>
                </View>

                <View>
                    <View style={{height: 55, backgroundColor: 'rgba(255, 255, 255, .3)', flexDirection: 'row', alignItems: 'center', marginTop: 1}}>
                      <Icon name="user" size={20} style={{marginLeft: 22, color: '#49545d', marginRight: 22}}/>    
                      <Text style={{color: '#49545d', fontSize: 15}}>个人中心</Text>
                    </View>
                    <View style={{height: 55, backgroundColor: 'rgba(255, 255, 255, .3)', flexDirection: 'row', alignItems: 'center', marginTop: 1}}>
                      <Icon name="bell-o" size={20} style={{marginLeft: 22, color: '#49545d', marginRight: 22}}/>    
                      <Text style={{color: '#49545d', fontSize: 15}}>消息提醒</Text>
                    </View>
                    <View style={{height: 55, backgroundColor: 'rgba(255, 255, 255, .3)', flexDirection: 'row', alignItems: 'center', marginTop: 1}}>
                      <Icon name="bell-o" size={20} style={{marginLeft: 22, color: '#49545d', marginRight: 22}}/>    
                      <Text style={{color: '#49545d', fontSize: 15}}>我的收藏</Text>
                    </View>
                    <View style={{height: 55, backgroundColor: 'rgba(255, 255, 255, .3)', flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                      <Icon name="location-arrow" size={20} style={{marginLeft: 22, color: '#49545d', marginRight: 22}}/>    
                      <Text style={{color: '#49545d', fontSize: 15}}>节点</Text>
                    </View>

                    <View style={{height: 55, backgroundColor: 'rgba(255, 255, 255, .3)', flexDirection: 'row', alignItems: 'center', marginTop: 1}}>
                      <Icon name="info-circle" size={20} style={{marginLeft: 22, color: '#49545d', marginRight: 22}}/>    
                      <Text style={{color: '#49545d', fontSize: 15}}>更多</Text>
                    </View>
                </View>
              </View>

              <View style={{position: 'absolute', top: 0, right: 0, width: 110, backgroundColor: 'transparent', marginTop: 32}}>
                <View style={{height: 55, marginTop: 1, backgroundColor: 'rgba(255, 255, 255, .4)', paddingRight: 25}}>
                    <Text style={{textAlign: 'right', lineHeight: 38, fontSize: 15, color: '#3c4d57'}}>Technology</Text>
                </View>
                <View style={{height: 55, marginTop: 1, backgroundColor: 'rgba(255, 255, 255, .4)', paddingRight: 25}}>
                    <Text style={{textAlign: 'right', lineHeight: 38, fontSize: 15, color: '#3c4d57'}}>Creative</Text>
                </View>
                <View style={{height: 55, marginTop: 1, backgroundColor: 'rgba(255, 255, 255, .4)', paddingRight: 25}}>
                    <Text style={{textAlign: 'right', lineHeight: 38, fontSize: 15, color: '#3c4d57'}}>Play</Text>
                </View>
              </View>
              <Animated.View 
                style={[styles.container, {transform: [{translateX: this.state.nav}]}, this.state.shadow]}>
                  <Navigator
                    debugOverlay={false}
                    initialRoute={{ route: '/', title: 'V2EX' }}
                    renderScene={this.renderScene}
                    navigationBar={
                      <Navigator.NavigationBar
                        routeMapper={this.routeMapper()}
                        style={{backgroundColor: 'white', flexDirection: 'row'}}
                      />
                    }
                  />
              </Animated.View>
        </Image>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('v2ex', () => v2ex);
