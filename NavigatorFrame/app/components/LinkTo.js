'use strict';

var React = require('react-native')

var {
	View,
	TouchableHighlight
} = React

var { RouteMap } = require('./components');

var LinkTo = React.createClass({
	propTypes:{
		navigator : React.PropTypes.object.isRequired,
		targetLink : React.PropTypes.string.isRequired,
	},
	render:function(){
		return (
			<View>
				<TouchableHighlight 
					underlayColor = '#efefef' 
					onPress = { this.navigate }
				>
					<View>
						{ this.props.children }
					</View>
				</TouchableHighlight>
			</View>
		)
	},
	navigate:function(){
		var { navigator, targetLink } = this.props;

		navigator.push( RouteMap(targetLink) );
	}
})

module.exports = LinkTo;