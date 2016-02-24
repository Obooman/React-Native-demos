var React = require('react-native');

var {
	View,
	Text,
	Navigator,
	StyleSheet,
	PixelRatio,
} = React;

var {
	NavigationBarRouteMapper
} = require('./components')

var CustomNavigator = React.createClass({
	render:function(){
		var { navigator,navState } = this.props;
		// var currentRoute = navState.routeStack[navState.routeStack.length - 1]
		console.log(navState.routeStack[navState.routeStack.length - 1])
		// if(currentRoute.hideBar){
			// return <View></View>
		// } else {
			return (
		        <Navigator.NavigationBar
		          routeMapper = { NavigationBarRouteMapper }
		          style={ styles.NavigationBar }
		          {...this.props}
		        />
		      )
		// }
	}
})

var styles = StyleSheet.create({
  NavigationBar:{
    backgroundColor:'#fff',
    borderBottomWidth:1 / PixelRatio.get(),
    borderBottomColor:'#969696'
  }
})



module.exports = CustomNavigator;