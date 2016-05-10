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
} = React;

var { 
  SuperText,
  FormButton,
  LinkTo,
  HorizontalList,
  ProductItem,
} = require('./components');

var RouteMap = require('./RouteMap');

var SceneOne = React.createClass({
  componentDidMount:function(){
    var route = this.props.route;
    var navigator = this.props.navigator;

    route.rightButtonHandler = () => {
      navigator.push(RouteMap('account/account'))
    }
  },
  componentWillUnmount:function(){
    this._listeners && this._listeners.forEach((listener) => {
       listener.remove()
    });
    console.log('SceneOne Unmounted');

  },

  componentWillMount:function(){

    console.log('wow')
    this.setState({
      he:'cool'
    })
  },
  getInitialState:function(){

    console.log('hello');
    return {
      he:'he'
    }
  },
  render:function(){
    
    var inner = this.getInner();

    console.log('Render!')
    return (
      <View>
        <HorizontalList>
          <View>
            <Text style={{ textAlign:'center' }}>heooo</Text>
          </View>
          <View>
            <Text style={{ textAlign:'center' }}>heooo</Text>
            <Text style={{ textAlign:'center' }}>heooo</Text>
            <Text style={{ textAlign:'center' }}>heooo</Text>
            <Text style={{ textAlign:'center' }}>{ this.state.he }</Text>
            <Text style={{ textAlign:'center' }}>heooo</Text>
            <Text style={{ textAlign:'center' }}>heooo</Text>
            <Text style={{ textAlign:'center' }}>heooo</Text>
          </View>    
          <View>
            <Text style={{ textAlign:'center' }}>heooo</Text>
          </View>      
        </HorizontalList>
        <ScrollView>
          <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
            <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
            <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
            <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
            <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
            <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
             <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
             <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
             <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
             <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
             <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
             <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
             <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
             <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
             <ProductItem
            displayEarningRate = { 2.3 } 
            name = 'PropTypes.string.isRequired'
            id = { '2000' }
            statusId = 'filled'
            closePeriod = { 60 }
            lowestBuyAmount = { 2000 }
            />
        </ScrollView>
      </View>
    )
  },
  mea:function(){
    console.log(this.refs.hello)
  },
  getInner:function(){
    return (
          <View style={{flexDirection:'row', flex:1, backgroundColor:'yellow'}}>
            <TouchableHighlight
            onPress = {()=>{
              NetInfo.fetch().done((reach) => {
                alert(reach)
              })
            }}
            >
            <View style={{ width:20,height:20,borderRadius:10,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
              <Text style={{ color:"white" }}>3</Text>
            </View>
            </TouchableHighlight>

            <TouchableHighlight
            onPress = {()=>{alert(2)}}
            >
              <Text>@imageOne@</Text>
            </TouchableHighlight>

            <TouchableHighlight
            onPress = {()=>{alert(3)}}
            >
              <Text>@imageOne@</Text>
            </TouchableHighlight>
          </View>
        )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom:0,
    top:0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  space:{
    height:10,
    flex:1,
  }
});

module.exports = SceneOne;