var React  = require('react-native')

var {
  View,
  PixelRatio,
  TouchableHighlight,
  Text,
} = React

var ListItem = React.createClass({
  render:function(){
    return(
      <TouchableHighlight underlayColor ='#eee' {...this.props}>
      <View style={{height:50,justifyContent:'center',paddingLeft:30}}>
        <Text>{this.props.title}</Text>
      </View>
      </TouchableHighlight>
    )
  }
})

module.exports = ListItem;