$(function() {

	const socket = io();

	//obtaining DOM elements from the interface
	const $messageForm = $('#message-form');
	const $messageBox = $('#message');
	const $chat = $('#chat');

	//obtaining DOM elmeents from nicknameForm
	const $nickForm = $('#nickForm');
	const $nickError = $('#nickError');
	const $nickname = $('#nickname');

	const $users = $('#usernames');

	$nickForm.submit(e=>{
		e.preventDefault();
		socket.emit('new user', $nickname.val(), function(data){
			if(data){
				$('#nickWrap').hide();
				$('#contentWrap').show();
			}else{
				$nickError.html('<div class="alert alert-danger">That username already exists.</div>');
			}
			$nickname.val('');
		});
	});

	//events
	$messageForm.submit(e => {
		e.preventDefault();
		socket.emit('send message', $messageBox.val(), data =>{
			$chat.appent(`<p class="error">${data}</p>`)
		});
		$messageBox.val('');
	});


	socket.on('new message', data=>{
		$chat.append('<b>'+data.nick+'</b>: '+ data.msg + '<br/>');
	});

	socket.on('usernames', data =>{
		let html = '';
	    for(i = 0; i < data.length; i++) {
	    	html += `<p><i class="fas fa-user"></i> ${data[i]}</p>`; 
	    }
	    $users.html(html);
	});

	socket.on('whisper', data => {
		$chat.append(`<p class="whisper"><b>${data.nick}:</b> ${data.msg}</p>`)
	});

})