'use strict';

var merge = Object.assign;

var underlineToCamel = function( string ){
	var stringArray = string.split('_');

	stringArray = stringArray.map( word => {
		return ( word.substring(0,1).toUpperCase() + word.substring(1) )
	})

	return stringArray.join('');
}