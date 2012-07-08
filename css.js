(function(win) {
	var doc = win.document,
		docBody = doc.body,
		createLink = function(src) {
			var link = doc.createElement('link');
			link.type = 'text/css';
			link.rel = 'stylesheet';
			link.href = src;
			return link;
		},
		resolveClassName = function(moduleName) {
			var parts = moduleName.split('/');
			return parts[parts.length - 1].replace('.', '-') + '-loaded';
		};

	define({
		load: function(name, req, load) {
			var link = createLink(name),
				head = doc.getElementsByTagName('head')[0],
				test, interval;

			test = doc.createElement('div');
			test.className = resolveClassName(name);
			test.style.cssText = 'position: absolute;left:-9999px;top:-9999px;';
			docBody.appendChild(test);

			head.appendChild(link);

			interval = win.setInterval(function() {
				if (test.offsetHeight > 0) {
					clearInterval(interval);
					docBody.removeChild(test);
					load(link);
				}
			}, 50);
		}
	});
})(window);