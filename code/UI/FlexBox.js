/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View ,StyleSheet} from 'react-native';

class FlexBox extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class StudyReactProject extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <View style = {{flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop: 20,
        //alignItems: 'stretch'
      }}>
      <View style = {{width:50,height:50,backgroundColor:'powderblue'}}/>
      <View style = {{width:50,height:50,backgroundColor:'skyblue'}}/>
      <View style = {{width:50,height:50,backgroundColor:'steelblue'}}/>
      <View style = {{width:50,height:50,backgroundColor:'red'}}/>
      </View>


    );
  }
}

/*
 class StudyReactProject extends Component {
   constructor(){
     super()
     this.state = { showMyText: true };
     setInterval(() => {
       this.setState({showMyText:!this.state.showMyText});
     },1000);
   }
  render() {
    let disPlay = this.state.showMyText? "I love to blink" : ''

    return (
      <View style = {{flex: 1 ,flexDirection:'row'}}>
      <View style={styles.viewStyle}>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>

      <View style = {{flex: 2}}>
      <Text style={styles.bigblue}> {disPlay}</Text>
      <Text style={styles.red}>{disPlay}</Text>
      <Text style={styles.bigblue}>{disPlay}</Text>
      </View>

      </View>
    );
  }
}
*/
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


module.exports = FlexBox
