define(function(require,exports,module){
	var home=require('vm/home/home');
	var list=require('vm/list/list');
	var product=require('vm/product/product');
	require('vm/app.css')
	var app = new Vue({
		el: '#app',
		data: {
			view: '',
			query: [],
			search: '',
			searchQuery: '',
			isShowSearch: true
		},
		methods: {
			showResult: function () {
				this.searchQuery = this.search;
				this.search = '';
			},
			goBack: function () {
				history.go(-1)
			}
		},
		events: {
			dealSearch: function (msg) {
				this.isShowSearch = msg;
			}
		}
	})
	module.exports=app;
})
