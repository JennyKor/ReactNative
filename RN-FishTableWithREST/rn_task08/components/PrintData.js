import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const PrintData = (props) =>{

return(
    <View style={styles.listStyle}>
          <Text style={styles.itemStyle}>{props.id}: {props.breed} / {props.weight} kg</Text>
        </View>
)

}

const styles = StyleSheet.create({
    listStyle: {
        alignSelf: 'center',
        width: '100%',
        marginTop:2,
        backgroundColor:'#fdfcdc',
        borderBottomWidth:2,
        borderColor:'#0081a7',
        padding:7,
    },
    itemStyle:{
        fontSize:16,
        fontFamily: 'monospace',
        color:'#0081a7',
    },
})

export default PrintData;