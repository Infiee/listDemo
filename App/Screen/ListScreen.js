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


// 导入模拟数据
import mockData from '../MockData/listData.json';

import _ from 'lodash';
import ListItem from "../Components/ListItem";

// ListScreen组件
class ListScreen extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        r1 !== r2
      }
    });
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
    this._renderRow = this._renderRow.bind(this);
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mockData.list)
    })
  }

  _renderRow(rowData, sectionID, rowID) {
    return (
      <ListItem itemData={rowData}
                itemID={rowID}
                deleteHandle={ (rowID, rowData) => {
                  this._delete(rowID, rowData)
                } }
      />
    );
  }

  // 删除方法
  _delete(rowID) {
    mockData.list.splice(rowID, 1);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mockData.list)
    })
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
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

export default ListScreen;