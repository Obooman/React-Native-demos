'use strict';

var React = require('react-native');

var {
	View,
	TabBarIOS,
	Text,
} = React

var {
	SceneOne,
	SceneTwo,
	SceneThree,
	RouteMap
} = require('./components')

var RootScene = React.createClass({
	getInitialState:function(){
		return {
			selectedTab:'blueTab'
		}
	},
	componentDidMount:function(){
		var route = this.props.route;
		var navigator = this.props.navigator;

		route.rightButtonHandler = () => {
		  navigator.push(RouteMap('account/account'))
		}
	},
	render:function(){
		return (
			<View style={{ flex:1 }}>
				<TabBarIOS style={{flex:1}}>
					<TabBarIOS.Item
						systemIcon = 'downloads'
						>
						<View
							style={{ flex:1 }}>
							<SceneOne/>
						></View>
					</TabBarIOS.Item>

					<TabBarIOS.Item
						systemIcon = 'favorites'
						>
						<SceneTwo/>
					</TabBarIOS.Item>
					<TabBarIOS.Item
						systemIcon = 'recents'
						>
						<SceneThree/>
					</TabBarIOS.Item>
				</TabBarIOS>
			</View>
		)
	}
})


module.exports = RootScene;