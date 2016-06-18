/**
 * 时间空间渲染
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';
import React, { Component, PropTypes} from 'react';
import {Text} from 'react-native';

class TimeAgo extends Component {
    /**
     * 时间转换
     */
    dateTransform() {
        const {time} = this.props;
        let distance = (Date.now() - time * 1000)/1000;
        const denary = {
            year: 60 * 60 * 24 * 365,
            month: 60 * 60 * 24 * 30,
            day: 60 * 60 * 24,
            hour: 60 * 60,
            minute: 60,
            second: 1
        }
        
        let date = {};

        for(let key in denary) {
            let value = parseInt(distance/denary[key]);
            if(value) {
                date[key] = value;
                distance = distance%denary[key];
            } else {
                date[key] = 0;
            }
        }
        return date;
    }

    render() {
        const date = this.dateTransform();
        let text = '';
        if(date.year) {
            text += date.year + '年';
        }

        if(date.month) {
            text += date.month + '月';
        }

        if(date.day) {
            text += date.day + '日';            
        }

        if(date.minute) {
            text += date.minute + '分';            
        }
        if(date.second) {
            text += date.second + '秒';            
        }

        return (
          <Text style={this.props.style}>{text}前 {this.props.children}</Text>
        );
    }
};

TimeAgo.propTypes = {
    style: PropTypes.number.isRequired, 
    time: PropTypes.number.isRequired
}

export default TimeAgo;
