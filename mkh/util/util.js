define(function(require,exports,module){
	var Util = {
		tpl: function (id) {
			return document.getElementById(id).innerHTML;
		},
		ajax: function (url, fn) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						var res = JSON.parse(xhr.responseText);
						fn && fn(res)
					}
				}
			}
			xhr.open('GET', url, true);
			xhr.send(null)
		}
	}
	module.exports=Util;
})