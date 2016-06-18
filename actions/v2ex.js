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
