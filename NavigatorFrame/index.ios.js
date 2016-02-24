'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;


var {
  NavigatorFrame,
  RouteMap
} = require('./app/components/components')

var Main = React.createClass({
  render:function(){
    return (
      <NavigatorFrame
      	initialRoute = { RouteMap('index/index#root') }
      />
    )
  }
})

AppRegistry.registerComponent('NavigatorFrame', () => Main);
