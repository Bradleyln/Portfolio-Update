$(window).scroll(() => {
	
	let pixFromTop = $(this).scrollTop();	

	$('.logo').css({
		'transform': `translate(0px, ${pixFromTop/5}%)`
	});

});

// fill in projects
var projectListOne = [
	"<p>Mini Projects</p>",
	"<hr>",
	"<div><a href='' target='_blank'>Project1</a></div>",
	"<div><a href='' target='_blank'>Project2</a></div>",	
	"<div><a href='' target='_blank'>Project3</a></div>",
	"<div><a href='' target='_blank'>Project4</a></div>",
	];
		// fill in projects
var projectListTwo = [
	"<p>Mini Projects</p>",
 	"<hr>",
 	"<div><a href='gitlink' target='_blank'>Project5</a></div>",
 	"<div><a href='gitlink' target='_blank'>Project6</a></div>",
 	"<div><a href='gitlink' target='_blank'>Project7</a></div>",
	"<div><a href='gitlink' target='_blank'>Project8</a></div>"
	];
	 


projectListOne.forEach((element) => {
	$("#projectListOne").append(element);
})

projectListTwo.forEach((element) => {
	$("#projectListTwo").append(element);
})



$("#navWho").click(function() { 
	$('html,body').animate({
        scrollTop: $("#who").offset().top},800);           
});


$("#navPortfolio").click(function() { 
	$('html,body').animate({
        scrollTop: $("#portfolio").offset().top},1000);           
});


$("#navContact").click(function() { 
	$('html,body').animate({
        scrollTop: $("#footer").offset().top},1100);           
});


$('#navResume').click(() => {
	$('#resumeModal').modal('toggle');
});


