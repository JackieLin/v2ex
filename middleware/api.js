/**
 * server 中间件信息
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';
// api 根目录
const API_ROOT = 'http://www.v2ex.com/api';

const geneError = function(data, response={}) {
  const error = new Error(data);
  error.response = response;
  return error;
};

/**
 * ajax 请求信息
 */
function ajax(url, config={}) {
  const fullUrl = (url.indexOf(API_ROOT) === -1) ? API_ROOT + url : url;
  
  const dConfig = {
    method: 'GET'
  };

  let init = Object.assign({}, dConfig, config);

  return fetch(fullUrl, init)
    .then(response =>
      response.json().then((data) => {
          return {data, response};  
        })
      ).then(({ data, response }) => {
        if (!response.ok) {
          throw geneError(data, response);
        }

        return data;

    }).catch(function(error) {
      throw geneError(error);
    })
};

export const CALL_API = Symbol('Call API');

/**
 * 中间件
 */
export default store => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }
  let { endpoint, types } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [ requestType, successType, failureType, key ] = types;
  next(actionWith({ type: requestType }));

  return ajax(endpoint, CALL_API.config).then(
    response => {
      next(actionWith({
        response,
        type: successType,
        key: key
      }))
    },
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
};
