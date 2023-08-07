import React from 'react';
import {
  Text,
  View,StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import SoundButton from './PhonicSoundButton'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds:[],
    };
  }
  render() {
    return (
      <View>
        <Header
          backgroundColor="black"
          centerComponent={{
            text: 'WORD SPELLER',
            style: { color: 'white', fontSize: 40 },
          }}></Header>
        <Image
          style={styles.pic}
          source={{
            uri: 'https://e7.pngegg.com/pngimages/278/749/png-clipart-translation-letter-writing-spelling-others-miscellaneous-english-thumbnail.png',
          }}
        />

        
        
        
        
        <TextInput
          style={styles.input}
          onChangeText={(text1) => {
            this.setState({ text: text1 });
          }}
          value={this.state.text}></TextInput>

        
        
        
        
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var word = this.state.text.toLowerCase();
            db[word]?(
              this.setState({ chunks: db[word].chunks }),
              this.setState({phonicSounds:db[word].phones}))
              : Alert.alert('word dont exist');
          }}>
          <Text style={styles.txt}>Click Me!</Text>
        </TouchableOpacity>

        <View>
        {this.state.chunks.map((item,index)=>{
          return(
            <SoundButton
            wordChunk = {this.state.chunks[index]}
            soundChunk = {this.state.phonicSounds[index]}
            />
          );
        }
        
        )}
      
      
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
pic:{marginTop:50,
width:110,
height:150,
alignSelf:"center"},
button: {
  backgroundColor:"black",
  height:50,
  width:150,
  alignSelf:"center",
  },
  txt:{color:"white",
  alignSelf:"center",
  paddingTop:15, 
  },
  input: {
    marginTop:20,
    width:200,
    height:50,
    borderWidth:3,
    outline:"none",
    alignSelf:"center",
    textAlign:"center",
    borderColor:"blue",
    marginBottom:20
  }
});
