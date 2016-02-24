var React = require('react-native');
var {
	View,
	Text,
	ActivityIndicatorIOS,
	StyleSheet,
	TouchableHighlight,
} = React

var FormButton = React.createClass({
	render:function(){
		return (
			<View style={{borderRadius:10,overflow:"hidden"}}>
				<View style={styles.FormButton}>
					<Text style={[styles.text,{}]}>Good</Text>
					<ActivityIndicatorIOS color = "white"/>
				</View>
			</View>
		)
	}
})

var styles = StyleSheet.create({
	FormButton:{
		height:50,
		width:300,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'green',
		flexDirection:'row'

	},
	text:{
		color:'white',
	}
})

module.exports = FormButton;