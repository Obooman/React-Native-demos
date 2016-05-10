var { getBackButton } = require('./NavgationBarCustomElements');
var {  Navigator } = require('react-native');
var {  CustomNavigatorConfig } = require('./components');

var RouteMap = {
  "index/index#root":() => {
    return (
      {
        name: 'WelcomeView',
        title:'Index',
        component:require('./SceneOne'),
        rightButton:'Login',
      }
    )
  },
  "index/index":() => {
    return (
      {
        name: 'WelcomeView',
        title:'Index',
        component:require('./SceneOne'),
        rightButton:'Login',
        leftButton:getBackButton({text:"Back"}),
      }
    )
  },
  "root":() => {
    return (
      {
        title:'Root',
        component:require('./RootScene'),
        rightButton:'Login',
      }
    )
  },
  "account/account" : () => {
    return (
      {
        name: 'WelcomeView',
        title:'My Account',
        component:require('./SceneTwo'),
        rightButton:'Setting',
        leftButton:getBackButton({text:"Back"}),
      }
    )
  },
  "setting":() => {
    return ({
      name: 'WelcomeView',
      title:'Setting',
      component:require('./SceneThree'),
      rightButton:'Cool',
      leftButton:getBackButton({text:"Back"}),
      sceneConfig:CustomNavigatorConfig.CustomNavigatorConfigWithoutGesture

    })
  },
  "success":() => {
    return ({
      name: 'Wunderful',
      title:'Success',
      component:require('./CompleteScene'),
      rightButton:'Done',
    })
  },
  "fixed/buy":() => {
    return ({
      name: 'Wunderful',
      title:'Buy',
      component:require('./NoComponet'),
    })
  }
}

var getRoute = function(routeName){

  // var defaultScene = {
  //   title:'ERROR',
  //   component:<View></View>
  // };

  return  RouteMap[routeName]() 
}

module.exports = getRoute;