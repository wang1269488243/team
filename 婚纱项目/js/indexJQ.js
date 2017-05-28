//logo3d翻转特效
//$(".logo").anchorHoverEffect(); 
//$(".logo").anchorHoverEffect({type: 'brackets'});

//导航字体交换效果;
$("nav ul li a").mouseenter(function() {
	//	console.log($("nav ul li").text());
	$(this).children().eq(0).stop().animate({ top: "10px" }, 200);
	$(this).children().eq(1).stop().animate({ top: "-5px" }, 200);
})
$("nav ul li a").mouseleave(function() {
	//	console.log($("nav ul li").text());
	$(this).children().eq(0).stop().animate({ top: "-5px" }, 200);
	$(this).children().eq(1).stop().animate({ top: "10px" }, 200);
})

//鼠标悬停的显示点击按钮,并且有div弹出;
$("#content").mouseenter(function() {
	$("#arr").show();
	$("#Cbottom").stop().animate({ width: "1371px", opacity: "0.4" }, 1000, 'easeOutBounce');
	
})
$("#content").mouseleave(function() {
	$("#arr").hide();
	$("#Cbottom").stop().animate({ width: "1371px", opacity: "0" }, 500);
})

//轮播图的效果;
var pic = 0;
var flag = true;
$("#right").click(function() {
	if(flag) {
		flag = false;
		if(pic == 5) {
			pic = 0;
			$("#ul").css("left", "0px")
		}
		pic++;
		$("#ul").animate({ left: "-=1371px"}, 1000, 'easeInOutBack', function() {
			flag = true;
		});
	}
})

$("#left").click(function() {
	if(flag) {
		flag = false;
		if(pic == 0) {
			pic = 5;
			$("#ul").css("left", "-6855px");
		}
		pic--;
		$("#ul").animate({ left: "+=1371px" }, 1000, 'easeInOutBack', function() {
			flag = true;
		})
	}
})


//呼吸灯效果;
//$(".agency-left img").on()

	var timeId = null;
	timeId = setInterval(autoPlay, 3000);

//封装自动播放的呼吸灯;
var num = 1;
function autoPlay() {
	if (num > 3) {
		num = 0;
	}
	$(".agency-left ul li img").eq(num).animate({
		"opacity": "1"
	}, 2000);
	$(".agency-left ul li").eq(num).siblings().find('img').animate({
		"opacity": "0"
	}, 2000)
	num++;
}


/*function autoPlay(){
	if(num <= 4){
		$(".agency-left ul li img").eq(0).animate({"opacity":"1"},1000);
		num ++;
	}
	num = 0;
	$(".agency-left ul li img").eq(num).animate({"opacity":"1"},1000);
	$(".agency-left ul li img").eq(num).siblings().animate({"opacity":"0"},1000);
}*/


//客户定制信息滚动面板;

var timeId1 = null;

timeId1 = setInterval(autoPlay1, 1000);

function autoPlay1(){
	$(".agency-left-bottom .six ul").animate({top:"-260px"},20000);
}


//图片模糊效果

//new blurify({
//	    images: document.querySelectorAll('.blurify'),
//	    blur: 3,
//	    mode: 'auto',
//	}); 
$(".pic").mouseenter(function(){
	new blurify({
	    images: document.querySelectorAll('.blurify'),
	    blur: 0,
	    mode: 'auto',
	}); 
	$(".pic span").stop().animate({'opacity':0},1000);
})
$(".pic").mouseleave(function(){
	new blurify({
	    images: document.querySelectorAll('.blurify'),
	    blur: 3,
	    mode: 'auto',
	}); 
	$(".pic span").stop().animate({'opacity':0.8},1000);
})
$(".demo img").mouseenter(function(){
	new blurify({
	    images: document.querySelectorAll('.blurify'),
	    blur: 0,
	    mode: 'auto',
	}); 
})
$(".demo img").mouseleave(function(){
	new blurify({
	    images: document.querySelectorAll('.blurify'),
	    blur: 3,
	    mode: 'auto',
	}); 
})

//图片和文字镶嵌动画效果
//$('.demo').captionHover({
//fx: 'lily',
//});
/*$('.demo').captionHover({
 
  // lily, sadie, honey, layla, zoe, oscar
  // marley, ruby, roxy, sophie, romeo
  // dexter, sarah, chico, milo
  fx: 'sophie',
 
  // heading color
  headColor: '#fff',
 
  // caption color
  captionColor: '#fff',
 
  // overlay color
  overlay: '#3085a3',
 
  // px | % | em
  figWidth: '49%',
   
  // px | % | em
  figHeight : '100%',
 
  // background color of caption
  bgCaption : '#000',
 
  // icon color
  iconColor : '#fff'
 
}); */

//悬停图片实现翻转div
/*$(".one").mouseenter(function() {
	$(".three").stop().css({'transform': "rotate("  +  90  +  "deg)"});
	$(".three").animate({opacity:0.6},5);
})
$(".one").mouseleave(function() {
	$(".three").stop().css('transform', "rotate("  +  0  +  "deg)");
	$(".three").animate({opacity:0},5);
})

$(".two").mouseenter(function() {
	$(".one").stop().css('transform', "rotate("  +  90  +  "deg)");
	$(".one").animate({opacity:0.6},5);
})
$(".two").mouseleave(function() {
	$(".one").stop().css('transform', "rotate("  +  0  +  "deg)");
	$(".one").animate({opacity:0},5);
})

$(".three").mouseenter(function() {
	$(".four").stop().css('transform', "rotate("  +  90  +  "deg)");
	$(".four").animate({opacity:0.6},5);
})
$(".three").mouseleave(function() {
	$(".four").stop().css('transform', "rotate("  +  0  +  "deg)");
	$(".four").animate({opacity:0},5);
})

$(".four").mouseenter(function() {
	$(".two").stop().css('transform', "rotate("  +  90  +  "deg)");
	$(".two").animate({opacity:0.6},5);
})
$(".four").mouseleave(function() {
	$(".two").stop().css('transform', "rotate("  +  0  +  "deg)");
	$(".two").animate({opacity:0},5);
})*/


//自定义新特效
$.each($(".agency-right ul li a"), function(i) {
	$(this).mouseenter(function(){
		$(this).find("span").css('transform', "rotate("  +  90  +  "deg)");
		$(this).find("span").stop().animate({opacity:0},5);
	})
});

$.each($(".agency-right ul li a"), function(i) {
	$(this).mouseleave(function(){
		$(this).find("span").css('transform', "rotate("  +  0  +  "deg)");
		$(this).find("span").stop().animate({opacity:0.4},5);
	})
});



/*$.each($(".agency-right ul li a span"), function(i) {
	$(".agency-right ul li").mouseenter(function(){
		$(this).children().find(".one").css('transform', "rotate("  +  90  +  "deg)");
		$(this).children().find(".one").animate({opacity:0.6},5);
	})
});
$.each($(".agency-right ul li a span"), function(i) {
	$(".agency-right ul li").mouseleave(function(){
		$(this).children().find(".one").css('transform', "rotate("  +  0  +  "deg)");
		$(this).children().find(".one").animate({opacity:0},5);
	})
});
$.each($(".agency-right ul li a span"), function(i) {
	$(".agency-right ul li").mouseenter(function(){
		$(this).children().find(".four").css('transform', "rotate("  +  90  +  "deg)");
		$(this).children().find(".four").animate({opacity:0.6},5);
	})
});
$.each($(".agency-right ul li a span"), function(i) {
	$(".agency-right ul li").mouseleave(function(){
		$(this).children().find(".four").css('transform', "rotate("  +  0  +  "deg)");
		$(this).children().find(".four").animate({opacity:0},5);
	})
});
$.each($(".agency-right ul li a span"), function(i) {
	$(".agency-right ul li").mouseenter(function(){
		$(this).children().find(".two").css('transform', "rotate("  +  90  +  "deg)");
		$(this).children().find(".two").animate({opacity:0.6},5);
	})
});
$.each($(".agency-right ul li a span"), function(i) {
	$(".agency-right ul li").mouseleave(function(){
		$(this).children().find(".two").css('transform', "rotate("  +  0  +  "deg)");
		$(this).children().find(".two").animate({opacity:0},5);
	})
});*/


//产品展示部分滑动效果;
$.each($(".showcase-con-list a SPAN"), function(i) {
	$('.showcase-con-list').mouseenter(function(){
		$(this).children().find("SPAN").stop().animate({height:"435px"},500,"easeInOutCubic");
		
	})
});

//$(".showcase-con-list a").mouseenter(function(){
//	$(".showcase-con-list A SPAN").stop().animate({height:"435px"},500,"easeInOutCirc");
//})

$(".showcase-con-list a").mouseleave(function(){
	$(".showcase-con-list A SPAN").stop().animate({height:"0px"},500,"easeOutBounce");
})

//人物介绍边框显示效果;
$.each($(".team li a ins"),function(i){
	$(".team li").mouseenter(function(i){
		$(this).children().find("ins").stop().css("z-index","3");
		$(this).children().find(".person").stop().animate({opacity:"0.5"});
		$(this).children().stop().find(".buy").fadeIn(500);
		$(this).children().find("b").fadeOut();
		$(this).children().find("i").fadeOut();
	})
})

$.each($(".team li a ins"),function(i){
	$(".team li").mouseleave(function(i){
		$(this).children().find("ins").stop().css("z-index","1");
		$(this).children().find(".person").stop().css("opacity","1");
		$(this).children().stop().find(".buy").fadeOut();
		$(this).children().find("b").fadeIn(500);
		$(this).children().find("i").fadeIn(500);
	})
})


//实验代码效果;
/*$(".four-pic-main .spans span:eq(0)").on("click",function(){
	$(".four-pic-main ul:eq(0) li:eq(0)").animate({top:0});
	$(".four-pic-main ul:eq(0) li:eq(1)").animate({top:0});
	$(".four-pic-main ul:eq(0) li:eq(2)").animate({top:0});
	$(".four-pic-main ul:eq(0) li:eq(3)").animate({top:0});
	$(".four-pic-main ul).siblings().children().eq(0).animate({top:"380px"});
	$(".four-pic-main ul).siblings().children().eq(1).animate({top:"-380px"});
	$(".four-pic-main ul).siblings().children().eq(2).animate({top:"380px"});
	$(".four-pic-main ul).siblings().children().eq(4).animate({top:"-380px"});
})
$(".four-pic-main .spans span:eq(1)").on("click",function(){
	$(".four-pic-main ul:eq(1) li:eq(0)").animate({top:0});
	$(".four-pic-main ul:eq(1) li:eq(1)").animate({top:0});
	$(".four-pic-main ul:eq(1) li:eq(2)").animate({top:0});
	$(".four-pic-main ul:eq(1) li:eq(3)").animate({top:0});
	$(".four-pic-main ul).siblings().children().eq(0).animate({top:"380px"});
	$(".four-pic-main ul).siblings().children().eq(1).animate({top:"-380px"});
	$(".four-pic-main ul).siblings().children().eq(2).animate({top:"380px"});
	$(".four-pic-main ul).siblings().children().eq(3).animate({top:"-380px"});
})
$(".four-pic-main .spans span:eq(2)").on("click",function(){
	$(".four-pic-main ul:eq(2) li:eq(0)").animate({top:0});
	$(".four-pic-main ul:eq(2) li:eq(1)").animate({top:0});
	$(".four-pic-main ul:eq(2) li:eq(2)").animate({top:0});
	$(".four-pic-main ul:eq(2) li:eq(3)").animate({top:0});
	$(".four-pic-main ul).siblings().children().eq(0).animate({top:"380px"});
	$(".four-pic-main ul).siblings().children().eq(1).animate({top:"-380px"});
	$(".four-pic-main ul).siblings().children().eq(2).animate({top:"380px"});
	$(".four-pic-main ul).siblings().children().eq(3).animate({top:"-380px"});
})
$(".four-pic-main .spans span:eq(3)").on("click",function(){
	$(".four-pic-main ul:eq(3) li:eq(0)").animate({top:0});
	$(".four-pic-main ul:eq(3) li:eq(1)").animate({top:0});
	$(".four-pic-main ul:eq(3) li:eq(2)").animate({top:0});
	$(".four-pic-main ul:eq(3) li:eq(3)").animate({top:0});
	$(".four-pic-main ul).siblings().children().eq(0).animate({top:"380px"});
	$(".four-pic-main ul).siblings().children().eq(1).animate({top:"-380px"});
	$(".four-pic-main ul).siblings().children().eq(2).animate({top:"380px"});
	$(".four-pic-main ul).siblings().children().eq(3).animate({top:"-380px"});
})
$(".four-pic-main .spans span:eq(4)").on("click",function(){
	$(".four-pic-main ul:eq(4) li:eq(0)").animate({top:0});
	$(".four-pic-main ul:eq(4) li:eq(1)").animate({top:0});
	$(".four-pic-main ul:eq(4) li:eq(2)").animate({top:0});
	$(".four-pic-main ul:eq(4) li:eq(3)").animate({top:0});
	$(".four-pic-main ul).siblings().children().eq(0).animate({top:"380px"});
	$(".four-pic-main ul).siblings().children().eq(1).animate({top:"-380px"});
	$(".four-pic-main ul).siblings().children().eq(2).animate({top:"380px"});
	$(".four-pic-main ul).siblings().children().eq(3).animate({top:"-380px"});
})*/


/*$.each($(".four-pic-main ul"), function(i) {
	$(".four-pic-main .spans span:eq(0)").click(function(){
		$(".four-pic-main ul").eq(0).children().animate({top:0});
		$(".four-pic-main ul").eq(0).siblings().children().eq(0).animate({top:"380px"});
		$(".four-pic-main ul").eq(0).siblings().children().eq(1).animate({top:"-380px"});
		$(".four-pic-main ul").eq(0).siblings().children().eq(2).animate({top:"380px"});
		$(".four-pic-main ul").eq(0).siblings().children().eq(3).animate({top:"-380px"});
	})
});
$.each($(".four-pic-main ul"), function(i) {
	$(".four-pic-main .spans span:eq(1)").click(function(){
		$(".four-pic-main ul").eq(1).children().animate({top:0});
		$(".four-pic-main ul").eq(1).siblings().children().eq(0).animate({top:"380px"});
		$(".four-pic-main ul").eq(1).siblings().children().eq(1).animate({top:"-380px"});
		$(".four-pic-main ul").eq(1).siblings().children().eq(2).animate({top:"380px"});
		$(".four-pic-main ul").eq(1).siblings().children().eq(3).animate({top:"-380px"});
	})
});
$.each($(".four-pic-main ul"), function(i) {
	$(".four-pic-main .spans span:eq(2)").click(function(){
		$(".four-pic-main ul").eq(2).children().animate({top:0});
		$(".four-pic-main ul").eq(2).siblings().children().eq(0).animate({top:"380px"});
		$(".four-pic-main ul").eq(2).siblings().children().eq(1).animate({top:"-380px"});
		$(".four-pic-main ul").eq(2).siblings().children().eq(2).animate({top:"380px"});
		$(".four-pic-main ul").eq(2).siblings().children().eq(3).animate({top:"-380px"});
	})
});
$.each($(".four-pic-main ul"), function(i) {
	$(".four-pic-main .spans span:eq(3)").click(function(){
		$(".four-pic-main ul").eq(3).children().animate({top:0});
	})
});
$.each($(".four-pic-main ul"), function(i) {
	$(".four-pic-main .spans span:eq(4)").click(function(){
		$(".four-pic-main ul").eq(4).children().animate({top:0});
	})
});*/

/*$(".spans").on("click",function(){
	$.each($(".four-pic-main ul"),function(i){
		console.log(this);
		$('.four-pic-main-first').children().animate({top:0});
	})
})*/



/*$.each($(".four-pic-main"), function(i) {
	$(".four-pic-main .spans span:eq(0)").click(function(){
		$(".four-pic-main-first").children().animate({top:0});
		$(".four-pic-main-first").siblings().children().eq(0).animate({top:"380px"});
		$(".four-pic-main-first").siblings().children().eq(1).animate({top:"-380px"});
		$(".four-pic-main-first").siblings().children().eq(2).animate({top:"380px"});
		$(".four-pic-main-first").siblings().children().eq(3).animate({top:"-380px"});
	})
})
$.each($(".four-pic-main"), function(i) {
	$(".four-pic-main .spans span:eq(1)").click(function(){
		$(".four-pic-main-two").children().animate({top:0});
		$(".four-pic-main-two").siblings().children().eq(0).animate({top:"380px"});
		$(".four-pic-main-two").siblings().children().eq(1).animate({top:"-380px"});
		$(".four-pic-main-two").siblings().children().eq(2).animate({top:"380px"});
		$(".four-pic-main-two").siblings().children().eq(3).animate({top:"-380px"});
	})
})
$.each($(".four-pic-main"), function(i) {
	$(".four-pic-main .spans span:eq(2)").click(function(){
		$(".four-pic-main-three").children().animate({top:0});
		$(".four-pic-main-three").siblings().children().eq(0).animate({top:"380px"});
		$(".four-pic-main-three").siblings().children().eq(1).animate({top:"-380px"});
		$(".four-pic-main-three").siblings().children().eq(2).animate({top:"380px"});
		$(".four-pic-main-three").siblings().children().eq(3).animate({top:"-380px"});
	})
})
$.each($(".four-pic-main"), function(i) {
	$(".four-pic-main .spans span:eq(3)").click(function(){
		$(".four-pic-main-four").children().animate({top:0});
		$(".four-pic-main-four").siblings().children().eq(0).animate({top:"380px"});
		$(".four-pic-main-four").siblings().children().eq(1).animate({top:"-380px"});
		$(".four-pic-main-four").siblings().children().eq(2).animate({top:"380px"});
		$(".four-pic-main-four").siblings().children().eq(3).animate({top:"-380px"});
	})
})
$.each($(".four-pic-main"), function(i) {
	$(".four-pic-main .spans span:eq(4)").click(function(){
		$(".four-pic-main-five").children().animate({top:0});
		$(".four-pic-main-five").siblings().children().eq(0).animate({top:"380px"});
		$(".four-pic-main-five").siblings().children().eq(1).animate({top:"-380px"});
		$(".four-pic-main-five").siblings().children().eq(2).animate({top:"380px"});
		$(".four-pic-main-five").siblings().children().eq(3).animate({top:"-380px"});
	})
})
*/


$.each($(".spans span"), function(i,n) {
	$(n).click(function(){
		$(n).css("background-color","red");
		$(n).siblings().css("background-color","white");
		
		$(".four-pic-main ul").eq(i).children().animate({top:0});
		
		$(".four-pic-main ul").eq(i).siblings().children('li:odd').animate({"top":"380px"});
		console.log($(".four-pic-main ul").eq(i).siblings().children('li:odd'));
		
		$(".four-pic-main ul").eq(i).siblings().children('li:even').animate({"top":"-380px"});
		console.log($(".four-pic-main ul").eq(i).siblings().children('li:even'));
	})
})  	
