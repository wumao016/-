define(function(require,exports,module){
	require('vm/home/home.css');
	require('filter/filter');
	var Util=require('util/util');
	var Home = Vue.extend({
		template: Util.tpl('tpl_home'),
		// 数据通过data属性来设置
		data: function () {
			// 通过返回值，将数据绑定
			return {
				list: [
					{id: 1, title: '美食', url: '01.png'},
					{id: 2, title: '电影', url: '02.png'},
					{id: 3, title: '酒店', url: '03.png'},
					{id: 4, title: '休闲娱乐', url: '04.png'},
					{id: 5, title: '外卖', url: '05.png'},
					{id: 6, title: 'KTV', url: '06.png'},
					{id: 7, title: '周边游', url: '07.png'},
					{id: 8, title: '丽人', url: '08.png'},
					{id: 9, title: '小吃快餐', url: '09.png'},
					{id: 10, title: '火车票', url: '10.png'}
				],
				ad: [],
				items: []
			}
		},
		created: function () {
			var me = this;
			me.$dispatch('dealSearch', true)
			Util.ajax('data/home.json', function (res) {
				if (res && res.errno === 0) {
					me.ad = res.data.ad;
					me.items = res.data.list;
				}
			})
		}
	})
	Vue.component('home', Home);
	module.exports=Home
})