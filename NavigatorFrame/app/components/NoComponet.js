
var React  = require('react-native')
var { 
  ListItem,
  ListGroup,
  RouteMap,
} = require('./components');

var NoComponet = React.createClass({
  render:function(){
    return(
      <ListGroup>
        <ListItem title='Hello'></ListItem>
        <ListItem title='Good'></ListItem>
        <ListItem title='Great'></ListItem>
        <ListItem title='Cool'></ListItem>
        <ListItem title='Cool'></ListItem>
        <ListItem title='Cool'></ListItem>
        <ListItem title='Cool'></ListItem>
        <ListItem title='Cool'></ListItem>
        <ListItem title='Cool'></ListItem>
        <ListItem title='Awesome'
          onPress = { this.changeNav }
        ></ListItem>
      </ListGroup>
    )
  },
  changeNav:function(){
    var { navigator } = this.props;
    navigator.replace(RouteMap('success'))
  }
})

module.exports = NoComponet;