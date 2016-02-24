'use strict'

var React = require('react-native');
var {
	View,
	PropTypes,
	StyleSheet,
	Text,
	TouchableHighlight,
} = React

var {
	ProgressCircle,
	ProductSoldout,
	ProductWaiting,
	ProductClosed,
	ProductProfiting
} = require('./ProductItemCircles');

var ProductItem = React.createClass({
	propTypes:{
		progress : PropTypes.number, 
		displayEarningRate : PropTypes.number.isRequired, 
		name : PropTypes.string.isRequired, 
		id : PropTypes.string.isRequired,
		statusId : PropTypes.string.isRequired, 
		startBuyTime : PropTypes.string, 
		closePeriod : PropTypes.number.isRequired, 
		lowestBuyAmount : PropTypes.number.isRequired, 
		investProductType : PropTypes.oneOf([1,2]),
		onCirclePress : PropTypes.func,
		onItemPress : PropTypes.func.isRequired
	},
	render:function(){

		//TODO 将产品信息传入属性重新设计 √
		//TODO 结合ListView组件进行初步重构

		var { 

			progress, 
			displayEarningRate, 
			name, 
			id,
			statusId, 
			startBuyTime, 
			closePeriod, 
			lowestBuyAmount, 
			investProductType,
			onItemPress,

		} = this.props

		var closePeriodMessage = closePeriod ? `封闭期${ closePeriod/20 }个月` :'随存随取'

		return (
			<TouchableHighlight
				underlayColor = '#efefef' 
				onPress = { onItemPress }>
				<View style={ styles.container }>
					<View style={ styles.mainContent }>
						<View style={ styles.titleWrapper }>
							<Text style={ styles.title }>{ name }</Text>
							{ this.getStatusTick(statusId) }
						</View>
						<View style={ styles.productIntro }>
							<View style={ styles.productIntroLeft }>
								<Text style={ styles.productRate }>{ displayEarningRate }%</Text>
								<Text style={ styles.rateLabel }>年化收益率</Text>
							</View>
							<View style={styles.productIntroRight}>
								<Text style={ styles.productIntroRightText }>{ closePeriodMessage }</Text>
								<Text style={ styles.productIntroRightText }>{ lowestBuyAmount/100 }元起购</Text>
							</View>
						</View>
					</View>
					<View style={ styles.circleWrapper }>
						{ this.getProductStatusCircle( statusId, progress ) }
					</View>
				</View>
			</TouchableHighlight>
		)
	},
	getProductStatusCircle:function(){
		var size = this.props.size || 80 ;
		var { statusId, progress, id, investProductType } = this.props

		switch(statusId){
			case 'buying':

				// var targetLinkUrl = investProductType === 1 ? 'index/current-product-buy':'fixed/product-buy'
				return (
					<ProgressCircle
						progress={progress}
						strokeWidth={3}
						size={size}
						{ ...this.props }/>
				);

			case 'waiting':
				return (
					<ProductWaiting
						size={size}
						statusId = {statusId}
						{...this.props}/>
				);

			case 'filled':
				/*
					已售罄产品无后端状态，目前约定为filled关键字。
				*/
				return (
					<ProductSoldout
						size={size}
						statusId = {statusId}/>
				);

			case 'closed':
				return (
					<ProductClosed
						size={size}
						statusId = {statusId}/>
				);

			case 'profiting':
				return (
					<ProductProfiting
						size={size}
						statusId = {statusId}/>
				)
		}

	},
	getStatusTick:function(statusId){
		if(statusId == 'waiting'){
			return (
				<View style={ styles.waitingTick }>
					<Text style={ styles.waitingTickText }>等待中</Text>
				</View>
			)
		}
	}
})

var styles = StyleSheet.create({
	container:{
		flex:1,
		height:100,
		flexDirection:"row",
		padding:10,
	},
	mainContent:{
		flex:1,
		width:200
	},
	circleWrapper:{
	},
	productIntro:{
		flex:1,
		flexDirection:'row'
	},
	productIntroLeft:{
		flex:1
	},
	productIntroRight:{
		flex:1
	},
	titleWrapper:{
		flexDirection:'row',
		height:30,
		alignItems:'center',
	},
	title:{
		color:'#434343'
	},
	productRate:{
		fontSize:24,
		color:'red'
	},
	rateLabel:{
		fontSize:12,
		lineHeight:20,
		color:'#434343'
	},
	productIntroRightText:{
		fontSize:14,
		lineHeight:24,
		color:'#434343'

	},
	waitingTick:{
		borderRadius:2,
		padding:3,
		backgroundColor:'#FF9220',
		marginLeft:9
	},
	waitingTickText:{
		fontSize:10,
		color:'#ffffff'
	}
})

module.exports = ProductItem;