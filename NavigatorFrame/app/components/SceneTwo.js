'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Dimession,
  PixelRatio,
  NetInfo,
  TextInput,
  PropTypes
} = React;

var {
  SuperText,
  SceneThree,
} = require('./components')

var RouteMap = require('./RouteMap');

var SceneTwo = React.createClass({
  contextTypes:{
    navigator : PropTypes.object
  },
  componentWillMount:function(){
    var route = this.props.route;
    var navigator = this.props.navigator;

    route.rightButtonHandler = () => {
      navigator.push(RouteMap('setting'))
    }    

    this.props.navigator.navigationContext.addListener('didfocus', () => {
      console.log('DIDFOCUS -> ')
      console.log(this.props.route)
    })

  },
  componentWillUnmount:function(){
    this._listeners && this._listeners.forEach((listener) => {
       listener.remove()
    });

  },
  render:function(){
    var { navigator } = this.context;

    return (
      <View style={styles.container} onTouchEnd={this.press}>
        <Text>Good</Text>
        <TextInput style={{height:20}}></TextInput>
      </View>
    )
  },
  press:function(){
    // console.log(this.props.navigator.getCurrentRoutes())
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  space:{
    height:10,
    flex:1,
  }
});

module.exports = SceneTwo;
