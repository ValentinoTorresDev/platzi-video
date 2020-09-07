// import React,{ Component } from 'react';
// import Video from 'react-native-video-controls'
// import {
//     StyleSheet,
//     ActivityIndicator,
//     Text,
// }from 'react-native'
// import VideoLayout from '../components/VideoLayout'
// import ControlLayout from '../components/ControlLayout'
// import PlayPause from '../components/PLayPause'
// import FullScreen from '../components/FullScreen'

// class PLayer extends Component{
//     state = {
//         loading: true,
//         paused: false,
//         screen: false,
//     }
//     onBuffer = ({isBuffering}) => {
//         this.setState({
//             loading: isBuffering,
//         })
//     }
//     playPause = () => {
//         this.setState({
//             paused: !this.state.paused,
//         })
//     }
//     FullScreen = () =>{
//         this.setState({
//             screen: !this.state.screen,
//         })
//     }
//     render(){
//         return(
//             <VideoLayout 
//                 loading = {this.state.loading}
//                 video={
//                     <Video 
//                         source={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
//                         style={styles.video}
//                         resizeMode= 'cover'
//                         onBuffer = {this.onBuffer}
//                         paused = {this.state.paused}
//                         fullscreen = {this.state.screen}
//                     />
//                 }
//                 loader={
//                     <ActivityIndicator color='#fff' />
//                 }
//                 controls={
//                     <ControlLayout>
//                         <PlayPause
//                             onPress={this.playPause}
//                             paused = {this.state.paused}
//                         />
//                         <Text>Progress Bar |</Text>
//                         <Text>Time Left |</Text>
//                         <FullScreen 
//                             onPress={this.FullScreen}
//                             screen = {this.state.screen}
//                         />
//                     </ControlLayout>
//                 }
//             />
//         )
//     }
// }
// const styles = StyleSheet.create({
//     video: {
//         position: 'absolute',
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0,
//     }
// })

// export default PLayer;

import React , {Component} from 'react'
import{
    View,
    Text,
    StyleSheet
} from 'react-native'
import VideoPlayer from 'react-native-video-controls'

class PLayer extends Component{
    render(){
        return(
            <View style={styles.container}>
                <VideoPlayer
                    source= {{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
                    onBack = {() => null}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        height: 275,
        overflow: 'hidden',
    }
})

export default PLayer
