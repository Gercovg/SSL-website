// $(function() {
// 	$('a[href*=#]:not([href=#])').click(function() {
// 	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
// 	    	var target = $(this.hash);
// 	    	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
// 	    	if (target.length) {
// 	    		$('html,body').animate({ 
// 	    			scrollTop: target.offset().top
// 				}, {
//                     duration: 500,
//                     easing: 'easeInOutCubic'
//                 });
// 	        	return false;
// 	      	}
// 	    }
// 	});
// });


// $(document).ready(function(){
// 	$('a[href^="#"]').on('click',function (e) {
// 	    e.preventDefault();

// 	    var target = this.hash;
// 	    var $target = $(target);

// 	    $('html, body').stop().animate({
// 	        'scrollTop': $target.offset().top
// 	    }, 500, 'easeInOutCubic', function () {
// 			window.location.hash = target;
// 	    });
// 	});
// });

var clickval = 0;

$(document).ready(function() {

	$("a").click(function(event){

		clickval = 1;

		event.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html,body').animate({
				scrollTop:$(this.hash).offset().top
			}, 500, 'easeInOutCubic', function() {
				window.location.hash = target;
			}
		);

	});




	$(window).bind('hashchange', function(event) {

		event.preventDefault();

		$('html, body').animate({
       		scrollTop: "" + $(window.location.hash).position().top + "px"
        }, 500, 'easeInOutCubic');

		// if (clickval == 0) {
       		// $('html, body').animate({
       		// 	scrollTop: "" + $(window.location.hash).position().top + "px"
        	// }, 500, 'easeInOutCubic');
		// }

		// clickval = 0;

		// alert(window.location.hash);

	});














});





alert("HI!");







// window.onpopstate = function(event) {
// 	$('html, body').animate({
// 		scrollTop: "" + $(window.location.hash).position().top + "px"
// 	}, 500, 'easeInOutCubic');
// };












