import React from 'react'
import {
    View,
    StyleSheet,
}from 'react-native'

function ControlLayout(props){
    return(
        <View style={styles.container}>
            {props.children}
        </View>    
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(0,0,0,.7)',
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        height: 35,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
export default ControlLayout