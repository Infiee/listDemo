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
  Button,
  TouchableOpacity
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
        onChangeText={
          props.changeHandle
        }
        placeholder={`请输入${props.labelText}`}
        returnKeyType='done'
      />
    </View>
  </View>
);

class AddScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      gender: '',
      hobbies: []
    }
  }

  _submit() {
    const {navigate,goBack} = this.props.navigation;
    console.log('C',this.state)
    goBack()
  }

  _check(data) {
    this.state.hobbies.push(data);
  }

  render() {


    return (
      <ScrollView style={{flex: 1,}}>
        <LabelInput labelText="姓名" changeHandle={
          (text) => {
            this.setState({
              name: text
            })
          }
        }/>
        <LabelInput labelText="年龄" changeHandle={
          (text) => {
            this.setState({
              age: text
            })
          }
        }
        />
        <LabelInput labelText="性别" changeHandle={
          (text) => {
            this.setState({
              gender: text
            })
          }
        }/>
        <View style={[styles.detailWrapper, {alignItems: 'flex-start'}]}>
          <Text style={styles.detailLabelText}>
            喜好:
          </Text>
          <View style={styles.labelCheckBox}>
            <View style={styles.labelCheckBoxRow}>
              <CheckBox style={styles.detailCheckBox}
                        onClick={ () => this._check('运动') }
                        leftText={'运动'}
              />
              <CheckBox style={styles.detailCheckBox}
                        onClick={ () => this._check('电影') }
                        leftText={'电影'}
              />
              <CheckBox style={styles.detailCheckBox}
                        onClick={ () => this._check('美食') }
                        leftText={'美食'}
              />
            </View>
            <View style={styles.labelCheckBoxRow}>
              <CheckBox style={styles.detailCheckBox}
                        onClick={ () => this._check('游戏') }
                        leftText={'游戏'}
              />
              <CheckBox style={styles.detailCheckBox}
                        onClick={ () => this._check('逛街') }
                        leftText={'逛街'}
              />
              <View style={styles.detailCheckBox}></View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.submitWrapper}
                          onPress={() => {
                            this._submit()
                          }}>
          <Text style={styles.submitText}>
            保存
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

// 配置导航器
AddScreen.navigationOptions = props => {
  return {
    title: '添加个人信息'
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
  },
  submitWrapper: {
    backgroundColor: '#ab7a82',
    marginHorizontal: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 20
  },
  submitText: {
    color: '#fff',
    fontSize: 16
  }
});

export default AddScreen;