import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import NumButtons from './components/NumButtons';
import InputField from './components/InputField';

export default function App() {

const [numberString, setNumberString] = useState('');
const [result, setResult] = useState();

const createNumString = (value) =>{
  setNumberString(numberString + value);
}

const evalNumString = () =>{
  setResult('= ' + eval(numberString));
}

const clearAll = () =>{
  setNumberString('');
  setResult('');
}

  return (
    <View style={styles.container}>
      <View style={styles.allGrouped}>
        <InputField numberString={numberString} />
        <Text style={styles.resultField}>{result}</Text>
        <NumButtons onCreateNumString = {createNumString} onClearAll = {clearAll}/>
        <View style={styles.buttonE}>
          <Button title="=" color="#833b6d" onPress={()=> {evalNumString()}}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  allGrouped:{
    width:'70%',
    flex:1,
    flexDirection: 'column',
    marginTop:80,
  },
  resultField:{
    width:'100%',
    borderWidth:2,
    borderColor:'#f2a5db',
    padding: 10,
    textAlign:'right',
    fontSize:28,
    marginTop:5
  },
  
  buttonE:{
    height:'10%',
    width:'25%',
    flexDirection:'column',
    alignItems:'stretch',
    alignSelf:'flex-end',
    paddingTop:2,
    paddingLeft:5,
    paddingRight:5,
  }
});
