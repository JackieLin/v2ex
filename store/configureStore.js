/**
 * 中间件配置
 * @author jackieLin <dashi_lin@163.com>
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../middleware/api';
import store from '../reducers/v2ex';

export default function configureStore(initialState) {  
  return createStore(
    store,
    initialState,
    applyMiddleware(thunk, api)
  )
}
