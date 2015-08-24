// IIFE 패턴
(function(global, doc){
	// 문법 엄격모드
	'use strict';

	// 문서에서 적용 대상을 선택
	var page = doc.querySelector('#page');

	// 초기 수행 (grid 클래스 속성 적용)
	// page.classList.add('grid');

	// 사용자의 키 이벤트 감지
	doc.onkeydown = function(evt) {
		evt = evt || window.event;
		var key   = evt.keyCode || evt.which,
			shift = evt.shiftKey;

		// 사용자가 Shift + G(71)를 눌렀을 때,
		if (shift && key === 71) {
			// 적용 대상에 grid 클래스 속성을 토글(on/off)
			page.classList.toggle('grid');
		}
	}

})(window, window.document);