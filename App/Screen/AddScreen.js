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
  Alert,
  TouchableOpacity
} from 'react-native';

import * as actions from '../Actions/Action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import CheckBox from 'react-native-check-box';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import {LabelInput} from '../Components/Label';

const checkArray = [{
  checkText: '运动',
  checked: false
}, {
  checkText: '电影',
  checked: false
}, {
  checkText: '美食',
  checked: false
}, {
  checkText: '游戏',
  checked: false
}, {
  checkText: '逛街',
  checked: false
}];

class AddScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      hobbies: checkArray,
      gender: [{label: '男', value: 0}, {label: '女', value: 1}],
      genderValue: 0,
      genderValueIndex: 0,
    }
  }

  // 保存
  _submit() {
    const {goBack} = this.props.navigation;
    if (
      !this.state.name ||
      !this.state.age ||
      !this.state.gender
    ) {
      Alert.alert('请输入完整个人信息', null,
        [{
          text: '确定',
          onPress: () => {
          },
          style: 'cancel'
        }]
      );
      return
    }
    console.log('表单数据：', this.state);
    this.props.actions.addList(this.state);
    goBack();
  }

  // checkbox事件
  _check(id) {
    checkArray[id].checked = !checkArray[id].checked;
    this.setState({
      hobbies: checkArray
    });
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
        }/>
        <View style={[styles.detailWrapper, {alignItems: 'flex-start'}]}>
          <Text style={styles.detailLabelText}>
            性别:
          </Text>
          <RadioForm formHorizontal={true} animation={true}>
            {this.state.gender.map((obj, i) => {
              const onPressHandle = (value, index) => {
                this.setState({
                  genderValue: value,
                  genderValueIndex: index
                })
              };
              return (
                <RadioButton labelHorizontal={true} key={i}>
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={this.state.genderValueIndex === i}
                    onPress={onPressHandle}
                    buttonInnerColor={'#ab7a82'}
                    buttonOuterColor={this.state.genderValueIndex === i ? '#888' : '#888'}
                    buttonSize={10}
                    buttonOuterSize={18}
                    borderWidth={2}
                    buttonStyle={{}}
                    buttonWrapStyle={{marginLeft: 10}}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={onPressHandle}
                    labelStyle={{fontSize: 16, color: '#000'}}
                    labelWrapStyle={{}}
                  />
                </RadioButton>
              )
            })}
          </RadioForm>
          {/*<Text>selected: {this.state.gender[this.state.genderValueIndex].label}</Text>*/}
        </View>

        <View style={[styles.detailWrapper, {alignItems: 'flex-start'}]}>
          <Text style={styles.detailLabelText}>
            喜好:
          </Text>
          <View style={styles.labelCheckBox}>
            {
              this.state.hobbies.map((item, idx) => (
                <CheckBox key={idx}
                          style={styles.detailCheckBox}
                          isChecked={item.checked }
                          onClick={() => this._check(idx)}
                          leftText={item.checkText}
                />
              ))
            }
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
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  detailCheckBox: {
    width: 90,
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);