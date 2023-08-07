import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av'
export default class SoundButton extends React.Component{
  playSound = async soundChunk =>{
    var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/'+soundChunk+'.mp3';
    await Audio.Sound.createAsync(
      {
        uri:soundLink,
      },
      {
        shouldPlay:true
      }
    )

  }
  render(){
    return(
      <TouchableOpacity 
      style={styles.button}
      
      onPress={()=>{
      this.playSound(this.props.soundChunk);
      }}
      
      >
      <Text>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({

    button: {
    backgroundColor: 'green',
    width: 100,
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 5,
  }
})