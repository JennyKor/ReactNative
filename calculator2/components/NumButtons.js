import React from "react";
import { StyleSheet, View, Button } from "react-native";

const NumButtons = (props) => {

  return (
    <View style={styles.buttonRows}>
      <View style={styles.buttonColumns}>
        <Button title="1" color="#833b6d" onPress={() => { props.onCreateNumString("1") }} />
        <Button title="4" color="#833b6d" onPress={() => { props.onCreateNumString("4") }} />
        <Button title="7" color="#833b6d" onPress={() => { props.onCreateNumString("7") }} />
        <Button title="C" color="#833b6d" onPress={() => { props.onClearAll() }} />
      </View>
      <View style={styles.buttonColumns}>
        <Button title="2" color="#833b6d" onPress={() => { props.onCreateNumString("2") }} />
        <Button title="5" color="#833b6d" onPress={() => { props.onCreateNumString("5") }} />
        <Button title="8" color="#833b6d" onPress={() => { props.onCreateNumString("8") }} />
        <Button title="0" color="#833b6d" onPress={() => { props.onCreateNumString("0") }} />
      </View>
      <View style={styles.buttonColumns}>
        <Button title="3" color="#833b6d" onPress={() => { props.onCreateNumString("3") }} />
        <Button title="6" color="#833b6d" onPress={() => { props.onCreateNumString("6") }} />
        <Button title="9" color="#833b6d" onPress={() => { props.onCreateNumString("9") }} />
        <Button title="," color="#833b6d" onPress={() => { props.onCreateNumString(".") }} />
      </View>
      <View style={styles.buttonColumns}>
        <Button title="+" color="#833b6d" onPress={() => { props.onCreateNumString("+") }} />
        <Button title="-" color="#833b6d" onPress={() => { props.onCreateNumString("-") }} />
        <Button title="*" color="#833b6d" onPress={() => { props.onCreateNumString("*") }} />
        <Button title="/" color="#833b6d" onPress={() => { props.onCreateNumString("/") }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonColumns: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: 5,
    paddingRight: 5,
  },
  buttonRows: {
    height: '30%',
    flexDirection: 'row',
    marginTop: 10,
  },
})

export default NumButtons;