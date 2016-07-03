/**
 * 节点列表
 * @author jackie Lin <dashi_lin@163.com>
 */
'use strict';

import React, { Component } from 'react';
import styles from '../styles/nodes';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const style = StyleSheet.create(styles);

class Nodes extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.item}>
                    <Text style={style.itemText}>Technology</Text>
                </View>
                <View style={style.item}>
                    <Text style={style.itemText}>Play</Text>
                </View>
            </View>
        );
    }
};

export default Nodes;
