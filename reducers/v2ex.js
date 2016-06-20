/**
 * v2ex 的 reduces
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';

const list = (state = {}, action) => {
  let data = {};
  data[action.key] = {
    items: action.response
  };
  
  switch (action.type) {
    case 'fetching':
        return Object.assign({}, state, {isFetching: true});
    case 'success':
        return Object.assign({}, state, data, {isFetching: false});
    case 'failure':
        return Object.assign({}, state, {isFetching: false});
    default:
        return state;
  }
};

export default list;
