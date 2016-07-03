/**
 * 用户中心
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';

export default {
    container: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: 230, 
        backgroundColor: 'transparent'
    },

    avator: {
        height: 180,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    avatorImg: {
        width: 75,
        height: 75,
        borderWidth: 2,
        borderColor: '#f5f5ea',
        borderRadius: 38,
        resizeMode: 'cover'
    },

    userName: {
        marginTop: 13,
        fontSize: 15,
        color: '#353535'
    },

    item: {
        height: 55,
        backgroundColor: 'rgba(255, 255, 255, .3)',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1
    },

    itemIcon: {
        marginLeft: 22,
        color: '#49545d',
        marginRight: 22
    },

    itemText: {
        color: '#49545d',
        fontSize: 15
    }
};
