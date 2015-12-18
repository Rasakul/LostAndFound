var atSignin = false;       // flag to indicate if user is in the sign in form area
var is_chrome;              // flag to indicate if chrome is used - will likely by deleted
var hasBeenViewed = false;  // helper flag to indicate if header must be animated or not
/* Scrolls to the form section (sign in, register)
 * Will automatically called when the sign in button on header is pressed.*/
function scrollToSignIn() {
    if (atSignin == false) {
        atSignin = true;
        $('html,body').animate({
                scrollTop: $("#loginForm").offset().top + 200
            },
            'slow');
    } else {
        atSignin = false;
        $('html,body').animate({
                scrollTop: $("#registerForm").offset().top + 200
            },
            'slow');
    }
}

/* Helper method to tell whether a specific element is visible in viewport.
 * Returns true if the given element is currently visible otherwise false. */
function isScrolledIntoView(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

/* Performs a jQuery-flip so the register form becomes visible. */
function flipToRegister() {
    $("#card").flip(true);
    if (is_chrome) {
        $("#registerForm").show();
    }
}

/* Performs a jQuery-flip so the login form becomes visible. */
function flipToLogin() {
    $("#card").flip(false);
    if (is_chrome) {
        $("#registerForm").hide();
    }
}

/* The following lines will be automatically executed after the page is loaded.
 * This section is the place to initialize additional scripts, listeners and event handlers.*/
$(document).ready(function () {

    /* Scrolls to the section with "So funktioniert es"
     * Will automatically called when the arrow is pressed.*/
    $('#prestudy_btn_icon').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
                scrollTop: $("#howto").offset().top + 1
            },
            'slow');
    })

    /* Check if user is on iOS device*/
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        document.getElementById('coverBackground').style.backgroundAttachment = "scroll";
    } else {
        document.getElementById('coverBackground').style.backgroundAttachment = "fixed";
    }

    var scroll_start = 0;
    var startchange = $('#howto');
    var offset = startchange.offset();
    if (startchange.length) {

        $(document).scroll(function () {  // this function is called whenever the user performs a scroll
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) { // change background color of the header depending on its position
                $("#navigationBar").css('background-color', '#558C89');     // if navbar is anywhere else
            } else {
                $('#navigationBar').css('background-color', 'transparent'); // if navbar is on the top picture
            }
            /* Hide & show header depending on the visibility of the sign in button */
            if (isScrolledIntoView(signInBtnBottom)) {
                // hide
                hasBeenViewed = true;
                $('#navigationBar').removeClass("swingInX");
                $('#navigationBar').addClass("animated");
                $('#navigationBar').addClass("swingOutX");
                $
            } else {
                if (hasBeenViewed) {
                    // show
                    $('#navigationBar').removeClass("swingOutX");
                    $('#navigationBar').addClass("animated");
                    $('#navigationBar').addClass("swingInX");
                }
            }
        });
    }

    /* Initialize the navigation bar with headroom.js so it can be animated*/
    (function () {
        var header = document.querySelector("#navigationBar");
        new Headroom(header).init();
        $("#card").flip({
            trigger: 'manual'
        });

        /* Check whether the device is on chrome
         * Will likely be deleted */
        is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        if (is_chrome) {
            $("#registerForm").hide();
        }

    }());
});		