/**
 * Created by fei on 2017/7/8 16:05.
 * Des: LabelInput
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

// label组件
export const LabelInput = (props) => (
  <View style={styles.detailWrapper}>
    <Text style={styles.detailLabelText}>
      {props.labelText}:
    </Text>
    <View style={styles.detailInputWrapper}>
      <TextInput
        multiline={false}
        value={
          props.inputVal
        }
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
  }
});