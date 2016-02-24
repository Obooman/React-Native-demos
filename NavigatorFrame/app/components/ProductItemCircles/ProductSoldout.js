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
		var { size } = this.props;

		return (
			<View style={[{ width:size, height:size, borderRadius:size/2 }, styles.container]}>
				<Text style={ styles.soldoutText }>
					已售罄
				</Text>
			</View>
		)
	},
	
});

var styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#FF9220',
	},
	soldoutText:{
		color:"white",
	}
})

module.exports = ProgressCircle;