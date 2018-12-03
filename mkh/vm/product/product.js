define(function(require,exports,module){
	require('vm/product/product.css');
	require('filter/filter');
	var Util=require('util/util');
	var Product = Vue.extend({
		template: Util.tpl('tpl_product'),
		data: function () {
			return {
				data: {
					src: '01.jpg'
				}
			}
		},
		created: function () {
			var me = this;
			me.$dispatch('dealSearch', false)
			var query = this.$parent.query;
			Util.ajax('data/product.json?id=' + query[0], function (res) {
				if (res && res.errno === 0) {
					me.data = res.data;
				}
			})
		}
	}) 
	Vue.component('product', Product);
	module.exports=Product;
})
