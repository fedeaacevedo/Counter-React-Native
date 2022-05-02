import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);


  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Contador: {contador}
        </Text>

      <TouchableOpacity 
        onPress={() => setContador (contador + 1)}
      >
           <View style={styles.botonIncrementar}>
               <Text>
                   +1
                </Text>
           </View>
      </TouchableOpacity>

        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },
    title:{
        textAlign:'center',
        fontSize: 40,
        color:'black'
    },
    botonIncrementar:{
        backgroundColor:'grey',
        borderRadius: 100
    }
})