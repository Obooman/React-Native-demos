'use strict'

var React = require('react-native');
var {
	View,
	propTypes,
	StyleSheet,
	Text
} = React

var ProgressCircle = React.createClass({
	render:function(){
		var { size, date, time } = this.props;

		return (
			<View style={[{ width:size, height:size, borderRadius:size/2 },styles.container]}>
				<Text style={ styles.soldoutText }>
					{ date }
				</Text>
				<Text style={ styles.soldoutText }>
					{ time }
				</Text>
			</View>
		)
	},
	
})

var styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#FF9220',
	},
	soldoutText:{
		color:"white",
	}
})

module.exports = ProgressCircle;