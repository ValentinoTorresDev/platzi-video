import React,{Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import SugerenciasLayout from '../components/SugerenciasLayout';
import Empty from '../components/Empty';
import SeparadorVertical from '../components/SeparadorVertical'
import Sugerencia from '../components/Sugerencia';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return{
        list: state.suggestionList
    }
}

class Sugerencias extends Component{
    renderVacio = () => <Empty text='No hay sugerencias :('/>;
    itemSeparador = () => <SeparadorVertical />;
    viewMovie = (item) => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item,
            }
        })
    }
    renderItem = ({item}) => {
        return(
            <Sugerencia {...item}
                onPress={() =>{this.viewMovie(item)}}
            />
        )
    }
    keyExtractor = item =>  item.id.toString();
    render(){
        return(
            <SugerenciasLayout
                title = 'Recomendado para ti'
            >
                <FlatList
                    keyExtractor ={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent= {this.renderVacio}
                    ItemSeparatorComponent={this.itemSeparador}
                    renderItem={this.renderItem}
                />
            </SugerenciasLayout>
        )
    }
}

export default connect(mapStateToProps) (Sugerencias)