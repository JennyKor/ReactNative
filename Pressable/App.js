import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Pressable} from 'react-native';

import DeleteItem from './components/DeleteItem';

export default function App() {

  const [newFilm, setFilm] = useState('');
  const [filmList, addFilm] = useState([]);
  const [isVisible, setVisibility] = useState(false);

  const filmInputHandler=(enteredText)=>{
    setFilm(enteredText);
  }

  const addFilmToList=()=>{
    addFilm(filmList=>[...filmList, {name:newFilm}]);
    setFilm("");
  }

  const deleteFilm=(filmId)=>{
    addFilm(filmList=>{
      return filmList.filter((film)=> filmList.indexOf(film) !== filmId);
    });
    setVisibility(false);
  }

  const cancelFilm=()=>{
    setVisibility(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.formStyle}>
        <TextInput placeholder="Film title" style={styles.inputStyle1} onChangeText={filmInputHandler} value={newFilm} />
      <View style={styles.buttonStyle}>    
        <Button title="Add" color="#fca311" onPress={addFilmToList} />
      </View> 
      <StatusBar style="light" />
      </View>
      
      <FlatList keyExtractor={item=>filmList.indexOf(item).toString()}
        data={filmList} renderItem={itemData=>(

          <Pressable style={({pressed}) =>[
            {
              backgroundColor: pressed ? '#fca311' : '#e5e5e5',
            },
          ]}
           onPressIn = {()=>setVisibility(true)}>

            <DeleteItem visibility={isVisible} onCancelFilm={cancelFilm} onDeleteFilm={()=> deleteFilm(itemData.index)} />
              <View style={styles.listStyle}>
                <Text style={styles.fontStyle}>{itemData.index+1}. {itemData.item.name}</Text>
              </View>

          </Pressable>    
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#14213d',
    padding: 60,
    height:'100%',
  },
  formStyle: {
    marginTop:20,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',

  },
  inputStyle1:{
    backgroundColor:'#e5e5e5',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    fontSize:16,
    width:'80%',
    padding:5,
    marginBottom: 5,
    marginTop:5,
  },
  buttonStyle:{
    width:'18%',
  },
  listStyle: {
    //backgroundColor:'#e5e5e5',
    padding: 6,
    borderWidth: 2,
    borderColor: '#001526',
  },
  fontStyle:{
    fontSize:16,
    color: '#14213d'
  },
});
