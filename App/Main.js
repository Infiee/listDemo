/**
 * Created by fei on 2017/7/7
 * Des: App主入口
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import AppReducer from './Reducers/RootReducer';
import AppWithNavigationState from './Navigation/NavigationRouter';

const store = createStore(AppReducer);

// 不需要对状态处理，用纯函数
const ListDemoApp = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default ListDemoApp;