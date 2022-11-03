$(function() {
	$(".head_inner nav ul li.swith a").on("click", function(){
		$("body").toggleClass("switchMode");
		e.preventDefault();
	});
});