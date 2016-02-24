'use strict';

/*
 * SceneFocusMixin
 * Scene life Circle 优化方案
 *
 * Cases:
 * onEnterance 		- 从前Scene到本Scene触发
 *
 * onBackIn 		- 从后Scene到本Scene触发
 *
 * onWillFocus 		- 本Scene即将活跃时触发(兼顾以上两种)
 *
 * onDidFocus 		- 本Scene活跃后触发
 *
 * onbackwardblur 	- 即将从本Scene跳转到后Scene时触发
 *
 * onForwardBlur 	- 即将从本Scene跳转到前Scene时触发
 *
 * onWillBlur 		- 本Scene即将失焦时触发
 *
 * onDidBlur 		- 本Scene已经失焦时触发(this.componentDidUnmounte之前触发)
 *
 */


var SceneFocusMixin = {

	componentWillMount:function(){
		var { route, navigator, routeIndex } = this.props;
		var { navigationContext } = navigator;
		var { index } = route;

		if( !route || !navigator ) return;

		// if( navigator.didFocusAdded ) return;

		this._sceneDidfocusListener = (
			navigationContext.addListener('didfocus',( event ) => {


				var routeStack 		= 	navigator.getCurrentRoutes();
				var targetRoute 	= 	event.data.route;
				var targetIndex 	= 	route.index;
				var routeStackLength	= 	routeStack.length;

				/*
					根据跳转route & routeStack 的关系确定是否为当前活跃
					this.onEnterance 	: 从前页面进入
					this.onBackIn 		: 从后页面返回
					this.onDidFocus 	: 当前页面变为 active 时运行
				*/


				if( targetRoute == route && routeStackLength - 1 == targetIndex ){
					// Focus from front view

					navigationContext.emit( 'didblur',{ route:routeStack[ routeStackLength - 2 ] } )
					this.onEnterance && this.onEnterance( event, navigator, route, targetIndex );
					this.onDidFocus && this.onDidFocus( event, navigator, route, targetIndex )
				}

				if( targetRoute == route && routeStackLength - 2 == targetIndex ){
					// Focus from after view

					this.onBackIn && this.onBackIn( event, navigator, route, targetIndex );
					this.onDidFocus && this.onDidFocus( event, navigator, route, targetIndex )
				}
			})
		)

		this._sceneWillfocusListener = (
			navigationContext.addListener('willfocus', ( event ) => {
				
				var routeStack 		= 	navigator.getCurrentRoutes();
				var targetRoute 	= 	event.data.route;
				var targetIndex 	= 	route.index;

				// var { targetIndex } = routeStack.filter( ( route, index ) => { if( route == targetRoute ){ return route.targetIndex = index } })
				var routeStackLength	= 	routeStack.length;

				if( route == targetRoute ){
					// Will focus this view 

					this.onWillFocus && this.onWillFocus();
				}

				/*
					根据跳转route & routeStack & targetRoute 的关系确定是否为当前活跃
					this.onBackwardBlur : 该页面被推出时失焦
					this.onForwardBlur 	: 该页面后推入新页面时失焦
					this.onWillBlur 	: 当前页面失焦时运行
				*/

				if( route == routeStack[ routeStackLength - 1 ] && route != targetRoute ){

					if( targetRoute ==  routeStack[ routeStackLength -2 ]){
						// Will unmount

						this.onBackwardBlur && this.onBackwardBlur( event, navigator, route, targetIndex )

					} else {
						// Will blur this view

						this.onForwardBlur && this.onForwardBlur( event, navigator, route, targetIndex )
					}

					this.onWillBlur && this.onWillBlur();
				}
			})
		)

		this._sceneDidBlurListener = (
			navigationContext.addListener('didblur',( event ) => {

				var routeStack 		= 	navigator.getCurrentRoutes();
				var targetRoute 	= 	event.data.route;
				var targetIndex 	= 	route.index;

				if( route == targetRoute ){
					// will blur this view

					this.onDidBlur && this.onDidBlur( event, navigator, route, targetIndex );
				}

			})
		)
	},
	componentWillUnmount:function(){

		this._removeSceneListeners()

	},
	_removeSceneListeners:function(){

		this._sceneDidfocusListener && this._sceneDidfocusListener.remove();
		this._sceneWillfocusListener && this._sceneWillfocusListener.remove();
		this._sceneDidBlurListener && this._sceneDidBlurListener.remove();

	}
}

module.exports = SceneFocusMixin;