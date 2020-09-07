import React ,{Component} from 'react';
import{
    Text
}from 'react-native'
import {connect} from 'react-redux'

import Api from '../Utils/api'
import Home from './screens/containers/Home';
import Header from './sections/components/Header';
import Sugerencias from './videos/containers/Sugerencias';
import Categorias from './videos/containers/Categorias';
import Movie from './screens/containers/Movie'
import Buscador from './sections/containers/Buscador'

class AppLayout extends Component{
    async componentDidMount(){
        const categoryList =  await Api.getMovies();
        this.props.dispatch({
          type:'SET_CATEGORY_LIST',
          payload:{
            categoryList
          }
        })
        
        const suggestionList =  await Api.getSugerencias(10);
        this.props.dispatch({
          type:'SET_SUGGESTON_LIST',
          payload:{
            suggestionList
          }
        })
    }
    render(){
        if(this.props.selectedMovie){
          return(
            <Movie />
          )
        }else{
          return(
            <Home>
                <Header/>
                <Buscador />
                <Categorias/>
                <Sugerencias/>  
            </Home>
          )
        }
    }
}

function mapStateToProps(state){
  return{
    selectedMovie: state.selectedMovie,
  }
}
export default connect(mapStateToProps)(AppLayout);