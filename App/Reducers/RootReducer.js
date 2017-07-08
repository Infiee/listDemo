/**
 * Created by fei on 2017/7/8 10:14.
 * Des: RootReducer
 */

import * as actionType from '../Actions/ActionType';
import {combineReducers} from 'redux';

const initListDataState = {
  listData: []
};

const listReducer = (state = initListDataState, action) => {
  switch (action.type) {
    // 获取列表数据
    case actionType.GET_LIST:
      return {
        ...state,
        listData: action.getList
      };

    // 对列表数据添加
    case actionType.ADD_LIST:
      const tempArray = [];
      action.itemObj.gender = action.itemObj.genderValue + 1;
      delete action.itemObj.genderValue;
      delete action.itemObj.genderValueIndex;
      action.itemObj.hobbies.map(function (item, idx) {
        if(item.checked){
          tempArray.push(item.checkText);
        }
      });
      action.itemObj.hobbies = tempArray;
      state.listData.push(action.itemObj);
      return {...state};

    // 对列表数据移除
    case actionType.REMOVE_LIST:
      state.listData.splice(action.id, 1);
      // 核心，解构state内的属性，返回新对象
      return {...state};

    // 更新列表数据
    case  actionType.UPDATE_LIST:
      const newArray = [];
      state.map(t => {
        if (t.id !== action.id) {
          newArray.push(t);
        }
      });
      return newArray;
    default:
      return state
  }
};

// 合并reducer
const AppReducer = combineReducers({
  listReducer
});

export default AppReducer;