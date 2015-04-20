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
	             	data: {image_base64: e.target.result},
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

	$("#image-field").change(function(){
	    console.log('test');
	    console.log(this);
	    //console.log($("#image-field").change())
		uploadImage(this);
	});
	$('$submit').click(function(){

	})

});

