$(document).on('ready', function(){
	$.ajax({
		url: '/post/all.json',
		type: 'get',
		dataType: 'json',
		success: function(data){
			console.log(data)
			$('#post-title').append(data[0].title)
		}

	})
});