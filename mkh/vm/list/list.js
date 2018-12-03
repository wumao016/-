define(function(require,exports,module){
	require('vm/list/list.css');
	require('filter/filter');
	var Util=require('util/util');
	var List = Vue.extend({
		props: ['search'],
		template: Util.tpl('tpl_list'),
		data: function () {
			return {
				type: [
					{value: '价格排序', key: 'price'},
					{value: '销量排序', key: 'sales'},
					{value: '好评排序', key: 'evaluate'},
					{value: '优惠排序', key: 'discount'}
				],
				list: [],
				other: []
			}
		},
		methods: {
			showAll: function () {
				this.list = this.list.concat(this.other)
				this.other = [];
	
			},
			sort: function (key) {
				this.list.sort(function (a, b) {
					if (key === 'discount') {
						return (a.orignPrice - a.price) - (b.orignPrice - b.price)
					}
					return b[key] - a[key]
				})
			}
		},
		created: function () {
			this.$dispatch('dealSearch', true)
			var me = this;
			var query = this.$parent.query;
			var url = 'data/list.json';
			if (query[0] !== undefined && query[1] !== undefined) {
				url += '?' + query[0] + '=' + query[1]
			}
			Util.ajax(url, function (res) {
				if (res && res.errno === 0) {
					me.list = res.data.slice(0, 3);
					me.other = res.data.slice(3);
				}
			})
		}
	})
	Vue.component('list', List);
	module.exports=List;
})