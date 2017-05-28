//轮播图
var content = document.getElementById("content");
var ul = document.getElementById("ul");
//content.appendChild(ul)
var lis = ul.children;
var left = document.getElementById("left"); 
var right = document.getElementById("right");
var arr = document.getElementById("arr");
var navLi = document.getElementById("navLi");
var navChange = document.getElementById("navChange");

//给nav的文字注册事件;
//navLi.mouseover(function(){
//	$(".nav-China").animate({top:"30px"},1000)
//})


//给按钮注册点击事件;

//设置底部弹出效果;
var Cbottom = document.getElementById("Cbottom");
//鼠标移入大盒子显示左右按钮，鼠标离开大盒子，隐藏左右按钮
content.onmouseover = function(){
		arr.style.display = "block";
		arr.style.cursor = "pointer";
		var json = {
			"width":1371,
			"opacity": 0.4,
			
		}
		animate(Cbottom,json);
	}
	
	content.onmouseout = function(){
		arr.style.display = "none";
		var json = {
			"width":0,
			"opacity": 0.4,
		}
		animate(Cbottom,json);
	}

//注册右侧点击按钮事件;
	var pic = 0;
	right.onclick = function(){
		if(pic == lis.length-1){
			pic = 0;
			ul.style.left = "0px";
		}
		pic ++;
		var target = - 1371 * pic;
		var json = {
			"left":target,
			"opacity": 1,
		}
		animate(ul,json);
	}
	
	
//注册左侧点击按钮事件;
	
	left.onclick = function(){
		if(pic == 0){
			pic = lis.length-1;
			ul.style.left = -1371 * (lis.length-1) + "px";
		}
		pic --;
		var target = - 1371 * pic;
		var json = {
			"left":target,
			"opacity": 1,
		}
		animate(ul,json);
	}
	
//设置自动轮播;









//创建排他方法remove;
	/*function remove(){
		for (var i = 0; i < olLis.length; i++) {
			olLis[i].removeAttribute("class");
		}
	}
	//创建animate移动方法;
	function animate(obj,target){
        clearInterval(obj.timerId);
        obj.timerId= setInterval(function (){
        var leader = obj.offsetLeft; // 好像是四舍五入，获取的值是一个整数
        var step =(target-leader)/10 ;  //63.15  0.9  0  1
        step= step>0?Math.ceil(step):Math.floor(step);
        leader = leader + step;
        obj.style.left = leader + 'px';
        if(leader==target){
          clearInterval(obj.timerId);
        }
      },20)
    }*/
   function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

function animate(obj,json,fn){
	clearInterval(obj.timeId);
	obj.timeId = setInterval(function(){
		var flag = true;
		for(var key in json){
			if(key == "opacity"){
				var leader = parseInt(getStyle(obj,key)*100)||0;
				var target = json[key]*100;
				var step = (target-leader)/10;
				step = step>0?Math.ceil(step):Math.floor(step);
				leader = leader + step;
				obj.style[key] = leader/100;
			}else if(key == "zIndex"){
				var leader = parseInt(getStyle(obj,key))||0;
				var target = json[key];
				var step = (target-leader)/10;
				step = step>0?Math.ceil(step):Math.floor(step);
				leader = leader + step;
				obj.style[key] = leader;
			}else{
				var leader = parseInt(getStyle(obj,key))||0;
				var target = json[key];
				var step = (target-leader)/10;
				step = step>0?Math.ceil(step):Math.floor(step);
				leader = leader + step;
				obj.style[key] = leader + "px";
			}
			if(leader != target){
				flag = false;
			}
		}
		
		if(flag){
			clearInterval(obj.timeId);
			if(fn){
				fn();
			}
		}
	},20)
}
