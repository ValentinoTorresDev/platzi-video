import React, {Component} from 'react'
import{
    TextInput,
    StyleSheet,
}from 'react-native'
import Api from '../../../Utils/api'
import {connect} from 'react-redux'

class Buscador extends Component{
    state ={
        text: '',
    }
    handleSubmit = async () => {
        const movies = await Api.searchMovie(this.state.text);
        console.log(movies);
        this.props.dispatch({
            type : 'SET_SELECTED_MOVIE',
            payload:{
                movie: movies[0]
            }
        })
    }
    handleChange =(text) =>{
        this.setState({
            text
        })
    }
    render(){
        return(
            <TextInput
                placeholder='Busca tu película favorita'
                autoCorrect= {false}
                autoCapitalize= 'none'
                underlineColorAndroid= 'transparent'
                onSubmitEditing={this.handleSubmit}
                onChangeText={this.handleChange}
                style = {styles.input }
            />
        )
    }
}
const styles = StyleSheet.create({
    input:{
        padding: 15,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#eaeaea'
    }
})
export default connect(null)(Buscador);