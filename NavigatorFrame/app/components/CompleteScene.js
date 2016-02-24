var React = require('react-native');

var {
	View,
	Text,
	StyleSheet,
} = React

var CompleteScene = React.createClass({
	componentWillMount:function(){
		var { route } = this.props;
		route.rightButtonHandler = this.closeModal;
	},
	render:function(){
		return (
			<View 
				style={ styles.container }
				onStartShouldSetResponder = { (evt) => true }
				onMoveShouldSetResponder = { (evt) => true }
				onResponderMove = {() => { console.log(1)} }
				onStartShouldSetResponderCapture = { (evt) => true }
			>
				<View style={ styles.inner }></View>
			</View>
		)
	},
	closeModal:function(){
		var { closeModal } = this.props
		closeModal && closeModal()

		setTimeout(() => {
			alert('Handle')
		},3000)
	}
})

var styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'pink',
		alignItems:'center',
		justifyContent:'center'
	},
	inner:{
		width:40,
		height:40,
		backgroundColor:'#208acf'
	}
})

module.exports = CompleteScene;