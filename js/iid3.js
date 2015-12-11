var atSignin = false;
var is_chrome;
function scroll(){
			$('html,body').animate({
       		 scrollTop: $("#howto").offset().top+1},
        	'slow');
		}

function scrollToSignIn(){
	if(atSignin == false){
		atSignin = true;
	$('html,body').animate({
       		 scrollTop: $("#loginForm").offset().top+200},
        	'slow');
	}else{
		atSignin = false;
		$('html,body').animate({
       		 scrollTop: $("#registerForm").offset().top+200},
        	'slow');
	}
}


function flipToRegister(){
	$("#card").flip(true);
	if(is_chrome){
		$("#registerForm").show();
	}
}

function flipToLogin(){
	$("#card").flip(false);
	if(is_chrome){
		$("#registerForm").hide();
	}
}

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#howto');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("#navigationBar").css('background-color', '#558C89');
       } else {
          $('#navigationBar').css('background-color', 'transparent');
       }
   });
    }

    (function() {
    var header = document.querySelector("#navigationBar");
    

    new Headroom(header, {
        "tolerance": 5,
        offset : 2100,
        classes: {
          "initial": "animated",
          "pinned": "swingInX",
          "unpinned": "swingOutX"
        }
    }).init();
    $("#card").flip({
  		trigger: 'manual'
	});
    is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if(is_chrome){
    	$("#registerForm").hide();
    }
	//$("#registerForm").hide();
}());

 
});		