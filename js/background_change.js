$(window).load(function(){
	var clickFlug = true,
	timer,
	speed=3000,//換banner時間
	move_speed=1000,//"slow"
	start_index = 0,
	now_index = 0;
	
	timer=setTimeout(bannerMove,speed)
	
	$(".dot").eq(start_index).addClass("dot_select");
	
	$('.dot').click(function(){
        if(now_index == $(this).index(".dot")){
            return;
        }
		if(clickFlug){
			clickFlug = false;
			clearTimeout(timer);
			now_index = $(this).index(".dot");
			
			$(".banner_text").eq(start_index).addClass("no_look");
			$(".banner_text").eq(now_index).removeClass("no_look");
			
			//dot
			$(".dot").eq(start_index).removeClass("dot_select");
			$(".dot").eq(now_index).addClass("dot_select");

			
			$(".bk_change").eq(start_index).animate({ opacity: '0' },move_speed,function(){   });
		    $(".bk_change").eq(now_index).animate({ opacity: '1' },move_speed,function(){ 
		    	start_index = now_index;
		    	timer=setTimeout(bannerMove,speed)
				clickFlug = true;
	    	});
		}
	})
	
	function bannerMove(){
		if(clickFlug){
			clickFlug = false;
			clearTimeout(timer);
	
			now_index = start_index+1;
			
			if( now_index >= $( ".bk_change" ).length)
		    {
		    	now_index = 0;
		    } 
			
			//text
			$(".banner_text").eq(start_index).addClass("no_look");
			$(".banner_text").eq(now_index).removeClass("no_look");
			
			//dot
			$(".dot").eq(start_index).removeClass("dot_select");
			$(".dot").eq(now_index).addClass("dot_select");
			
			
			$(".bk_change").eq(start_index).animate({ opacity: '0' },move_speed,function(){   });
		    $(".bk_change").eq(now_index).animate({ opacity: '1' },move_speed,function(){ 
		    	start_index = now_index;
		    	timer=setTimeout(bannerMove,speed)
				clickFlug = true;
	    	});
		}
	}

	

})