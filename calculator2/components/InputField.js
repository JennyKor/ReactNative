import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const InputField = (props) =>{

  return (
    <Text style={styles.numberField}>{props.numberString}</Text>
    )

}
const styles = StyleSheet.create({
  numberField:{
    width:'100%',
    backgroundColor:'#fff',
    borderWidth:2,
    borderColor:'#f2a5db',
    padding: 10,
    textAlign:'right',
    fontSize:20,
  },
})

export default InputField;
