/**
 * 节点列表
 * @author jackie Lin <dashi_lin@163.com>
 */
'use strict';

import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import styles from '../styles/nodes';
import {getAllNodes, setNodeId} from '../actions/v2ex'

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

const style = StyleSheet.create(styles);

class Nodes extends Component {
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(getAllNodes());
    }
    
    onSelect(id) {
        dispatch(setNodeId(id));
    }

    render() {
        const {nodes} = this.props;

        return (
            <View style={style.container}>
                {nodes.map((v) => {
                    return (
                        <TouchableOpacity key={v.id}
                            onPress={() => { this.onSelect.bind(this, v.id)}}>
                            <View style={style.item}>
                                <Text style={style.itemText}>{v.title}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
};

Nodes.propTypes = {
  nodes: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  const { nodeList, isFetching } = state;
  let {
    items: nodes
  } = nodeList;

  nodes = nodes || [];

  nodes.sort(function(a, b) {
    return b.topics - a.topics;
  });

  nodes = nodes.slice(0, 9);
  nodes.unshift({
    id: -1,
    title: '全部'
  });
  return {
    nodes,
    isFetching
  }
}

export default connect(mapStateToProps)(Nodes);
