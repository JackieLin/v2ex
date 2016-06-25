/**
 * 用户中心
 * @author jackieLin <dashi_lin.com>
 */
'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/userCenter';

import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const style = StyleSheet.create(styles);

class UserCenter extends Component {
    render() {
        return (
            <View style={style.container}>
              <View style={style.avator}>
                  <Image
                    source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}
                    style={style.avatorImg}
                  />
                <Text style={style.userName}>jackieLin</Text>
              </View>

              <View>
                  <View style={style.item}>
                    <Icon name="user" size={20} style={style.itemIcon}/>
                    <Text style={style.itemText}>个人中心</Text>
                  </View>
                  <View style={style.item}>
                    <Icon name="bell-o" size={20} style={style.itemIcon}/>    
                    <Text style={style.itemText}>消息提醒</Text>
                  </View>
                  <View style={style.item}>
                    <Icon name="bell-o" size={20} style={style.itemIcon}/>
                    <Text style={style.itemText}>我的收藏</Text>
                  </View>
                  <View style={[style.item, {marginTop: 10}]}>
                    <Icon name="location-arrow" size={20} style={style.itemIcon}/>    
                    <Text style={style.itemText}>节点</Text>
                  </View>

                  <View style={style.item}>
                    <Icon name="info-circle" size={20} style={style.itemIcon}/>    
                    <Text style={style.itemText}>更多</Text>
                  </View>
              </View>
            </View>
        );
    }
};

export default UserCenter;
