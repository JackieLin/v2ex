/**
 * 文章标题
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';
import React, { Component, PropTypes} from 'react';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
  View
} from 'react-native';
import PostMessage from './postMessage';
import v2exStyle from '../styles/v2ex';

const articleListStyles = StyleSheet.create(v2exStyle.articleList);

class PostCell extends Component {
    constructor() {
        super();
    }
    
    render() {
        const {post, onHighlight, onUnhighlight, onSelect} = this.props;

        var TouchableElement = TouchableHighlight;
        if (Platform.OS === 'android') {
          TouchableElement = TouchableNativeFeedback;
        }
        
        return (
          <View style={articleListStyles.postdivider}>
              <TouchableElement
                onPress={onSelect}
                onShowUnderlay={onHighlight}
                onHideUnderlay={onUnhighlight}>
                  <View style={articleListStyles.li}>
                    <PostMessage post={post} showComment={true} />
                  </View>
              </TouchableElement>
          </View>
        );
    }
};

PostCell.propTypes = {
  post: PropTypes.object.isRequired,
  onHighlight: PropTypes.func.isRequired,
  onUnhighlight: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default PostCell;
