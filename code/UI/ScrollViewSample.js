/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View ,StyleSheet ,TextInput,ScrollView,Image} from 'react-native';

class ScrollViewSample extends Component {
  constructor(props) {
    super(props);
    //this.state = {text: ''};
  }

  render(){
    return(
      <ScrollView style= {{paddingTop: 20}}>
        <Text style= {{fontSize: 30}}> Scroll me plz</Text>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Text style= {{fontSize: 30}}> If you like</Text>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Text style= {{fontSize: 30}}> Scroll down</Text>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Text style= {{fontSize: 30}}> whats the best</Text>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Text style= {{fontSize: 30}}> framework around?</Text>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Image source={require('./image/tips_red_icon.png')}/>
        <Text style= {{fontSize: 30}}> React Native</Text>
      </ScrollView>
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


module.exports = ScrollViewSample
