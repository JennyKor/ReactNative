import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

const [newNum1, setNum1] = useState();
const [newNum2, setNum2] = useState();
const [result, setResult] = useState();

const getNum1Value=(value)=>{
  setNum1(parseFloat(value)); 
}

const getNum2Value=(value)=>{
  setNum2(parseFloat(value));  
}

const sum=()=>{
  setResult(newNum1 + newNum2);
}

const sub=()=>{
  setResult( newNum1 - newNum2);
}

const div=()=>{
  setResult(newNum1 / newNum2);
}

const multi=()=>{
  setResult(newNum1 * newNum2);
}

  return (
    <View style={styles.container1}>
      <View style={styles.formStyle1}>
        <TextInput placeholder="0" keyboardType="numeric" style={styles.inputStyle} onChangeText={getNum1Value} />
        <TextInput placeholder="0" keyboardType="numeric" style={styles.inputStyle} onChangeText={getNum2Value} />
        <Text style={styles.outputStyle}>= {result}</Text>
        <StatusBar style="light" />
      </View>
      <View style={styles.container2}>
        <View style={styles.formStyle2}>
          <Button title=" + "  value="+" onPress={sum}/>
          <Button title=" - " value="-" onPress={sub}/>
        </View>
        <View style={styles.formStyle2}>
          <Button title=" / " value="/" onPress={div}/>
          <Button title=" * " value="*" onPress={multi}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#1e4959',
    padding:40,
    height: '100%'
  },
  container2:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formStyle1:{
    width:'100%',
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formStyle2:{
    backgroundColor:'#1e4959',
    width:'50%',
    flexDirection:'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    marginBottom:10,
  },
  inputStyle:{
    backgroundColor:'#bad3d9',
    borderWidth: 1,
    borderColor: '#1e4959',
    textAlign:'right',
    fontSize:20,
    color:'#011826',
    width:'70%',
    padding: 10,
  },
  outputStyle:{
    backgroundColor:'#bad3d9',
    borderWidth: 1,
    borderColor: '#1e4959',
    textAlign:'right',
    fontSize:28,
    color:'#011826',
    width:'70%',
    padding: 10,
    marginBottom: 30,
  }
});
