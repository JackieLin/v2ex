/**
 * v2ex 的 reduces
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';

import { combineReducers } from 'redux'

/**
 * 获取列表 api 的 reduces
 */
let getList = (state = {}, action, key) => {
    let data = {};
    if(action.key === key) {
      // 所有列表数据
      data = {
        items: action.response
      };

      switch (action.type) {
        case 'success':
            return data;
        case 'failure':
            return state;
        default:
            return state;
      }      
    }

    return state;
};

/**
 * 节点相关的 reduces
 */
let node = (state = {}, action) => {
  switch (action.type) {
    case 'nodeId':
        return Object.assign({}, state, {nodeId: action.id});
    default:
        return state;
  }
};

// combineReducers key 和名字要对应
let isFetching = function(state=false, action) {
  switch (action.type) {
    case 'fetching':
        return true;
    case 'success':
        return false;
    case 'failure':
        return false;
    default:
        return state;
  }  
};

let nodeId = node;
let articleList = function(state={}, action) {
    return getList(state, action, 'articleList');
};

let commentList = function(state={}, action) {
  return getList(state, action, 'commentList');
};

let nodeList = function(state={}, action) {
    return getList(state, action, 'nodeList');
};

export default combineReducers({
  isFetching,
  nodeId,
  articleList,
  commentList,
  nodeList
});
