/**
 * Created by fei on 2017/7/7 .
 * Des: Action
 */
import * as actionType from './ActionType';

// 导入模拟数据
import mockListData from '../MockData/listData.json';

export const getList = () => {
  return {
    type: actionType.GET_LIST,
    getList: mockListData.list
  }
};

export const addList = (itemObj) => {
  return {
    type: actionType.ADD_LIST,
    itemObj
  }
};

export const removeList = (id) => {
  return {
    type: actionType.REMOVE_LIST,
    id: id * 1
  }
};

export const updateList = (id, name, age, gender, hobbies) => {
  return {
    type: actionType.UPDATE_LIST,
    id,
    name,
    age,
    gender,
    hobbies
  }
};
