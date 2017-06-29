/*top二级导航*/
var top_nav_cont = document.querySelector('.top-nav-cont');
var oLi = top_nav_cont.getElementsByTagName('li');
var nav_cont_nav2 = document.querySelector('.nav-cont-nav2');
var oTop_nav2= document.querySelector('.top-nav2');
//var oNav_cont_nav2 = nav_cont_nav2.getElementsByTagName('a');

for(var i = 0; i<oLi.length;i++){
	oLi[i].onmouseover = function(){
		if(this.children[1]){
			this.children[1].style.display = 'block';
			oTop_nav2.style.display = 'block';
		}else{
//			this.children[1].style.display = 'none';
//			oTop_nav2.style.display = 'none';
		}
	}
	oLi[i].onmouseout = function(){
		for(var j = 0;j<oLi.length;j++){
			if(this.children[1]){
				this.children[1].style.display = 'none';
				oTop_nav2.style.display = 'none';
			}else{
				
			}
		}
	}
}
/*产品小箭头*/
//i.iconfont.icon-angle-up
//i.iconfont.icon-arrow-t
/*产品list*/
var top_c_c_left = document.querySelector('.top-c-c-left');
var top_c_c_left_list = document.querySelector('.top-c-c-left-list');
var oSpan = top_c_c_left.querySelector('span');
var oPro_list = document.querySelector('.pro-list');
var icon_up = document.querySelector('i.iconfont.icon-angle-up');
var icon_down = document.querySelector('i.iconfont.icon-arrow-t');


oSpan.onmouseover = function(){
		oPro_list.style.display = 'block';
}
top_c_c_left.onmouseout = function(){
		oPro_list.style.display = 'none';
}



/*warp-top的js*/
//w-t-l-nav-l

var oNav_l = document.querySelector('.w-t-l-nav-l');
var oNav_li = oNav_l.querySelectorAll('li');
var imgBox = document.querySelector('.imgBox');
var oUl_list = imgBox.querySelectorAll('ul');
//var oW_t_img = document.querySelector('.w-t-l-c .showImg')

//for(var j = 0 ; j<2;j++){
//	console.log(oUl_list[j]);
//	//oUl_list[j].style.color = 'red';
//
//}


for(var i = 0; i<oNav_li.length;i++){
	oNav_li[i].index = i;
	oNav_li[i].onmouseover = function(){
//		alert(0)
		for(var j = 0 ; j<oNav_li.length;j++){
			oNav_li[j].className = '';
			
			oUl_list[j].style.display = 'none';
			
			//oUl_list[j].className = 'w-t-l-c';
		}
		oNav_li[this.index].className = 'active';
		//oUl_list[this.index].className = 'w-t-l-c showImg';
		if(oUl_list[this.index]){
			oUl_list[this.index].style.display = 'block';
		}
		
	}
}

/**/