import React, {useState} from "react";
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const AddData = (props) => {

  const [newFish, setNewFish] = useState('');
  const [fishWeight, setFishWeight] = useState('');

  const fishInput=(enteredText)=>{
    setNewFish(enteredText);
  }
      
  const weightInput=(enteredNumbers)=>{
    setFishWeight(enteredNumbers);
  }

  const addFish=()=>{
    props.onAddFish(newFish, fishWeight);
    setNewFish('');
    setFishWeight('');
  }

  const cancelData=()=>{
    props.onCancelData();
  }

  return(
    <Modal visible={props.visibility} animationType='slide'>
    <View style={styles.groupAll}>
      <View style={styles.formStyle}>
        <TextInput placeholder="Fish" style={styles.inputStyle1} onChangeText={fishInput} value={newFish} />
        <TextInput placeholder="Weight" keyboardType='numeric' style={styles.inputStyle2} onChangeText={weightInput} value={fishWeight} />
      </View>
      <View style={styles.buttonStyle}>
        <View style={styles.button}>
         <Button title="Cancel" color='#0081a7' onPress={cancelData} />
        </View>
        <View style={styles.button}>
         <Button title="Add" color = '#f07167' onPress={addFish} />
         </View>
     </View>
    </View>
  </Modal>
  )

}

const styles = StyleSheet.create({
  groupAll:{
    backgroundColor:'#fed9b7',
    height:'100%',
    alignItems:'center',
    paddingTop:'40%',
  },
  formStyle: {
    width:'80%',
    flexDirection: 'row',
    justifyContent: "space-evenly",
    padding:5,
  },
  buttonStyle:{
    flexDirection:'row',
    width:'60%',
    justifyContent: "space-around",
    marginTop:10,
  },
  button:{
    width:'40%',
  },
  inputStyle1:{
    backgroundColor:'#f07167',
    width:'50%',
    padding:8,
    marginTop:5,
    marginBottom: 15,
    fontSize:18,
  },
  inputStyle2:{
    backgroundColor:'#f07167',
    width:'40%',
    padding:8,
    marginTop:5,
    marginBottom: 15,
    fontSize:18,
  },
})

export default AddData;