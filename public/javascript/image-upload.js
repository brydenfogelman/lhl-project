$(document).on('ready', function() {
	function uploadImage(input) {
	    if ( input.files && input.files[0] ) {
	        var FR = new FileReader();
	        console.log(FR);
	        FR.onload = function(e) {
	             // $('#img').attr( "src", e.target.result );
	             // $('#base').text( e.target.result );
	             console.log(e.target.result)
	             //$('#image-field').attr("value", e.target.result);
	             $.ajax({
	             	method: 'post',
	             	url: '/post/create',
	             	data: {
	             		title: $('#title-field').val(),
	             		category: $('#category-field').val(),
	             		content: $('#content-field').val(),
	             		image: e.target.result
	             	},
	             	success: function(data){
	             		console.log(data)
	             	},
	             	error: function(){
	             		console.log('error')
	             	}
	             });
	        };       
	        FR.readAsDataURL( input.files[0] );
	    }
	}

	function image_to_base64(input){
		var reader = new FileReader();
		var image_base64;
		reader.onload = function(e){
			image_base64 = e.target.result;
			console.log(image_base64)
			return e.target.result
		};
		reader.readAsDataURL( input.files[0] );

	};

	$("#file-field").change(function(){
		uploadImage(this);
	});

	$('#submit').click(function(){

	})

});

