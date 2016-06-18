/**
 * 评论详情
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';
import React, { Component, PropTypes} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import v2exStyle from '../styles/v2ex';
import TimeAgo from './timeAgo';

const articleListStyles = StyleSheet.create(v2exStyle.articleList);

class CommentList extends Component {
    constructor() {
        super();
    }

    render() {
        const {comments} = this.props;
        
        return (
            <View>
                {comments.map((comment, ix) => {
                  return (
                    <View key={ix}>
                      <View style={[articleListStyles.userMessage, {marginTop: 0}]}>
                        <View style={[articleListStyles.favicon, {flex: 8}]}>
                          <Image
                            source={{uri: 'https:' + comment.member.avatar_normal}}
                            style={articleListStyles.faviconImage}
                            resizeMode={'stretch'}
                          />
                        </View>

                        <View style={articleListStyles.reply}>
                            <Text style={articleListStyles.userName}>{comment.member.username}</Text>
                            <TimeAgo style={articleListStyles.time} time={comment.last_modified}></TimeAgo>
                        </View>
                      </View>

                      <Text style={[articleListStyles.text, {fontSize: 14, lineHeight: 20}]}>{comment.content}</Text>
                    </View>
                  )
                })}
            </View>
        );
    }
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList;
