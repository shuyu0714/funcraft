/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {
	now_work_index =0;
	var docElem = document.documentElement,
		//header = document.querySelector( '.navbar-fixed-top' ),
		header2 = document.querySelector ('#n2'),
		didScroll = false,
		changeHeaderOn = 880,
	
		welcome_bar1 = $("#l_bar").offset().top,
		welcome_bar2 = $("#r_bar").offset().top,
		fun_text = $("#fun").offset().top,
		craft_text = $("#craft").offset().top,
		serimg = $(".ser_img").offset().top,
		
		total_h = 0,
		top_end = welcome_bar1,
		down_end = craft_text,
		ser_top_end = serimg,
		
		
		
		work_top = $(".w_img").offset().top;
		//down_end = 2630;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage , 0 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		var window_h = $(window).height();
		var now_total_h = sy+window_h;
		down_end = craft_text + window_h;
		
		//$("#welcome").html(welcome_bar2+$("#r_bar").height());
		 
		if( now_total_h >  total_h ){
			//正轉
			if( now_total_h <= top_end || now_total_h >= down_end){
				reset_data();
			}else{
				if(now_total_h >= welcome_bar1)
					if($("#l_bar").width()!=$("#welcome").width())
						$("#l_bar").animate({width:$("#welcome").width()},"slow");
				if(now_total_h >= welcome_bar2)
					if($("#r_bar").width()!=$("#welcome").width())
						$("#r_bar").animate({width:$("#welcome").width()},"slow");
				if(now_total_h >= fun_text)
					if($("#fun").css("opacity")!= 1)
						$("#fun").animate({opacity:'1',width:'154px'},"slow");
				if(now_total_h >= craft_text)
					if($("#craft").css("opacity")!= 1)
						$("#craft").animate({opacity:'1',width:'154px'},"slow");
				
			}
			
			if( now_total_h <= serimg || now_total_h >= serimg+window_h){
				reset_ser();
			}else{
				if(now_total_h >= serimg)
					if($(".ser_img").css("opacity")!= 1)
						$(".ser_img").animate({opacity:'1',"margin":'0'},"slow");
			}
			
			if( now_total_h <= work_top || now_total_h >= work_top+window_h){
				reset_look(now_work_index);
			}else{
				if(now_total_h >= work_top)
					change_look(now_work_index);
			}

			
		}else if(now_total_h <=  total_h){
			//倒轉
			if( now_total_h <= top_end || now_total_h >= down_end ){
				reset_data();
			}else{
				if(now_total_h <= welcome_bar1+window_h)
					if($("#l_bar").width()!=$("#welcome").width())
						$("#l_bar").animate({width:$("#welcome").width()},"slow");
				if(now_total_h <= welcome_bar2+window_h)
					if($("#r_bar").width()!=$("#welcome").width())
						$("#r_bar").animate({width:$("#welcome").width()},"slow");
				if(now_total_h <= fun_text+window_h)
					if($("#fun").css("opacity")!= 1)
						$("#fun").animate({opacity:'1',width:'154px'},"slow");
				if(now_total_h <= down_end)
					if($("#craft").css("opacity")!= 1)
						$("#craft").animate({opacity:'1',width:'154px'},"slow");
			}
			
			if( now_total_h <= serimg || now_total_h >= serimg+window_h){
				reset_ser();
			}else{
				if(now_total_h <= serimg+window_h)
					if($(".ser_img").css("opacity")!= 1)
						$(".ser_img").animate({opacity:'1',"margin":'0'},"slow");
			}
			
			if( now_total_h <= work_top || now_total_h >= work_top+window_h+$(".w_img").height()){
				reset_look(now_work_index);
			}else{
				if(now_total_h <= work_top+window_h+$(".w_img").height())
					change_look(now_work_index);
			}

		}
		
		if ( sy >= changeHeaderOn ) {
			$("#n1").css("display","none");
			$("#n2").css("display","block");
			$("#n2").removeClass("top750",0);
			classie.add( header2, 'navbar-shrink' );
		}
		else {
			$("#n1").css("display","block");
			
			if($(window).width()>767)
				$("#n2").css("display","none");
			else
				$("#n2").css("display","block");
			
			$("#n2").addClass("top750",0);
			classie.remove( header2, 'navbar-shrink' );
		}
		
		
		total_h = now_total_h;
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}
	
	function reset_data(){
		$("#l_bar").stop();
		$("#r_bar").stop();
		$("#fun").stop();
		$("#craft").stop();
		$("#l_bar").css("width","0px");
		$("#r_bar").css("width","0px");
		$("#fun").css({opacity:'0',width:'0px'});
		$("#craft").css({opacity:'0',width:'0px'});
	}
	
	function reset_ser(){
		$(".ser_img").stop();
		$(".ser_img").css({"margin-left":-$(".ser_img").width(),"opacity":'0'});
	}


	init();

})();