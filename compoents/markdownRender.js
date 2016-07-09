/**
 * markdown 渲染解析
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';
import marked, { Renderer, Parser, InlineLexer } from 'marked';
import {View, Text, WebView, Image} from 'react-native'
import React, { Component} from 'react';

let renderer = new Renderer();

/**
 * 重写 paser, 支持 react native 的返回
 */
export const parse = function(src) {
    this.inline = new InlineLexer(src.links, this.options, this.renderer);
    this.tokens = src.reverse();

    var out = [];
    while (this.next()) {
      out.push(this.tok());
    }
    
    return out;
};

/**
 * 段落重构
 */
renderer.paragraph = function(text, type) {
    return (
        <Text
          style={{color: '#0a0a0a', fontSize: 13, lineHeight: 22}}>
            {text}
        </Text>
    );
};

renderer.link = function(href, title, text) {
    return React.createElement(Text, {
          style: {color: 'blue', fontSize: 13, lineHeight: 22}
        }, text);
};

renderer.image = function(href, title, text) {
    return React.createElement(Image, {
          source: {uri: href},
          width: 100,
          height: 100
        });
};

export default renderer;
