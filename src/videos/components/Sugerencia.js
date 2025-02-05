import  React from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

function Sugerencia(props){
    return(
        <TouchableOpacity
            onPress={props.onPress}
        >
        <View style={styles.container}>
            <View style={styles.left}>
                <Image 
                    style={styles.cover}
                    source={{
                        uri: props.medium_cover_image
                    }}
                />
                <View style={styles.gender}>
                <Text style={styles.genderTitle}>{props.genres[0]}</Text>
                </View>
                </View>
                <View style={styles.right}>
                        <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.year}>{props.year}</Text>
                    <Text style={styles.rating}>{props.rating} Estrellas</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    cover: {
        height: 150,
        width: 100,
        resizeMode: 'contain'
    },
    gender: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.8)',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    genderTitle: {
        color: '#fff',
        fontSize: 11,
    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 18,
        color: '#44546b',
    },
    year: {
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: '#fff',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',  
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold',
    }
})

export default Sugerencia