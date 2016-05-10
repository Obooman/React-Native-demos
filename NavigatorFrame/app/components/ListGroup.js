var React  = require('react-native')

var {
  View,
  ScrollView,
  PixelRatio,
} = React

var Line  = require('./Line')

var ListGroup = React.createClass({
  render:function(){
    var listArray = this.props.listData;
    return (
      <ScrollView style={{backgroundColor:'white'}}>
      <View  style={{
        backgroundColor:'#fff',
        borderTopWidth:1/PixelRatio.get(),
        borderTopColor:'#ddd',
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'#ddd'
      }}
      >
      {
        React.Children.map(this.props.children,(item,index)=>{
          if(index+1 !== React.Children.count(this.props.children)){
            return (
              <View>
                { item }
                <Line/>
              </View>
            )
          } else {
            return item
          }
        })
      }
      </View>
      </ScrollView>
    )
  }
})

module.exports = ListGroup;