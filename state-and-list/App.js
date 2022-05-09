import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// export default function App() {
const App = () =>{
  let keyValue = 1;
  
  /* 
  useState returns a pair: the current state and a function to 
  update it. Current state is saved to variable newFish and update 
  function to variable setFish. useState is initialised with a 
  String value.
  3. Entered text is now the value of state variable
  newFish.
  */
  const [newFish, setFish] = useState('');

  // 6. useState initialised with a list. Returns the current state
  // variable and the update function. fishList is now an Array.
  const [fishList, addFish] = useState([]);

  // 2. function gets a value from text input and sets it as a 
  // parameter when calling state setFish.
  const finshInputHandler = (enteredText)=>{
    setFish(enteredText);
  }
  /* 5. addFishToList gets no parameters but returns another function. 
  Calling function addFish that gets a parameter fishList,
   7. and the called function should return a state array with 
   the state variable and add the new state variable at the end of it.
  */
  const addFishToList=()=>{
    addFish(fishList =>[...fishList, newFish]);
  }
  
  return (
    <View style={styles.screen}>
      <View style={styles.formStyle}>
        {/* 1. Event-handler: when input text is changed, a function is called. Passes
        text input as a value to function fishInputHandler*/}
        <TextInput placeholder="Fish name" style={styles.inputStyle}
        onChangeText={finshInputHandler}/>
        {/* 4. Second event-handler. Function addFishToList is called.
        */}
        <Button title = "Add" onPress={addFishToList}/>
        </View>
        <View>
          
          {/* Following is wrapped into an object:
          .map calls the array, finds any objects therein, and creates a new array 
          from them. Function has fish as a parameter, and returns Text class element.
          The element prints a number the object from the array.*/}
          {fishList.map((fish)=><View style={styles.listItemStyle} key = {keyValue++}><Text>{keyValue-1}. {fish}</Text></View>)}
        </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:60,
  },
  formStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: '#00558c',
    padding: 10,
    width: '80%',
  },
  listItemStyle: {
    borderWidth: 1,
    borderColor: '#00939d',
    padding: 5,
    backgroundColor: '#a0d1ca',
  }
});

export default App;