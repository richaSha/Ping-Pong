$(document).ready(function() {
	/*
		pingPongResultUI will call 
		pingPongNumbersList, reversePingPongList
		as per resvese data and put each array data in 
		result list
	*/
	var pingPongResultUI = function(pingPongNumber, resultList, reverse){
		if(!isNaN(pingPongNumber)){
			if(!reverse){
				pinPongList = pingPongNumbersList(pingPongNumber);
			}else{
				pinPongList = reversePingPongList(pingPongNumber);
			}
			for(num in pinPongList){
				resultList.append(`<li> ${pinPongList[num]} </li>`)
			}
		}else {
			alert('warning');
		}
	}

	/*
		on click ping pong button calling 
		pingPongResultUI with 
		user input and reverse true 
	*/
	$('input.pingPong').click(function(event) {
		event.preventDefault();
		var pinPongList = [];
		var pingPongNumber = $('input:text').val();
		var resultList = $('.pingPongResult ul');
		$('.pingPongResult ul li').remove();
		pingPongResultUI(pingPongNumber, resultList,false);
	})

	/*
		on click ping pong reverse button calling 
		pingPongResultUI with 
		user input and reverse true 
	*/
	$('input.reversePingPong').click(function(event) {
		event.preventDefault();
		var pinPongList = [];
		var pingPongNumber = $('input:text').val();
		var resultList = $('.pingPongResult ul');
		$('.pingPongResult ul li').remove();
		pingPongResultUI(pingPongNumber, resultList,true);
	})

	/*
		On focus user input deleting
		old ping pong result
	*/
	$('input:text').focus(function() {
		$('.pingPongResult ul li').remove();
	})
})
