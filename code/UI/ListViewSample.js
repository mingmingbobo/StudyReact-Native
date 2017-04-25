/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View ,StyleSheet ,TextInput,ListView,Image, TouchableOpacity} from 'react-native';

class ListViewSample extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2 });
    this.state = {
      dataSource: ds,
      loaded: false
    };
    this._getMoviesFromApiAsync();
  }

  _getMoviesFromApiAsync() {
    return fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(responseJson.movies),
          loaded: true
        });
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _renderLoadingView(){
    return(
      <View style = {styles.container}>
      <Text style = {styles.loading}>Loading movies...... </Text>
      </View>
    );
  }

  _renderMovie(movie){

    return(

    //  <TouchableOpacity style = {styles.container} onPress={() => this._pressRow(rowData)} activeOpacity={1.0}>
      <View>
      <View style = {styles.container}>
      <Image
      source = {{uri: movie.posters.thumbnail}}
      style = {styles.thumbnail}
       />
       <View style =  {styles.rightContainer}>
       <Text style = {styles.title}>{movie.title}</Text>
       <Text style = {styles.year}>{movie.year}</Text>
       </View>
      </View>
      <View style={styles.separator}></View>
      </View>
      //</TouchableOpacity>

    );

  }

  render(){
    if(!this.state.loaded){
      return this._renderLoadingView();
    }
    return(
      <ListView
      dataSource = {this.state.dataSource}
      renderRow = {this._renderMovie}
      style = {styles.listView}
      />
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  backgroundColor: '#F5FCFF'
},

rightContainer:{
 flex: 1,
 flexDirection: 'column',
 justifyContent: 'space-between'
},

listView: {
      paddingTop: 66,
      backgroundColor: '#F5FCFF',
  },

   thumbnail:{
     width:53,
     height:81,
     marginLeft: 10,
     marginBottom: 10
   },

   title:{
     fontSize: 20,
     marginLeft: 10,
     marginTop:5,
     height: 50,
     textAlign: 'left',
   },

   year: {
         textAlign: 'left',
         marginLeft: 10,
         marginBottom:15,
     },

     loading: {
       fontSize: 30,
       textAlign: 'center',
       color: 'red'
     },
separator: {
  //flex: 1,
  //position: 'absolute',
   left: 0,
   bottom:5,
   height: 1,
   backgroundColor: '#CCCCCC',
 },
});


module.exports = ListViewSample
