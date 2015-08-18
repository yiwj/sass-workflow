(function(global, doc){
	'use strict';

	var page = doc.querySelector('#page');

	// page.classList.add('grid');

	doc.onkeydown = function(evt) {
		evt = evt || window.event;
		var key   = evt.keyCode || evt.which,
			shift = evt.shiftKey;
		// Shift + G(71)
		if (shift && key === 71) {
			page.classList.toggle('grid');
		}
	}

})(window, window.document);