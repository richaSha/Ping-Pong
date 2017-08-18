$(document).ready(function() {
	var pingPongResultUI = function(pingPongNumber, resultList){
		if(!isNaN(pingPongNumber)){
			pinPongList = pingPongNumbersList(pingPongNumber);
			for(num in pinPongList){
				resultList.append(`<li> ${pinPongList[num]} </li>`)
			}
		}else {
			alert('warning');
		}
	}

	$('input.pingPong').click(function(event) {
		event.preventDefault();
		var pinPongList = [];
		var pingPongNumber = $('input:text').val();
		var resultList = $('.pingPongResult ul');
		pingPongResultUI(pingPongNumber, resultList);
		
	})

	/*$('input:submit .reversePingPong').click(function(event) {
		event.preventDefault();



	})*/
})
