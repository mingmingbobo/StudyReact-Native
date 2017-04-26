/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import ListViewSample from './ListViewSample.js'
import ScrollViewSample from './ScrollViewSample.js'
import FlexBox from './FlexBox.js'
import NavigatorIOSExamplePage from './NavigatorIOSExamplePage'
import React, { Component } from 'react';
import { AppRegistry, Text, View ,StyleSheet ,TabBarIOS,NavigatorIOS} from 'react-native';

//var listViewSample = require('./ListViewSample');

class StudyReactProject extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'listViewSample' };
    this.state = {notifCount: 0};
    this.state = {presses: 0}
  }

  render(){
    const {onExampleExit} = this.props;
    return(
    <TabBarIOS
     unselectedTintColor="yellow"
     tintColor="white"
     barTintColor="darkslateblue">
     <TabBarIOS.Item
       title="ListView"
       icon={require('./image/menu_filter_screen_icon.png')}
       selected={this.state.selectedTab === 'listViewSample'}
       onPress={() => {
         this.setState({
           selectedTab: 'listViewSample',
         });
       }}>
       <NavigatorIOS // 上部导航和界面
                           ref="nav"
                           tintColor="red"
                           style={{flex:1}} // 必须要设置大小
                           initialRoute = {
                               {
                                   component: ListViewSample,
                                   title:'listViewSample',
                                   passProps: {onExampleExit},
                                   //passProps: {navigator: this.props.navigator}
                                   //passProps: { navigator: this.props.navigator},
                                   //leftButtonIcon:require('./image/tips_red_icon.png'),
                                   //rightButtonIcon:require('./image/tips_red_icon.png')
                               }
                           }/>
     </TabBarIOS.Item>
     <TabBarIOS.Item
       //systemIcon="history"
       title="ScrollView"
       icon={require('./image/menu_history_icon.png')}
       //badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
       selected={this.state.selectedTab === 'scrollView'}
       onPress={() => {
         this.setState({
           selectedTab: 'scrollView',
           //notifCount: this.state.notifCount + 1,
         });
       }}>

       <NavigatorIOS // 上部导航和界面
                           tintColor="red"
                           style={{flex:1}} // 必须要设置大小
                           initialRoute = {
                               {
                                   component: ScrollViewSample,
                                   title:'ScrollViewSample'
                                  // leftButtonIcon:require('./image/tips_red_icon.png'),
                                   //rightButtonIcon:require('./image/tips_red_icon.png')
                               }
                           }/>

      // <ScrollViewSample navigator={this.props.navigator} />

     </TabBarIOS.Item>
     <TabBarIOS.Item
       icon={require('./image/menu_real_time_icon.png')}
       renderAsOriginal
       title="FlexBox"
       selected={this.state.selectedTab === 'flexBox'}
       onPress={() => {
         this.setState({
           selectedTab: 'flexBox',
          // presses: this.state.presses + 1
         });
       }}>

       <NavigatorIOS // 上部导航和界面
                           tintColor="red"
                           style={{flex:1}} // 必须要设置大小
                           initialRoute = {
                               {
                                   component: FlexBox,
                                   title:'FlexBoxSample'
                                  // leftButtonIcon:require('./image/tips_red_icon.png'),
                                   //rightButtonIcon:require('./image/tips_red_icon.png')
                               }
                           }/>

//<FlexBox navigator={this.props.navigator} />
     </TabBarIOS.Item>

     <TabBarIOS.Item
       icon={require('./image/menu_real_time_icon.png')}
       renderAsOriginal
       title="navigator"
       selected={this.state.selectedTab === 'navigator'}
       onPress={() => {
         this.setState({
           selectedTab: 'navigator',
          // presses: this.state.presses + 1
         });
       }}>

       <NavigatorIOS // 上部导航和界面
                           tintColor="red"
                           style={{flex:1}} // 必须要设置大小
                           initialRoute = {
                               {
                                   component: NavigatorIOSExamplePage,
                                   title:'navigatorSample',
                                   passProps: {onExampleExit},
                                  // leftButtonIcon:require('./image/tips_red_icon.png'),
                                   //rightButtonIcon:require('./image/tips_red_icon.png')
                               }
                           }/>
     </TabBarIOS.Item>

   </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

  container:{
      flex:1,
      backgroundColor: 'white',
      marginTop: 20
  },

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
