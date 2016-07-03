/**
 * v2ex APP 主页信息
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';
import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import PostCell from './postCell';
import {getLastTopics} from '../actions/v2ex';
import v2exStyle from '../styles/v2ex';
import {
  ActivityIndicatorIOS,
  TouchableHighlight,
  ProgressBarAndroid,
  StyleSheet,
  Platform,
  Text,
  ListView,
  RefreshControl,
  View
} from 'react-native';

const containerStyles = StyleSheet.create(v2exStyle.container);
const headerStyles = StyleSheet.create(v2exStyle.header);
const articleListStyles = StyleSheet.create(v2exStyle.articleList);

class App extends Component {
    constructor() { 
      super();

      // 初始化 post 信息
      this.postListView = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      });
    }
    
    componentDidMount() {
        // <View style={headerStyles.container}>
        //   <Text style={headerStyles.title}>V2EX</Text>
        //   <Icon name="bars" size={15} color="#666" style={headerStyles.bars}/>
        //   <Icon name="ellipsis-h" size={15} color="#666" style={headerStyles.ellipsis}/>
        // </View>

        // <Text style={articleListStyles.time}>1 小时 30 分钟前 • 最后回复 shiji</Text>
        const {dispatch} = this.props;
        dispatch(getLastTopics());
    }
  
    /**
     * 获取数据源
     */
    getDataSource(post: Array<any>):ListView.DataSource {
      if(post.length) {
        this.postListView = this.postListView.cloneWithRows(post);
      }
      
      return this.postListView;
    }
    
    /**
     * 下拉结束，刷新
     */
    onEndReached() {
    }

    /**
     * 渲染下拉底部
     */
    renderFooter() {
      if (Platform.OS === 'ios') {
        // return <ActivityIndicatorIOS style={articleListStyles.scrollSpinner} />;
        return <Text style={articleListStyles.noMore}>没有更多数据了 (*^ω^*)</Text>
      } else {
        return (
          <View style={{alignItems: 'center'}}>
            <ProgressBarAndroid styleAttr="Large"/>
          </View>
        );
      }
    }
    
    selectPost(post) {
        this.props.navigator.push({
          title: '帖子详情',
          route: '/detail',
          post: post,
        });
    }

    renderRow(
      post: Object,
      sectionID: number | string,
      rowID: number | string,
      highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
    ) {
      return (
        <PostCell 
          key={post.id}
          post={post}
          onSelect={() => this.selectPost(post)}
          onHighlight={() => highlightRowFunc(sectionID, rowID)}
          onUnhighlight={() => highlightRowFunc(null, null)}
        />
      );
    }
    
    _onRefresh() {
      // 重新刷新代码
      const {dispatch} = this.props;
      dispatch(getLastTopics());
    }

    render() {
        let {posts, isFetching} = this.props;
        
        this.getDataSource(posts);
        
        var content = this.postListView.getRowCount() === 0 ?
          <View /> :
          <ListView ref="post"
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={this._onRefresh.bind(this)}
              title={'下拉刷新'}
              tintColor='#ccc'
            />
          }
          dataSource={this.postListView} 
          renderRow={this.renderRow.bind(this)} 
          renderFooter={this.renderFooter} 
          onEndReached={this.onEndReached}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false}
        />;
        
        return (
            <View style={containerStyles.container}>
              <View style={containerStyles.main}>
                  {content}
              </View>
            </View>
        );
    }
};


App.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  navigator: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const { articleList, isFetching } = state;
  const {
    items: posts
  } = articleList;
  return {
    posts,
    isFetching
  }
}

export default connect(mapStateToProps)(App);
