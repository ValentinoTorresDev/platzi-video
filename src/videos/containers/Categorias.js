import React,{ Component } from 'react'
import {
    View,
    FlatList,
    Text,
    StyleSheet
} from 'react-native';

function mapStateToProps(state){
    return {
        list: state.categoryList
    }
}

import Empty from '../components/Empty';
import SeparadorHorizontal from '../components/SeparadorHorizontal'
import Categoria from '../components/Categoria';
import CategoriasLayout from '../components/CategoriasLayout';
import  {connect} from 'react-redux'

class Categorias extends Component{
    keyExtractor = item =>  item.id.toString();
    renderVacio = () => <Empty text='No hay sugerencias :('/>;
    itemSeparador = () => <SeparadorHorizontal />;
    renderItem = ({item}) => {
        return(
            <Categoria {...item}/>
        )
    }
    render(){
        return(
            <CategoriasLayout
                title = 'Categorrias'
            >
                <FlatList
                    horizontal
                    keyExtractor ={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent= {this.renderVacio}
                    ItemSeparatorComponent={this.itemSeparador}
                    renderItem={this.renderItem}
                />
            </CategoriasLayout>
        )
    }
}

export default connect(mapStateToProps)(Categorias)