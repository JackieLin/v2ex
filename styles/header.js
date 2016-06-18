'use strict';

const container = {
  paddingTop: 20,
  height: 43,
  backgroundColor: '#f6f6f7',
  flexDirection: 'row',
  position: 'relative',
  borderBottomWidth: 2,
  borderColor: '#c0c0c0'
};

const title = {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    color: '#0f0f0f'
};

const bars = {
  position: 'absolute',
  left: 15,
  top: 22,
};

const ellipsis = {
  position: 'absolute',
  right: 15,
  top: 22,
};

export default {
  container: container,
  bars: bars,
  ellipsis: ellipsis,
  title: title
};
