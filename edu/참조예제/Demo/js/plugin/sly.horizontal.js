jQuery(function($){
	'use strict';

	// -------------------------------------------------------------
	//   GALLERY_매체광고 mediaFrame
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#mediaFrame');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			//cycleBy: 'pages',
			//cycleInterval: 1000,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
	}());

	// -------------------------------------------------------------
	//   GALLERY_지면광고 printingFrame
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#printingFrame');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			//cycleBy: 'pages',
			//cycleInterval: 1000,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
	}());

	// -------------------------------------------------------------
	//   GALLERY_캘리그라피r calligraphyFrame
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#calligraphyFrame');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			//cycleBy: 'pages',
			//cycleInterval: 1000,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
	}());
});
