import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const ContadorScreen = () => {

    const [contador, setContador] = useState(10);


  return (
    <View style={{
        flex: 1,
        justifyContent:'center'
    }}>
        <Text style={{
            textAlign:'center',
            fontSize: 40,
            color:'black'
        }}>
            Contador: {contador}
        </Text>

        <Button 
            title='Click'
            onPress={ () => setContador ( contador + 1)}
        />

        
    </View>
  )
}

export default ContadorScreen