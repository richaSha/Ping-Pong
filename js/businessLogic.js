// pingPongNumbersList will push ping-pong numbers list into array
var pingPongNumbersList = function(number) {
	var pingpongArray = [];
	for(var num=1; num <= number; num++){
		if(num % 3 == 0 && num % 5 == 0){
			pingpongArray.push('pingpong')
		}else if(num % 3 == 0){
			pingpongArray.push('ping')
		}else if(num % 5 == 0){
			pingpongArray.push('pong');
		}else{
			pingpongArray.push(num);
		}
	}
	return pingpongArray;
}

//reversePingPongList will call pingPongNumbersList and reverse it
/*var reversePingPongList = function(pingpongArray) {
	pingpongArray = pingpongArray.reverse();
}*/