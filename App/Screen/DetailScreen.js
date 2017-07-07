/**
 * Created by fei on 2017/7/7 .
 * Des: list
 */
import React from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  ScrollView,
  Button
} from 'react-native';

import CheckBox from 'react-native-check-box';

// label组件
const LabelInput = (props) => (
  <View style={styles.detailWrapper}>
    <Text style={styles.detailLabelText}>
      {props.labelText}:
    </Text>
    <View style={styles.detailInputWrapper}>
      <TextInput
        multiline={false}
        style={styles.textInput}
        value={1}
        placeholder={`请输入${props.labelText}`}
        returnKeyType='done'
      />
    </View>
  </View>
);


class ListDetailScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{flex: 1,}}>
        <LabelInput labelText="姓名"/>
        <LabelInput labelText="年龄"/>
        <LabelInput labelText="性别"/>
        <View style={[styles.detailWrapper, {alignItems: 'flex-start'}]}>
          <Text style={styles.detailLabelText}>
            喜好:
          </Text>
          <View style={styles.labelCheckBox}>
            <View style={styles.labelCheckBoxRow}>
              <CheckBox style={styles.detailCheckBox}
                        leftText={'运动'}
              />
              <CheckBox style={styles.detailCheckBox}
                        leftText={'电影'}
              />
              <CheckBox style={styles.detailCheckBox}
                        leftText={'美食'}
              />
            </View>
            <View style={styles.labelCheckBoxRow}>
              <CheckBox style={styles.detailCheckBox}
                        leftText={'游戏'}
              />
              <CheckBox style={styles.detailCheckBox}
                        leftText={'逛街'}
              />
              <View style={styles.detailCheckBox}></View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

// 配置导航器
ListDetailScreen.navigationOptions = props => {
  return {
    title: '详情',
    headerRight: (
      <Button
        color="#ab7a82"
        title='保存'
        onPress={() => props.navigation.navigate('ListDetailScreen')}
      />
    )
  }
};

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  textInput: {
    marginRight: 10,
    height: 34,
    fontSize: 14,
    color: '#333'
  },
  detailLabelText: {
    marginRight: 10
  },
  detailInputWrapper: {
    flex: 1,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 3
  },
  labelCheckBox: {
    flex: 1,
    flexDirection: 'column',
  },
  labelCheckBoxRow: {
    flex: 1,
    flexDirection: 'row'
  },
  detailCheckBox: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10
  }
});

export default ListDetailScreen;