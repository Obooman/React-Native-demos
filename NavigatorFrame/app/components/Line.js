var React  = require('react-native')

var {
  View,
  PixelRatio,
} = React


var Line = React.createClass({
  render:function(){
    return (
      <View style={{
        height:1/PixelRatio.get(),
        width:300,
        alignSelf:'flex-end',
        backgroundColor:'#ddd',
      }}></View>
    )
  }
})


module.exports = Line;