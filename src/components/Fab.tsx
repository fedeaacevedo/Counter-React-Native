import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback } from 'react-native'


interface Props {
    title: string,
    onPress: () => void,
    position?: 'br' | 'bl',
}


export const Fab = ({ title, onPress, position = 'br' }: Props) => {
    return (
        <TouchableOpacity
            style={
                (position === 'bl')
                    ? styles.fabLocationBL
                    : styles.fabLocationBR
            }
            onPress={onPress}
        >
            <View style={styles.fab}>
                <Text style={styles.fabText}>
                    {title}
                </Text>
            </View>
       </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
    fab: {
        backgroundColor: '#5856d6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',

    }

})