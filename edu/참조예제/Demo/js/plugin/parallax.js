/*======================================================
初期設定 //초기설정
======================================================*/
//セクションの高さの最小値 ////섹션의 높이의 최소치
var minHeight = 1080;
//自動スクロールの速度（1000で1秒、多いほどゆっくり） ////자동 스크롤의 속도(1000으로 1초, 많은 만큼 천천히)
var scrollSpeed = 1000;

//各要素の背景初期位置を格納しておくオブジェクト  ////각 요소의 배경 초기 위치를 격납해 두는 오브제크
var originBgPosition = new Object();

/*======================================================
ドキュメント読み込み後の処理  //문서 읽기 후의 처리
======================================================*/
$(document).ready(function(){

	//選択枠を隠す
	$('a').focus(function(e){this.blur()});

	//レイヤー用のdiv要素を2枚追加 ////층용의 div 요소를 2매 추가
	$(".section")
		.prepend('<div class="layer layer2"></div>')
		.prepend('<div class="layer layer1"></div>');

	//背景画像の初期位置を取得  ////배경 화상의 초기 위치를 취득
	$(".section").each(function(i){
		var _thisID = $(this).attr("id");
		originBgPosition[_thisID] = new Object();
		originBgPosition[_thisID]["section"] = getbackgroundPosition($(this));
		originBgPosition[_thisID]["layer1"] = getbackgroundPosition($(this).find(".layer1"));
		originBgPosition[_thisID]["layer2"] = getbackgroundPosition($(this).find(".layer2"));
	});

	//背景の配置を「fixed」に変更////배경의 배치를 「fixed」로 변경
	$(".section, .layer1, .layer2").css("background-attachment","fixed");

	//画面をアップデート ////화면을 업데이트
	$(window).trigger("resize");

});

/*======================================================
背景位置を取得してハッシュで返す
======================================================*/
function getbackgroundPosition(obj) {
	var pos = obj.css("background-position");
	var posArray = new Array();
	//IE対策
	if(pos){
		//IE以外
		posArray = pos.split(" ");
	}else{
		//IE
		posArray = [obj.css("backgroundPositionX"), obj.css("backgroundPositionY")];
	}	
	return {x:parseInt(posArray[0]), y:parseInt(posArray[1])};
}

/*======================================================
パララックスを実現するための関数  //패럴랙스를 실현하기 위한 함수
======================================================*/
$(window).bind("scroll resize", parallaxScroll);
function parallaxScroll (event) {

	//イベントタイプがresizeのときの処理
	if(event.type == "resize"){
		//セクションの高さを画面の高さに合わせる
		if($(window).height() > minHeight){
			$(".section").height($(window).height() + 50);
		}
	}

	//ナビゲーションの表示・非表示切り替え
	if($(window).scrollTop() < $("#topNav").offset().top + $("#topNav").height()){
		$("#nav").animate({opacity:"hide"}, 200);
	} else {
		$("#nav").animate({opacity:"show"}, 200);
	}

	//画面内に入っている要素を返す
	var activeContents = $(".section").filter(function (i) {	
		if($(window).scrollTop() + $(window).height() > $(this).offset().top && $(window).scrollTop() < $(this).offset().top + $(this).height()){
			return true;
		}else{
			return false;
		}
	});

	//背景画像位置のアップデート
	activeContents.each(function(i){

		//現在の要素内でのスクロール位置を取得
		var scrollTop = $(this).offset().top - $(window).scrollTop();
		var scrollLeft = $(this).offset().left- $(window).scrollLeft();
        //console.log( activeContents.size(), scrollTop ,  scrollLeft);
		//新しい背景座標を計算
		var _thisID = $(this).attr("id");
		var newBgPosition = {section:{x:0, y:0}, layer1:{x:0, y:0}, layer2:{x:0, y:0}}
		//X座標
		newBgPosition["section"]["x"] = originBgPosition[_thisID]["section"]["x"] + scrollLeft * 0.2;
		newBgPosition["layer1"]["x"] = originBgPosition[_thisID]["layer1"]["x"] + scrollLeft * 0.3;
		newBgPosition["layer2"]["x"] = originBgPosition[_thisID]["layer2"]["x"] + scrollLeft * 0.6;
		//Y座標
		newBgPosition["section"]["y"] = originBgPosition[_thisID]["section"]["y"] + scrollTop * 0.2;
		newBgPosition["layer1"]["y"] = originBgPosition[_thisID]["layer1"]["y"] + scrollTop *0.3;
		newBgPosition["layer2"]["y"] = originBgPosition[_thisID]["layer2"]["y"] + scrollTop * 0.6;

		//各背景を移動させる
		$(this).css("background-position", newBgPosition["section"]["x"] + "% " + newBgPosition["section"]["y"] + "px");
		$(this).find(".layer1").css("background-position", newBgPosition["layer1"]["x"] + "px " + newBgPosition["layer1"]["y"] + "px");
		$(this).find(".layer2").css("background-position", newBgPosition["layer2"]["x"] + "px " + newBgPosition["layer2"]["y"] + "px");
	});
}

/*======================================================
ナビゲーションによるスクロール
======================================================*/
function pageScroll(n){
	$.scrollTo('#section' + n, scrollSpeed, {easing:"easeInOutQuart"});
}