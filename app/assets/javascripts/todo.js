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
		var todo = arguments[1];
		$('#todo').append('<li id='+todo.id+'>'+todo.name+'</li>');
		$('#name').val('');
	}

	$('li').hover(function(event) {
		var target = $(event.target);
		if (target.is('li')){
			$(target).css('cursor','pointer');
		}
	});

	$('li').click(function(event){
		var target = $(event.target);
		if (target.is('li')){
			$(target).wrap('<strike>');
			puts(this.id);
			$.ajax({
				URL: "/todo/:id",
				data: {
					id: this.id
				},
				type: 'DELETE'
			});
		}
	});

	// function handler(event){
	// 	var target = $(event.target);

	// 	if (event.type === "click"){
	// 		if (target.is('li')){
	// 			$(target).wrap('<strike>');
	// 		}
	// 	} else if (event.type === "hover") {
	// 		if (target.is('li')){
	// 			$(target).css('cursor','pointer');
	// 		}
	// 	}
	// }

});