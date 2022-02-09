import React from 'react';

import {View, Text, StyleSheet, Button, Modal} from 'react-native';

const DeleteItem=(props)=>{

  const cancelFilm=()=>{
    props.onCancelFilm();
  }

return (
  <Modal visible={props.visibility} animationType='slide'>
    <View style={styles.popUpStyle}>
      <Text>Delete this film from the list?</Text>
        <Button title='Cancel' onPress={cancelFilm} />
        <Button title='Delete' onPress={props.onDeleteFilm} />
    </View>
  </Modal>
)
}

const styles=StyleSheet.create({
    popUpStyle: {
        flex:1,
    },
})
export default DeleteItem;