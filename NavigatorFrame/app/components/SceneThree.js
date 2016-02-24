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
  Modal,
} = React;

var {
  SuperText,
  NoComponet,
  NavigatorFrame
} = require('./components')

var RouteMap = require('./RouteMap');

var SceneThree = React.createClass({
  getInitialState:function(){
    return {
      visible : false
    }
  },
  componentWillMount:function(){
    var { route } = this.props;
    var navigator = this.props.navigator;
      
    route.rightButtonHandler = () => {
      navigator.push(RouteMap('index/index'))
    }
  },
  componentWillUnmount:function(){
    this._listeners && this._listeners.forEach((listener) => {
      // console.log(listener)
       listener.remove()
    });
  },
  render:function(){
    return (
      <View style={[styles.container,{backgroundColor:'blue'}]}>
        <TouchableHighlight
          onPress = { this.showModal }
        >
          <View style={styles.button}></View>
        </TouchableHighlight>
        <Modal
        animated = { true }
        visible = { this.state.visible }
        transparent = { true }
        >
          <NavigatorFrame
            initialRoute = { RouteMap('fixed/buy') }
            closeModal = { this.closeModal }
          />
        </Modal>
      </View>
    )
  },
  showModal:function(){
    this.setState({
      visible : true
    })
  },
  hideModal:function(){
    this.setState({
      visible : false
    })
  },
  closeModal:function(){
    this.hideModal();
    console.log('closeModal!');
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
  },
  button:{
    width:20,
    height:20,
    backgroundColor:'#8a0901'
  }
});

module.exports = SceneThree;