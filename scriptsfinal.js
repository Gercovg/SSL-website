$(document).ready(function(){
	$("#navbarlist").mouseover(function(){
		$("#navbarlist").css("background-color", "yellow");
	});
	$("#navbarlist").mouseout(function(){
		$("#navbarlist").css("background-color", "white");
	});
});

$(function() {
	$( "#navbar" ).load( "navbar.html" );
	
	
});

$(document).ready(function () {

	$(window).resize(function(){
		var windowwidth = $(document).width();
		var menuwidth = $( "#navbar" ).width();
		var contentwith = windowwidth - menuwidth;
		$("#container").width(contentwith);
	});
	$("#nextarticle").click(function(){
		var articleid = $("article").attr('id');
		var articleidentifier = articleid.slice(-1);
		articleidentifier = parseInt(articleidentifier) + 1;
		if (articleidentifier == "8"){
			nameofpagetobeopend = "chapter8.html";
			window.location = (nameofpagetobeopend);	
		}
		else {
			var nameofpagetobeopend = "chapter" + articleidentifier + ".html";
			window.location = (nameofpagetobeopend);
		}
	});
	$("#lastarticle").click(function(){
		var articleid = $("article").attr('id');
		var articleidentifier = articleid.slice(-1);
		idtoopenarticle = parseInt(articleidentifier) - 1;
		if (articleidentifier == "0" || articleidentifier == "1"){
			nameofpagetobeopend = "index.html";
			window.location = (nameofpagetobeopend);	
		}
		else {
			var nameofpagetobeopend = "chapter" + idtoopenarticle + ".html";
			window.location = (nameofpagetobeopend);
		}
	});
	$('.parent').click(function(event){
	    
	    var isParent = $(event.target).is('.parent');
	    if(isParent){
	        $('.submenu', this).toggle();
	    }
	    
	});
});