import React from 'react';
import{
    View,
    Text,
    StyleSheet
} from 'react-native';

function SeparadorVertical(props){
    return(
        <View style={[
                styles.separador,
                {
                    borderTopColor: (props.color) ? props.color : '#eaeaea'
                }
            ]}>

                
        </View>
    )
}

const styles = StyleSheet.create({
    separador:{
        borderTopWidth: 1, 
    }
})
export default SeparadorVertical