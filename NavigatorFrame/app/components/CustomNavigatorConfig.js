var { 
	Navigator,
	Dimensions,
	PixelRatio
 } = require('react-native')

var buildStyleInterpolator = require('buildStyleInterpolator');
var OriginConfig = Navigator.SceneConfigs.PushFromRight;
var originInto = OriginConfig.animationInterpolators.into;

var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;

var FadeToTheLeft =  {
  transformTranslate: {
    from: {x: 0, y: 0, z: 0},
    to: {x: -Math.round(Dimensions.get('window').width * 0.3), y: 0, z: 0},
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true,
    round: PixelRatio.get(),
  },
  opacity: {
    from: 1,
    to: 0.9,
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: false,
    round: 100,
  },
  translateX: {
    from: 0,
    to: -Math.round(Dimensions.get('window').width * 0.3),
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true,
    round: PixelRatio.get(),
  },
};

var CustomGesture = {

  // If the gesture can end and restart during one continuous touch
  isDetachable: true,

  // How far the swipe must drag to start transitioning
  gestureDetectMovement: 0.3,

  // Amplitude of release velocity that is considered still
  notMoving: 0.3,

  // Fraction of directional move required.
  directionRatio: 0.66,

  // Velocity to transition with when the gesture release was "not moving"
  snapVelocity: 10,

  // Region that can trigger swipe. iOS default is 30px from the left edge
  edgeHitWidth: 30,

  // Ratio of gesture completion when non-velocity release will cause action
  stillCompletionRatio: 2 / 5,

  fullDistance: SCREEN_WIDTH,

  direction: 'left-to-right',

};

var CustomNavigatorConfig = {
	...OriginConfig,

  // Animation interpolators for horizontal transitioning:
  animationInterpolators: {
    out: buildStyleInterpolator(FadeToTheLeft),
    into: originInto,
  },

  gestures: {
    pop: CustomGesture,
  },

  // Rebound spring parameters when transitioning FROM this scene
  springFriction: 30,
  springTension: 200,

  // Velocity to start at when transitioning without gesture
  defaultTransitionVelocity: 20,
}

var CustomNavigatorConfigWithoutGesture = {
  ...CustomNavigatorConfig,
  gestures:{
    pop:null
  },
}

module.exports = { CustomNavigatorConfig, CustomNavigatorConfigWithoutGesture };