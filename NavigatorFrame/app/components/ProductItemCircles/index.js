var ProductItemStatusCircles = {
	get ProductClosed(){ return require('./ProductClosed'); },
	get ProductProfiting(){ return require('./ProductProfiting'); },
	get ProductSoldout(){ return require('./ProductSoldout'); },
	get ProductWaiting(){ return require('./ProductWaiting'); },
	get ProgressCircle(){ return require('./ProgressCircle'); },
}

module.exports = ProductItemStatusCircles;
