'use strict';

var React = require('react-native');

var {
	View,
	Text,
	PixelRatio,
	Dimensions,
} = React;

var SCREEN_WIDTH = Dimensions.get('window').width;

var Line = React.createClass({
	render:function(){
		return (
			<View style={{ width:1/PixelRatio.get(),height:this.props.height, backgroundColor:'#d4d4d4' }}></View>
		)
	}
})

var HorizontalList = React.createClass({
	getInitialState:function(){
		return {
			lineHeight:0
		}
	},
	componentDidMount:function(){
		setTimeout(() => {
            this.refs.container.measure(( ox, oy, width, height ) => {
            	this.setState({
            		lineHeight : height
            	})
            })
		})
	},
	render:function(){
		var { children } = this.props;

		return (
			<View style={{ flex:1, flexDirection:'row'}} ref = 'container'>
				{
				  React.Children.map( children, ( item, index ) => {

				  	var innerItem = React.cloneElement(item, { style:{ alignSelf:'center',flex:1, } });

				    if(index + 1 !== React.Children.count( children )){
				      return (
				      	<View style={{ flex:1, flexDirection:'row' }} >
				      		{ innerItem }
				      		<Line height = { this.state.lineHeight }/>
				      	</View>
				      )
				    } else {
				      return (
				      	<View style={{ flex:1, flexDirection:'row', height : this.state.lineHeight }}>
				      		{ innerItem }
				      	</View>
			      	  )
				    }
				  })
				}
			</View>
		)
	}
})

module.exports = HorizontalList;