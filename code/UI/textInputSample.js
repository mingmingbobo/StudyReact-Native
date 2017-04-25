/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View ,StyleSheet ,TextInput} from 'react-native';

class StudyReactProject extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render(){
    return(
      <View style = {{paddingTop: 20}}>
      <TextInput style= {{height: 40}}
      placeholder="Type here to translate!"
      onChangeText={(text) => this.setState({text})}
       />

       <Text style= {{padding: 10, fontSize: 42}}>
       {this.state.text.split(' ').map((word) => word && '🍦').join(' ')}
       </Text>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    paddingTop: 50
  },

   bigblue:{
      flex: 1,
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30
   } ,

   red:{
      flex: 2,
      color: 'red'
   }
});


module.exports = StudyReactProject
