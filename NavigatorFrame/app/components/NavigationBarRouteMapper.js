'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} = React;

var NavigationBarRouteMapper = {
  /*
    NavigationBar 左侧按钮配置
  */
  LeftButton:function( route, navigator, index, navState ){

    var leftButton = route.leftButton;
    var leftButtonHandler = route.leftButtonHandler;
    var leftButtonOnlyText = !( leftButton instanceof Array ) && typeof leftButton == "string"

    if(leftButtonOnlyText){
      leftButton = (
        <Text>{ leftButton }</Text>
      )
    }

    //TODO 自定义左侧按钮处理函数

    return leftButton ? (

        <TouchableOpacity 
          style={ styles.leftButtonPosition }
          onPress = {() => {
            navigator.pop()
          }}
        >
        { leftButton }
        </TouchableOpacity>
    ):(

      // 无按钮时返回null会导致按钮点透
      <View></View>
    )
  },

  /*
    NavigationBar 右侧按钮配置
  */
  RightButton:function( route, navigator, index, navState ){
    var rightButton = route.rightButton;
    var rightButtonOnlyText = !(rightButton instanceof Array) && typeof rightButton == "string"

    if(rightButtonOnlyText){
      rightButton = (
        <Text>{ rightButton }</Text>
      )
    }

    return rightButton ? (

      <TouchableOpacity 
        style={styles.rightButtonPosition}
        onPress = { () => {

          /*
            将右侧按钮功能放入页面组件进行注册
            页面组件DidMount时注册 rightButtonHandler 方法
            页面生命周期内可修改rightButtonHandler方法
          */

          route.rightButtonHandler && route.rightButtonHandler()
      }}>
        { rightButton }
      </TouchableOpacity>
    ):(

      // 无按钮时返回null会导致按钮点透
      <View></View>
    );

  },

  /*
    NavigationBar 标题配置
    TODO:支持传入组件或复合element
  */
  Title:function( route, navigator, index, navState ){
    var title = route.title?route.title:'NoTitle'

    return (
      <View style = { styles.title }>
        <Text style={ styles.titleText }>{ title }</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  title:{
    marginVertical: 18,
  },
  titleText:{
    fontWeight:"bold",
    fontSize:16
  },
  rightButtonPosition:{
    paddingRight:14,
    padding:10,
    marginVertical: 8,
  },
  leftButtonPosition:{
    paddingLeft:14,
    padding:10,
    marginVertical: 8,
  }
})

module.exports = NavigationBarRouteMapper;