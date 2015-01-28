// Shorthand for $( document ).ready()
$(function() {
    // console.log( "ready!" );
	$('#clickMe').on('click', function() {
		$(this).css('color', '#444');
	})
});
