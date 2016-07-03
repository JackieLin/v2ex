/**
 * 帖子详情模块
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';
import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import v2exStyle from '../styles/v2ex';
import PostMessage from './postMessage';
import CommentList from './commentList';
import {getCommentsById} from '../actions/v2ex';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const containerStyles = StyleSheet.create(v2exStyle.container);
const postStyles = StyleSheet.create(v2exStyle.postDetail);

class PostDetail extends Component {
    constructor() { 
      super();
    }
    
    componentDidMount() {
        const {dispatch, post} = this.props;
        dispatch(getCommentsById(post.id));
    }

    render() {
        const {post, comments} = this.props;
        return (
            <ScrollView style={postStyles.container}>
                <View style={postStyles.postMessage}>
                  <PostMessage post={post} showComment={false}/>
                </View>
                <View style={postStyles.divider}></View>
                <View style={[postStyles.postMessage, {marginBottom: 10}]}>
                  <Text style={postStyles.content}>{post.content}</Text>
                </View>

                <View style={postStyles.postscript}>
                  <Text style={postStyles.postscriptText}>第一条附言 ● 3 小时 30 分钟前</Text>
                  <Text>联通 4G,。。。之前</Text>
                </View>

                <View style={[postStyles.postMessage, {marginTop: 27}]}>
                  <Text>33 回复 | 直到 2016-06-02 12:17:26 +08:00</Text>
                </View>
                <View style={[postStyles.divider, {marginTop: 15}]} />
                <View style={postStyles.commentList}>
                    <View style={postStyles.postMessage}>
                        <CommentList comments={comments}/>
                    </View>
                    <View style={postStyles.divider}></View>
                </View>
            </ScrollView>
        );  
    }
};

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { commentList, isFetching = false } = state;
    const {
    items: comments
  } = commentList;

  return {
    isFetching: isFetching,
    comments: comments
  };
}

export default connect(mapStateToProps)(PostDetail);
