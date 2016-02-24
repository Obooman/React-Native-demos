'use strict';

var React = require('react-native');
var {
	View,
	ART:{
		Path,
		Shape,
		Surface
	},
	propTypes,
	StyleSheet,
	Text,
	TouchableHighlight,
} = React

var ProgressCircle = React.createClass({
	getInitialState:function (){
		return {
			progress:0
		}
	},
	componentDidMount:function(){
		this.startAnimation();
	},
	render:function(){
		var { size, onCirclePress } = this.props;
		var path = this.getPath(size/2);
		var StrokeWidth = this.props.strokeWidth ? this.props.strokeWidth : 8;
		var actualRadius = size - 2*(StrokeWidth - StrokeWidth/4);
		var percentage = this.state.progress/100;

		return (
			<View style={ styles.container }>
				<TouchableHighlight onPress = { onCirclePress } underlayColor = '#efefef' style={{ borderRadius:size/2, overflow:'hidden' }}>
					<View>
						<Surface
							width = { size }
							height = { size }
							visible = { true }>
							<Shape
							d={path}
								strokeCap="round"
								stroke='#dfdfdf'
								strokeWidth={ StrokeWidth }
							/>
							<Shape
								d={ path }
								strokeCap="round"
								stroke='#FF9220'
								strokeWidth={ StrokeWidth }
								strokeDash = {[percentage*actualRadius*Math.PI,size*Math.PI]}
							/>
						</Surface>
						<View style={[styles.textWrapper,{ width:size, height:size }]}>
							<View >
								<Text style={{ textAlign:"center", fontSize:0.3*actualRadius/2 }}>
									{ this.state.progress }%
								</Text>
							</View>
							<View>
								<Text style={{ fontSize:0.3*actualRadius/2 }}>
									立即购买
								</Text>
							</View>
						</View>
					</View>
				</TouchableHighlight>
			</View>
		)
	},
	getPath:function(radius){
		var StrokeWidth = this.props.strokeWidth ? this.props.strokeWidth:8;
		var actualRadius = radius - (StrokeWidth - StrokeWidth/4);

		return Path()
		  .moveTo(radius,radius)
		  .move(0,-actualRadius)
		  .arc(0, actualRadius*2, radius/2, radius/2)
		  .arc(0, -actualRadius*2, radius/2, radius/2)
		  .close();

	},
 	startAnimation:function(){
 		var Progress = this.props.progress;
 
		var drawCircle = () => {
			var old_progress= this.state.progress;

			var animationTimer = this.requestAnimationFrame(drawCircle);

			if(old_progress == Progress){
				cancelAnimationFrame(animationTimer);
				return
			}

			this.setState({
				progress: old_progress + 1
			})
		}

		drawCircle();
 	}

})

var styles = StyleSheet.create({
	textWrapper:{
		backgroundColor:"transparent",
		position:"absolute",
		top:0,
		left:0,
		flex:1,
		alignItems:'center',
		justifyContent: 'center',
	}
})

module.exports = ProgressCircle;