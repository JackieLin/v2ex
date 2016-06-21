/**
 * v2ex 的公共样式
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';

import header from './header';
import flex from './flex';
import articleList from './articleList';
import postDetail from './postDetail';

const container = {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f2f3f5'
};

const main = {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#f2f3f5'
};

export default {
    container: {
        container: container,
        main: main
    },
    flex: flex,
    header: header,
    articleList: articleList,
    postDetail: postDetail,
};
