/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {
  Component
}
from 'react';
import {
  AppRegistry, Text, View, StyleSheet, TextInput, ListView, Image,
  TouchableHighlight, NavigatorIOS, TabBarIOS
}
from 'react-native';

import MovieDetail from './MovieDetail.js'

class ListViewSample extends Component {
  constructor(props) {
    super(props);
    console.log("初始化");
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds,
      loaded: false
    };
    this._getMoviesFromApiAsync();
  }

  _getMoviesFromApiAsync() {
    console.log("获取数据");
    return fetch(
        'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'
      )
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson.movies),
          loaded: true
        });
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _renderLoadingView() {
    return ( < View style = {
        styles.container
      } >
      < Text style = {
        styles.loading
      } > Loading movies...... < /Text> < /View >
    );
  }


  _renderRow(rowData, sectionID, rowID) {
    return ( < View >
        < TouchableHighlight onPress = {
          () => this._pressRow(rowID)
        } >
        < View style = {
          styles.container
        } >
        < Image source = {
          {
            uri: rowData.posters.thumbnail
          }
        }
        style = {
          styles.thumbnail
        }
        /> < View style = {
        styles.secContainer
      } >
      < Text style = {
        styles.title
      } > {
        rowData.title
      } < /Text> < Text style = {
    styles.year
  } > {
    rowData.year
  } < /Text> < /View > < /View> < /TouchableHighlight > < /View>
);
}

/*
//  <TouchableOpacity style = {styles.container} onPress={() => this._pressRow(rowData)} activeOpacity={1.0}>
        < View >
        < TouchableHighlight onPress = {
          () => this._pressRow(rowID)
        } >
        < View style = {
          styles.container
        } >
        < Image source = {
          {
            uri: rowData.posters.thumbnail
          }
        }
        style = {
          styles.thumbnail
        }
        /> < View style = {
        styles.rightContainer
      } >
      < Text style = {
        styles.title
      } > {
        rowData.title
      } < /Text> < Text style = {
    styles.year
  } > {
    rowData.year
  } < /Text> < /View > < /View> < /TouchableHighlight > < View style = {
    styles.separator
  } > < /View> < /View >
*/


_pressRow(rowID) {
  console.log(rowID + "我被点了");
  this.props.navigator.push({
    title: 'movie detail',
    component: MovieDetail,
    backButtonTitle: 'Custom Back',
    passProps: {
      depth: this.props.depth ? this.props.depth + 1 : 1
    },
  });
}

render() {
  if (!this.state.loaded) {
    return this._renderLoadingView();
  }
  return ( < ListView dataSource = {
      this.state.dataSource
    }
    renderRow = {
      this._renderRow
    }
    style = {
      styles.listView
    }
    />
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },

  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  listView: {
    paddingTop: 66,
    backgroundColor: '#F5FCFF',
  },

  thumbnail: {
    width: 53,
    height: 81,
    marginLeft: 10,
    marginBottom: 10
  },

  title: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5,
    height: 50,
    textAlign: 'left',
  },

  year: {
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 15,
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
    bottom: 5,
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});


module.exports = ListViewSample
