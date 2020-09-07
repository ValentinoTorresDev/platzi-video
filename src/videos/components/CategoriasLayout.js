import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
} from 'react-native';

function CategoriasLayout(props){
    return(
        <ImageBackground 
            style={styles.container}
            source= {require('../../../assets/background.png')}
        > 
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </ImageBackground>
    )
}

const styles =StyleSheet.create({
    container:{
        paddingVertical: 40,
        paddingHorizontal: 10,
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    }
})

export default CategoriasLayout ;