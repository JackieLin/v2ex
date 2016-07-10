/**
 * v2ex actions
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';
import { CALL_API } from '../middleware/api';

/**
 * 获取详情
 */
function fetchLatestTopics() {
  return {
    [CALL_API]: {
      types: [ 'fetching', 'success', 'failure', 'articleList' ],
      endpoint: '/topics/latest.json'
    }
  }
}

/**
 * dispatch
 */
function dispatchApi(api) {
  return (dispatch, getState) => {
    return dispatch(api);
  }
};

export function getLastTopics(data={}) {
  return dispatchApi(fetchLatestTopics(data));
};

/**
 * 根据 文章 id 获取
 */
export function getCommentsById(id) {
  return dispatchApi({
    [CALL_API]: {
      types: [ 'fetching', 'success', 'failure', 'commentList' ],
      endpoint: '/replies/show.json?topic_id=' + id
    },
  });
};

/**
 * 获取所有节点数据
 */
export function getAllNodes(id) {
  return dispatchApi({
    [CALL_API]: {
      types: [ 'fetching', 'success', 'failure', 'nodeList' ],
      endpoint: '/nodes/all.json'
    },
  });
};

/**
 * 修改 node id
 */
export function setNodeId(id) {
  return dispatchApi({
      type: 'nodeId',
      id: id
  });
};
