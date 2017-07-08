/**
 * Created by fei on 2017/7/7 .
 * Des: list
 */
import React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  ListView,
  StyleSheet
} from 'react-native';

import * as actions from '../Actions/Action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ListItem from "../Components/ListItem";

// ListScreen组件
class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    // console.log('A',this.props);
    this._renderRow = this._renderRow.bind(this);
  }

  componentDidMount() {
    // 获取列表数据action
    this.props.actions.getList();
    // console.log('获取的属性：', this.props);
  }

  // 渲染列表行数据
  _renderRow(rowData, sectionID, rowID) {
    return (
      <ListItem itemData={rowData}
                itemID={rowID}
                onPressHandle={
                  ()=>{alert('A')}
                }
                deleteHandle={
                  ()=>{this._delete(rowData, sectionID, rowID)}
                }
      />
    );
  }

  // 删除方法
  _delete(rowData, sectionID, rowID) {
    this.props.actions.removeList(rowID);
  }

  render() {
    const {navigate} = this.props.navigation;
    const {listData} = this.props;
    return (
      <View style={styles.container}>
        <ListView
          dataSource={listData}
          renderRow={this._renderRow}
          showsVerticalScrollIndicator={true}
          automaticallyAdjustContentInsets={false}
          enableEmptySections={true}>
        </ListView>
      </View>
    );
  }
}

// 配置导航器
ListScreen.navigationOptions = props => {
  return {
    title: 'List列表示例',
    headerRight: (
      <Button
        color="#ab7a82"
        title='添加'
        onPress={() => props.navigation.navigate('AddScreen')}
      />
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  row: {
    marginTop: 10,
    height: 44,
    backgroundColor: 'white',
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowColor: {
    backgroundColor: 'red',
    width: 4,
    height: 44,
  },
  rowText: {
    marginLeft: 4
  }
});


// 遍历state到属性
function mapStateToProps(state) {
  // console.log('获取到的状态:',state.listReducer.listData)
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return {
    listData: ds.cloneWithRows(state.listReducer.listData)
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
