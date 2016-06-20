/**
 * 文章列表
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';

const li = {
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12
};

const postdivider = {
    marginTop: 8
}

const userMessage = {
    backgroundColor: '#fff',
    marginTop: 11,
    // 表示使用 flex 布局
    flexDirection: 'row'
};

const favicon = {
    flex: 10
};

const faviconImage = {
    height: 35,
    width: 35,
    borderRadius: 5
};

const reply = {
    flex: 67,
    paddingLeft: 10,
    height: 35
};

const userName = {
    fontSize: 13, 
    color: '#353535',
    fontWeight: '500'
};

const time = {
    fontSize: 12,
    color: '#bcbcbc',
    marginTop: 4
};

const tag = {
    flex: 23,
    flexDirection: 'row',
    height: 20
};

const tagMessage = {
    height: 20,
    fontSize: 10,
    color: '#adadad',
    backgroundColor: '#f2f2f2',
    lineHeight: 15,
    textAlign: 'center',
    flex: 52
};

const comments = {
    flex: 30,
    justifyContent: 'center'
};

const commentIcon = {
    color: '#7a7c80', 
    textAlign: 'center'
};

const num = {
    flex: 18,
    fontSize: 9,
    color: '#adadad',
    lineHeight: 15,
    textAlign: 'center'
};

const text = {
    color: '#0f0f0f',
    fontSize: 17,
    fontWeight: '400',
    marginTop: 14,
    marginBottom: 14
};

const scrollSpinner = {
    marginVertical: 20
};

const noMore = {
    height: 40,
    lineHeight: 30,
    textAlign: 'center',
    color: '#adadad',
    fontSize: 12
};

export default {
    li: li,
    userMessage: userMessage,
    favicon: favicon,
    faviconImage: faviconImage,
    reply: reply,
    userName: userName,
    time: time,
    tag: tag,
    tagMessage: tagMessage,
    comments: comments,
    commentIcon: commentIcon,
    num: num,
    text: text,
    scrollSpinner: scrollSpinner,
    postdivider: postdivider,
    noMore: noMore
};
