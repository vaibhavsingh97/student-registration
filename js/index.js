// var options = ['@bml.edu.in','@gmail.com'];
// $("input#user_email").autocomplete({
//     source: options
// });
// $("input#user_email").keyup(function() {
//     var new_options = [];
//     for (var i = 0; i < options.length; i++)
//         new_options[i] = $(this).val() + options[i];
//     $(this).autocomplete( "option", "source", new_options);
// });

$(document).ready(function(){
  $('input.autocomplete').autocomplete({
    data: {
	  "Apple": null,
	  "Microsoft": null,
	  "Google": 'http://placehold.it/250x250'
	}
  });
});
