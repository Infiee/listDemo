/**
 * Created by fei on 2017/7/7 .
 * Des: list item组件
 */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // 获取组件上传递过来的属性值
    let rowData = this.props.itemData;

    // 对数据处理
    const sex = rowData.gender != 1 && rowData.gender != 2 ? '未知' : rowData.gender == 1 ? '男性' : '女性';
    const hobbies = rowData.hobbies.join('、');

    return (
      <TouchableOpacity activeOpacity={1}
                        focusedOpacity={1}
                        style={styles.itemWrapper}
                        onPress={ () => alert('B') }>
        <View style={styles.itemHeader}>
          <Text style={styles.itemHeaderText}>
            {rowData.name}的个人信息
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.itemContentText}>姓名：{rowData.name}</Text>
            <Text style={styles.itemContentText}>年龄：{rowData.age}</Text>
            <Text style={styles.itemContentText}>性别：{sex}</Text>
            <Text style={styles.itemContentText}>爱好：{hobbies}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.itemDeleteButton}
                          onPress={this.props.deleteHandle }>
          <Text style={styles.itemDeleteText}>删除</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: '#ddd',
    margin: 10,
    borderRadius: 3,
  },
  itemContainer: {
    padding: 10,
  },
  itemHeader: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  itemHeaderText: {
    color: '#eee',
    fontSize: 13
  },
  itemContentText: {
    marginBottom: 5,
    fontSize: 13,
  },
  itemDeleteButton: {
    height: 30,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  },
  itemDeleteText: {
    fontSize: 14
  }
});

export default ListItem;