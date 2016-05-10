'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var SuperText = React.createClass({
  render:function(){
    var { children } = this.props;
    
    var onlyText = !(children instanceof Array) && typeof children == "string"

    console.log( children )
    return (
      <View style={{ flexDirection:'row',alignItems:"center" }}>
         {(() => {

              if(onlyText){
                return <Text>{children}</Text>
              } else {
                return children
              }
              
           })()
         }
      </View>
    )
  }
})

module.exports = SuperText
