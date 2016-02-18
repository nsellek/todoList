// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
function puts(arg){
	console.log(arg);
}


$(document).on("ready page:load", function(){
	puts('document done loading');

	$('.new_todo').on('ajax:success', newTodo);

	function newTodo() {
		$('#todo').append('<li>' + arguments[1].name + '</li>');
		$('#name').val('');
	}
});