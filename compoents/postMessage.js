/**
 * 用户基本信息
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';
import React, { Component, PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import TimeAgo from './timeAgo';
import v2exStyle from '../styles/v2ex';

const articleListStyles = StyleSheet.create(v2exStyle.articleList);

class PostMessage extends Component {
    constructor() {
        super();
    }

    render() {
        const {post, showComment} = this.props;
        const commentView = showComment ? 
          (<View style={articleListStyles.tag}>
            <Text style={articleListStyles.tagMessage} numberOfLines={1}>{post.node.title}</Text>
            <View style={articleListStyles.comments}>
                <Icon name="comments-o" size={15} style={articleListStyles.commentIcon}/>
             </View>
             <Text style={articleListStyles.num}>{post.replies}</Text>
            </View>) :
            (<View style={articleListStyles.tag}>
              <Text style={articleListStyles.tagMessage} numberOfLines={1}>{post.node.title}</Text>              
            </View>);

        return (
            <View>
                <View style={articleListStyles.userMessage}>
                    <View style={articleListStyles.favicon}>
                      <Image
                        style={articleListStyles.faviconImage}
                        source={{uri: 'http:' + post.member.avatar_normal}}
                        resizeMode={'stretch'}
                      />
                    </View>

                    <View style={articleListStyles.reply}>
                        <Text style={articleListStyles.userName}>{post.member.username}</Text>
                        <TimeAgo style={articleListStyles.time} time={post.last_modified} />
                    </View>

                    {commentView}
                </View>

                <Text style={articleListStyles.text}>{post.title}</Text>
            </View>
        );
    }
};

PostMessage.propTypes = {
  post: PropTypes.object.isRequired,
  showComment: PropTypes.bool.isRequired
}

export default PostMessage;
