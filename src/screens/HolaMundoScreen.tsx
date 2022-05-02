import React from 'react'
import { View, Text } from 'react-native'

const HolaMundoScreen = () => {
  return (
    <View style={{
        flex: 1,
        // backgroundColor: 'red',
        justifyContent:'center'
      }}>
        <Text style={{
          fontSize: 45, 
          textAlign:'center',
          color:'black'
        }}>
            Hola Mundo desde el nuevo componente
        </Text>
      </View>
  )
}

export default HolaMundoScreen