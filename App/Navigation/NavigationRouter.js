/**
 * Created by fei on 2017/7/7.
 * Des: 导航器路由控制
 */
import { StackNavigator } from 'react-navigation';

// 列表页
import ListScreen from '../Screen/ListScreen';
// 添加页
import AddScreen from '../Screen/AddScreen';
// 修改详情页
import DetailScreen from '../Screen/DetailScreen';

const ListDemoApp = StackNavigator({
  ListScreen: { screen: ListScreen },
  AddScreen: { screen: AddScreen },
});

export default ListDemoApp;