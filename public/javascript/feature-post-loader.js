$(document).on('ready', function(){
	$.ajax({
		url: '/post/all.json',
		type: 'get',
		dataType: 'json',
		success: function(data){
			console.log(data)
			if (data[0]) {
				$('#post-title').append(data[0].title)
			}
			
		},
		error: function(){
			console.log('error')
		}
	})
});