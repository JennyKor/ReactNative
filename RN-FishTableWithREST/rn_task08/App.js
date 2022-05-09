import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import {View, FlatList, StyleSheet, Button} from 'react-native';

import PrintData from './components/PrintData';
import AddData from './components/AddData';

const App = () =>{
  
  const [fishlist, setFishList] = useState([]);
  const [isVisible, setVisibility] = useState(false);

  async function addData(newFish, fishWeight) {
    await fetch("http://10.0.2.2:8080/rest/fishservice/addjsonfish",
    {
      method:'POST',
      headers:{ 'Content-Type': 'application/json' },
      body:JSON.stringify({breed:newFish, weight:fishWeight})
    });
    fetchFish();
    setVisibility(false);
  }

  const cancelAddData=()=>{
    setVisibility(false);
  }

  async function fetchFish() {
    await fetch("http://10.0.2.2:8080/rest/fishservice/getAll")
    .then(parameter => parameter.json())
    .then(anotherParameter => setFishList(anotherParameter));
  }

  useEffect(() =>{
    fetchFish();
  });

  return (
    <View style={styles.background}>
      <StatusBar style="dark" />
      <View style={styles.buttonView}>
        <Button title='Add new fish' color='#f07167' onPress={()=>setVisibility(true)} />
      </View>
      <AddData visibility={isVisible} onAddFish = {addData} onCancelData={cancelAddData} />
      <View style={styles.listWidth}>
        <FlatList keyExtractor={item => fishlist.indexOf(item).toString()} data={fishlist} renderItem={fishData=>
        <PrintData id = {fishlist.indexOf(fishData.item)+1} breed = {fishData.item.breed} weight = {fishData.item.weight} />}
      />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView:{
    width:'40%',
    alignItems:'stretch',
    backgroundColor: '#fed9b7',
    marginTop:'30%',
    paddingBottom:20,
  },
  background:{
    flex:1,
    alignItems:'center',
    backgroundColor: '#fed9b7',
  },
  listWidth:{
    flex:1, // lets you scroll all the way down
    width:'70%',
  }, 
});

export default App;
