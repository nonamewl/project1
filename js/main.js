
	
	
	$('.xlbox').mouseover(function() {
  $('.menu-box').slideToggle(250)
	})
	
	    $('.xlbox').mouseout(function() {
	 $('.menu-box').slideToggle(0)
	 
	})   
	
	$('.menu-box').mouseover(function() {
 $('.menu-box').css('display','block')
	})
	$('.menu-box').mouseout(function() {
 $('.menu-box').slideToggle(0)
	 	
	})
	var myAudio = document.getElementById('audio1');
		 	function bgm(){	
			if(myAudio.paused){
			      
			
				  myAudio.play();
				  $('.imgmbox').attr('src','images/btnz.svg')
			    }else{
					 myAudio.pause();
				 $('.imgmbox').attr('src','images/btnb.svg')
				}}
				