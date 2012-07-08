Require.js plugin for loading CSS stylesheets
----------------

The plugin allows user to load a CSS resource via require.js. To use it, create a CSS rule in your stylesheet, e.g.:

	.<file base name>-css-loaded {
		height: 1px;
	}

	/*for CSS file sample.css*/
	.sample-css-loaded {
		height: 1px;
	}	

Then `require` your resource along with the others:

	require(['css!css/sample.css'], function() {
		alert('Stylesheet has been loaded');
	});

Please, see the [demo.html](demo.html) file for the full sample.