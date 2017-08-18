$(document).ready(function() {
	 $(".content").css("height", ($(".container").height()-$(".banner").outerHeight(true)));
	/*
		pingPongResultUI will call 
		pingPongNumbersList, reversePingPongList
		as per resvese data and put each array data in 
		result list
	*/
	var pingPongResultUI = function(pingPongNumber, resultList, reverse){
		var pingPongList = [];
		if(!isNaN(pingPongNumber)){
			if(!reverse){
				pingPongList = pingPongNumbersList(pingPongNumber);
			}else{
				pingPongList = reversePingPongList(pingPongNumber);
			}
			for(num in pingPongList){
				resultList.append(`<li> ${pingPongList[num]} </li>`)
			}
			$(".info").css("height", ($(".mainConent").height()));
		}else {
			alert('Please enter only numbers');
			$('input:text').val("");
		}
	}

	/*
		Its taking data from user input and calling 
		pingPongResultUI with 
		user input and reverse value
	*/
	var getAndSetPingPongList = function(reverse){
		var pingPongNumber = $('input:text').val();
		var resultList = $('.pingPongResult ul');
		$('.pingPongResult ul li').remove();
		if(reverse){
			pingPongResultUI(pingPongNumber, resultList,true);
		}else {
			pingPongResultUI(pingPongNumber, resultList,false);
		}
	}

	/*
		on click ping pong button calling 
		getAndSetPingPongList with 
		reverse false 
	*/
	$('input.pingPong').click(function(event) {
		event.preventDefault();
		getAndSetPingPongList(false);
	})

	/*
		on click ping pong button calling 
		getAndSetPingPongList with 
		reverse true 
	*/
	$('input.reversePingPong').click(function(event) {
		event.preventDefault();
		getAndSetPingPongList(true);
	})

	/*
		On focus user input deleting
		old ping pong result
	*/
	$('input:text').focus(function() {
		$('.pingPongResult ul li').remove();
	})
})
