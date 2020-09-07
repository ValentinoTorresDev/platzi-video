import React from 'react'
import {
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    Image,
} from 'react-native'

import Svg, { Path } from "react-native-svg"

function PLayPause(props){
    return(
        <TouchableHighlight
            onPress={props.onPress}
            style = {styles.container}
            // underlayColor = 'red'
            hitSlop= {{
                left: 5,
                top: 5,
                right: 5,
                bottom:5
            }}
        >
            {   
                props.paused ?

                <Svg viewBox="0 0 494.148 494.148" width={18} height={18} {...props}>
                    <Path
                        d="M405.284 201.188L130.804 13.28C118.128 4.596 105.356 0 94.74 0 74.216 0 61.52 16.472 61.52 44.044v406.124c0 27.54 12.68 43.98 33.156 43.98 10.632 0 23.2-4.6 35.904-13.308l274.608-187.904c17.66-12.104 27.44-28.392 27.44-45.884.004-17.48-9.664-33.764-27.344-45.864z"
                        data-original="#000000"
                        className="prefix__active-path"
                        data-old_color="#000000"
                        fill="#fff"
                    />
                </Svg>
                :
                <Svg viewBox="0 0 493.528 493.528" width={18} height={18} {...props}>
                    <Path 
                        d="M178.064 0L166.04.248c-14.876 0-27.236 12.112-27.236 26.992v439.664c0 14.876 13.396 26.624 28.272 26.624h.084l10.976-.072c14.892 0 26.22-11.92 26.22-26.808V26.996C204.352 12.116 193.028 0 178.064 0zM328.584 0l-12.092.248c-14.88 0-27.3 12.112-27.3 26.992v439.664c0 14.876 13.708 26.624 28.58 26.624h.084l10.816-.072c14.88 0 26.052-11.92 26.052-26.808V26.996C354.72 12.116 343.548 0 328.584 0z" 
                        data-original="#000000"
                        className="prefix__active-path"
                        data-old_color="#000000"
                        fill="#fff"
                    />
                </Svg>
            }  
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    button:{
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    container: {
        justifyContent: 'center',
    //     paddingHorizontal: 0,
    //     height: 25,
        marginRight: 6,
    //     marginVertical: 5,
    //     borderWidth: 1,
    //     borderRadius: 10,
    //     borderColor: '#fff',
    //     backgroundColor: 'gray',
    }
})
export default PLayPause;