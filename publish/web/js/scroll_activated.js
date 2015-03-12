/*  JavaScript Document                                                         */
/*  This file is intentionally blank - we'll build this file during the course  */

AdobeEdge.bootstrapCallback(function(compId){
	
	$('body').css('height','10000px').append('<p>debug</p>')

	$(window).on('scroll',function(){
		checkScroll();
	}).resize(function(){
		checkScroll();
	});
	
	function checkScroll(){

	var myComposition = AdobeEdge.getComposition('EDGE-9110113');
	var scrollPos = $(window).scrollTop();
	var docHeight = $(document).height();
	var winHeight = $(window).height();
	var duration = myComposition.getStage().getDuration();

	var scrollPercent = scrollPos / (winHeight - docHeight);
	var animPosition = Math.floor(duration * (scrollPercent * -1));

	myComposition.getStage().stop(animPosition);	

	$('p').html('scrollPos = '+scrollPos + '<br/> animation duration = ' + duration + '<br/>scrollPercent = '+scrollPercent+'<br/>animPosition = '+animPosition);
	
	}
});



