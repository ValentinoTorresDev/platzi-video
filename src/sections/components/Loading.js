import React from 'react'
import{
    Image,
    View,
    ActivityIndicator,
    StyleSheet,
}from 'react-native'

function Loading(){
    return(
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('../../../assets/logo.png')}
            />
            <ActivityIndicator />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#fff',
    },  
    logo:{
        marginBottom: 10,
        width: 200,
        height: 80,
        resizeMode: 'contain',
    }
})

export default Loading