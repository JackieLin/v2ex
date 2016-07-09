/**
 * markdown 语法
 * @author jackieLin <dashi_lin@163.com>
 * @example
 *  <Markdown source="" />
 */
'use strict';
import React, { Component, PropTypes} from 'react';
import marked, { Parser } from 'marked';
import {View, Text, WebView} from 'react-native'

class Markdown extends Component {
    constructor() {
        super();
        this.state = {
            height: 100
        }        
    }

    render() {
        const {source} = this.props;
        const html = `<html>
                        <style>img {max-width: 100%;}</style>
                        <body>
                            <div class="main">
                                ${marked(source)}
                            </div>
                        </body>
                        <script>window.location.hash=1; document.title = document.querySelector('.main').getBoundingClientRect().height + 50;</script>
                      </html>`;
        return (<WebView
                 source={{html: html}}
                 automaticallyAdjustContentInsets={false}
                 scrollEnabled={false}
                 style={{padding: 0, width: 375, height: this.state.height}}
                 onNavigationStateChange={ (navState) => {
                    if(navState.title) {
                        this.setState({
                            height: Number(navState.title)
                        });
                    }
                 }}
               />);
    }
};

Markdown.propTypes = {
  source: PropTypes.string.isRequired
};

export default Markdown;
