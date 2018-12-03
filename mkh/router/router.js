define(function(require,exports,module){
	var app=require('vm/app');
	var route=function() {
		var hash = location.hash;
		hash = hash.replace(/^#(\/)?/g, '');
		hash = hash.split('/');
		var map = {
			home: true,
			list: true,
			product: true
		};
		if (map[hash[0]]) {
			app.view = hash[0];
		} else {
			app.view = 'home';
		}
		app.query = hash.slice(1);
	}
	window.addEventListener('hashchange', route);
	module.exports=route;
})
