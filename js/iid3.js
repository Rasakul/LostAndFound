var atSignin = false;
var is_chrome;
var hasBeenViewed = false;
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

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
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
       
       if(isScrolledIntoView(signInBtnBottom)){
          hasBeenViewed = true;
          $('#navigationBar').removeClass("swingInX");
          $('#navigationBar').addClass("animated");
          $('#navigationBar').addClass("swingOutX");
          $
       }else{
        if(hasBeenViewed){
          $('#navigationBar').removeClass("swingOutX");
          $('#navigationBar').addClass("animated");
          $('#navigationBar').addClass("swingInX");
        }else{

        }
        
       }
   });
    }

    (function() {
    var header = document.querySelector("#navigationBar");

    new Headroom(header).init();


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