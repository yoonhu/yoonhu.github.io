"use strict";
//Mobile기기인지 PC인지 체크하여 페이지 보여줌
var filter = "win16|win32|win64|mac";
if( navigator.platform  ){
	if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
		//alert("모바일 접속");
	}else{
		//alert("PC 접속");
	}
}
function uxLoad(){
	uxGnb();
	uxSnbMenu();
	uxTapMenuType1();
	//uxTapMenuType2();
	uxEqual();
	uxWinSizeText();
}
window.onload = uxLoad;
window.onresize = uxLoad;

$(function(){
	uxWrapInner();
	uxNumAdd();
	uxPrepend();
	uxTapFocus();
	uxAppend();
	uxFaqMenu();
	uxTextEllipsis();
	uxFixed();
	uxTextCopy();
	uxJqMenu();
	//$('.jq_exmenu li:nth-child(3n)').css('background','#000');
});

function uxNumAdd() {
	var gmNum = function(index) {return "gm" + (index + 1);};
	$(".gnb_depth1").addClass(gmNum);
}

function uxGnb() {
	if ($(window).width() > 768 ){
		$(".wrap").addClass("web").removeClass("mobile");
		uxGnbText();
		uxWebGnb();
	}else{
		$(".wrap").addClass("mobile").removeClass("web");
		$('.gnblink').attr('href','javascript:;');
		$('.icon-menu').removeClass('icon-close');
		uxMobileGnb();
	}
}

function uxGnbText() {
	var gnbLink1 = $('.gm1 .gnb_depth2 ul li:first a').attr('href')
		,gnbLink2 = $('.gm2 .gnb_depth2 ul li:first a').attr('href')
		,gnbLink3 = $('.gm3 .gnb_depth2 ul li:first a').attr('href')
		,gnbLink4 = $('.gm4 .gnb_depth2 ul li:first a').attr('href')
		,gnbLink5 = $('.gm5 .gnb_depth2 ul li:first a').attr('href');
	$(".gnblink").each(function(){
		if($(this).attr("href") == "javascript:;" || $(this).attr("href") == "" || $(this).attr("href") == "#"){
			$('.gm1 .gnblink').attr("href" , gnbLink1);
			$('.gm2 .gnblink').attr("href" , gnbLink2);
			$('.gm3 .gnblink').attr("href" , gnbLink3);
			$('.gm4 .gnblink').attr("href" , gnbLink4);
			$('.gm5 .gnblink').attr("href" , gnbLink5);
		}
	});
}

function uxGnbLinkEffect() {
	$('.gnb_depth1').append("<i></i>");
	$('.gnlink').on('mouseenter',function(){
		$(this).parent().find('i').show().stop().animate({'width':'100%', 'marginLeft':'-50%'}, 150);
	});
	$('.gnblink').on('mouseleave',function(){
		$(this).parent().find('i').stop().animate({'width':0, 'marginLeft':'-1px'}, 150);
	});
}

function uxWrapInner() {
	$('.header').wrapInner("<div class='headerwrap' />");
	$('.visual').wrapInner("<div class='visualwrap' />");
	$('.footer').wrapInner("<div class='footerwrap' />");
}

function uxPrepend() {
	$(".navigation").prepend("<button class='icon-menu' title='Menu Open'><span>MENU</span></button>");
	$('.nav').hide();
	$(".gnb_depth2 li:first").addClass('firstchild');
	$(".gnb_depth2 li:last").addClass('lastchild');
	$('.icon-menu').click(function() {
		if ($(this).hasClass('icon-close')) {
			$(this).removeClass('icon-close').attr('title','Menu Open');
			$('.nav').hide();
		} else {
			$(this).addClass('icon-close').attr('title','Menu Close');
			//$('.nav').show().stop().animate({'width':'50%','left':'0'}, 1000);
			$('.nav').show();
		}
	});
}

function uxAppend() {
	$(".wrap").append("<a href='javascript:;' class='icon-top icon-angle-up'><span>top</span></a>");
}

function uxWebGnb() {
	$('.nav').show();
	$(".web .gnblink").bind("mouseenter focusin",function(){
		$(this).next().stop().slideDown().parent().siblings().children().next().stop().slideUp();
		$(this).parent().addClass("selected").siblings().removeClass("selected");
	})
	$(".web .gnb").bind("mouseleave focusout",function(){
		$(".gnb_depth2").slideUp();
		$(".gnb_depth1").removeClass("selected");
	});
}

function uxMobileGnb() {
	$('.nav').hide();
	$(".mobile .gnblink").bind("click",function(){
		$(this).next().stop().slideDown().parent().siblings().children().next().slideUp();
		$(this).parent().toggleClass("selected").siblings().removeClass("selected");
	});
}

function uxSnbMenu() {
	var snbMenu = $('.snb>li>a');
	snbMenu.on('click focus', function(){
		$(this).parent().addClass('current').siblings().removeClass('current');
	});
}

function uxSnbMenu2(n){
	$('html, body').stop().animate({
		scrollTop : $('.section').eq(n).offset().top
	});
}

function uxTapMenuType1() {
	var $tapMenu = $('.tapmenu>li>a')
		,$tapCont = $('.tapcont');
	$tapMenu.bind('click', function() {
		var index = $tapMenu.index($(this));
		$tapMenu.removeClass('current');
		$(this).addClass('current');
		$tapCont.hide().eq(index).show();
	}).eq(0).click();
}

function uxTapMenuType2() {
	var $tapNav = $('.jq_exmenu dl dt');
	$tapNav.on("mouseover focus" , function() {
		$(".jq_exmenu dd").removeClass("current");
		$(this).parent().addClass("current");
	});
}

function uxFaqMenu() {
	/*
	$('.faqmenu').find('dd').hide().end().find('.faqlink').bind("click", function(){
		$(this).parent().next().slideToggle('fast');
	});
	*/
	$('.faqmenu dd').hide();
	$('.faqlink').bind("click", function(){
		$(this).parent().next('dd').slideToggle('fast').siblings('dd:visible').slideUp('fast');
		$('.faqmenu dl dt').removeClass('active');
		$(this).parent().addClass('active');
	});
}


function uxJqMenu() {
	var jqItem = $('.jq_exmenu li');
	jqItem.addClass('hide');
	jqItem.find('dl').slideUp(100);
	$('.exlink').on("click", function(){
		var jqCont = $(this).parents('.jq_exmenu li:first');
		if(jqCont.hasClass('hide')){
			jqItem.addClass('hide').removeClass('show');
			jqItem.find('dl').slideUp(100);
			jqCont.removeClass('hide').addClass('show');
			jqCont.find('dl').slideDown(100);
		} else {
			jqCont.removeClass('show').addClass('hide');
			jqCont.find('dl').slideUp(100);
		}
	});

	$('.jq_exmenu dl dd').hide();
	$('.jq_exmenu dl dt').bind("click", function(){
		$(this).next('dd').slideToggle('fast').siblings('dd:visible').slideUp('fast');
		$('.jq_exmenu dl dt').removeClass('active');
		$(this).addClass('active');
	});
}

/* 높이값 동일하게 맞추기 */
function uxEqualAll() {
	var cols = document.querySelectorAll('[class]'),
			encountered = []
	for (i=0;i<cols.length;i++){
		var attr = cols[i].getAttribute('class')
		if (encountered.indexOf(attr) == -1){
			encountered.push(attr)
		}
	}
	for (set=0;set<encountered.length;set++){
		var col = document.querySelectorAll('[class="'+encountered[set]+'"]'),
			group = []
		for (i=0;i<col.length;i++){
			col[i].style.height = 'auto'
			group.push(col[i].scrollHeight)
		}
		for (i=0;i<col.length;i++){
			col[i].style.height = Math.max.apply(Math,group)+'px'
		}
	}
}

function uxEqual() {
	$.fn.equalizeHeights = function() { 
	var maxHeight = this.map(function( i, e ) {
		return $( e ).height();
	}).get();
		return this.height( Math.max.apply( this, maxHeight ) );
	};
	$(function(){ 
		$(".equal").equalizeHeights();
	});
}

/* 고정 메뉴 부분 */
function uxFixed() {
	$(window).scroll(function() {
		var position = $(window).scrollTop(); 
		var navHeight = $('.navigation').height();
		if(position >= 200) { 
			$('.navigation').addClass('fixed');
			$('.sidebar').addClass('fixed').css('top',navHeight + 'px');
			$('.icon-top').show();
		} else { 
			$('.navigation').removeClass('fixed').css('top','0');
			$('.sidebar').removeClass('fixed');
			$('.icon-top').hide();
		}
	});

	$('.icon-top').click(function(){
		$('body,html').animate({
			'scrollTop':0
		},400)
	});
}

/* 텍스트 불러오기 */
function uxTextCopy() {
	$("#cTitle").text($(".snb").find(".current").text());
}

/* 텍스트 말줄임 */
function uxTextEllipsis() {
	$("#cTitle").each(function(){
		if($(this).text().length > 30) {
			$(this).text($(this).text().substr(0, 27));
			$(this).append('...');
		}
	});
}

/* 접근성 고려 레이어 키보드방지 */
function uxTapFocus() {
	//Shift+Tap Focus Break
	$('.stapbreak').keydown(function(e) {
		if (e.keyCode == 9 && e.shiftKey) {
			return false;
		}
	});
	//Tab Focus Break
	$('.tapbreak').keydown(function(e) {
		if (e.keyCode == 9 && !e.shiftKey) {
			return false;
		}
	});
}


/* 새창팝업 리사이징 후 가운데 정렬 */
function uxResizeNewWin() {
	rw=1024;
	rh=700;
	sw=screen.availWidth;
	sh=screen.availHeight;
	xw=(sw-rw)/2;
	xh=(sh-rh)/2;
	window.resizeTo(rw,rh);
	window.moveTo(xw,xh);
}

/* 유투브 재생이 끝나면 레이어 닫기
var player = {},
	$iframePlayer = {},
	tag = document.createElement('script'),
	firstScriptTag = document.getElementsByTagName('script')[0];
	
	
	tag.src = "https://www.youtube.com/iframe_api";
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
	player = new YT.Player('iframePlayer', {
		width: '850',
		height: '510',
		videoId: 'bN4zk9_O_dI',
		events: {
			onReady : function( event ) {
				event.target.playVideo();
				$iframePlayer = document.getElementById('iframePlayer');
			},
			onStateChange : function( event ) {
				if( event.data == 0 ) {
					$iframePlayer.style['display'] = 'none';
				}
			}
		}
	});
}
*/

/* 스크린 사이즈 콘솔에 보이기 */
function uxWinSizeText() {
	var $w = $(window);
	if(window.console!=undefined){
		setTimeout(console.log.bind(console, "%cUXCSS","font: 1em Arial; color: #ec6521;"),0);
		//setTimeout(console.log.bind(console, "%c Template","font: 2em sans-serif; color: #333;"),0);
		console.clear();
	}
	console.log('Window Size: ' + $w.width() + 'x' + $w.height());
	console.log('Screen Size: ' + screen.width + 'x' + screen.height);
	console.log('Device pixel ratio: ' + window.devicePixelRatio);
	console.log('Pixel depth: ' + screen.pixelDepth);
	console.log('Touch support: ' + ('ontouchend' in document));
	
	/*
	var markup = '<div id="meta" style="display:block;position:fixed;bottom:0;left:0;width:200px;border:1px solid rgba(0,0,0,.5);color:#fff;text-align:left;"><span>Window size: '
		+ '<span id="winsize">' + $w.width() + 'x' + $w.height() + '</span>'
		+ '<br>Screen size: ' + screen.width + 'x' + screen.height
		+ '<br>Device pixel ratio: ' + window.devicePixelRatio
		+ '<br>Pixel depth: ' + screen.pixelDepth
		+ '<br>Touch support: ' + ('ontouchend' in document);

	$(document.body).append( markup );

	$w.on( 'resize', function() {
		$('#winsize').html( $w.width() + 'x' + $w.height() );
	});
	*/
}