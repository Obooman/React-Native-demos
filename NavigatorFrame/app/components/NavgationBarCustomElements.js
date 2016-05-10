var React = require('react-native')

var {
	View,
	Text,
	Image,
	StyleSheet,
} = React

var MultiElementsButton = config => {

}

var MultiElementsTitle = config => {

}

var getBackButton  = config => (
	<View style={ getBackButtonStyle.wrapper }>

      <Image 
      source = { require('../../static/right.png') }
      style={getBackButtonStyle.image}
      />

      <View style={getBackButtonStyle.textWrapper}>
      	<Text>{ config.text }</Text>
      </View>
  </View>
)

var getBackButtonStyle = StyleSheet.create({
	wrapper:{
		justifyContent:"center",
		flexDirection:'row',
		alignItems:'center'
	},
	image:{
        transform:[{rotate:"180deg"}],
        width:10,
        height:20,
	},
	textWrapper:{
		marginLeft:10
	}
})

module.exports = { MultiElementsButton, MultiElementsTitle, getBackButton};