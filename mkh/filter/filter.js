
define(function(require,exports,module){
	Vue.filter('priceFilter', function (price) {
		return price + '元';
	})
	Vue.filter('originPriceFilter', function (price) {
		return '门市价:' + price + '元';
	})
	Vue.filter('salesFilter', function (sales) {
		return '已售' + sales;
	})
})