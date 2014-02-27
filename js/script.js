var time;
var timeDown;
var timeUp;
var daysDown;
var hoursDown;
var minutesDown;
var secondsDown;
var daysUp;
var hoursUp;
var minutesUp;
var secondsUp;
var cDown;
var cUp;
var cont;

$(document).ready(function(){
	var startTime;


	$('#countTarget').on('input', function(){
		time = document.getElementById('countTarget').value;
		timeDown = time;
		updateTimeDown();
		clearInterval(cDown);
		timeUp = 0;
		updateTimeUp();
		clearInterval(cUp);
		console.log(document.getElementById('countTarget').value);
	});

	$('#startDown').click(function(){
		time = document.getElementById('countTarget').value;
		if(time != null && time > 0){
			timeDown = time-1;
			updateTimeDown();
			cDown = setInterval(function() {
				timeDown--;
				updateTimeDown();
				if(timeDown <= 0){
					clearInterval(cDown);
					$('#startDown').prop('disabled', true);
					$('#stopDown').prop('disabled', true);
				}}, 1000);
		}
	});
	$('#stopDown').click(function(){
		clearInterval(cDown);

	});

	$('#resetDown').click(function(){
		clearInterval(cDown);
		timeDown = 0;
		updateTimeDown();
		$('#startDown').prop('disabled', false);
		$('#stopDown').prop('disabled', false);
	});

	//up timer

	$('#startUp').click(function(){
		time = document.getElementById('countTarget').value;
		if(time != null && time > 0){
			timeUp = 1;
			updateTimeUp();
			cUp = setInterval(function() {
				timeUp++;
				updateTimeUp();
				if(timeUp >= time){
					clearInterval(cUp);
					$('#startUp').prop('disabled', true);
					$('#stopUp').prop('disabled', true);
				}}, 1000);
		}
	});
	$('#stopUp').click(function(){
		clearInterval(cUp);
	});

	$('#resetUp').click(function(){
		clearInterval(cUp);
		timeUp = 0;
		updateTimeUp();
		$('#startUp').prop('disabled', false);
		$('#stopUp').prop('disabled', false);
	});

	function updateTimeDown(){
		secondsDown = Math.floor(timeDown%60);
		minutesDown = Math.floor(timeDown/60);
		hoursDown = Math.floor(timeDown/3600);
		daysDown = Math.floor(timeDown/86400);
		$(document.getElementById('daysDown')).text(daysDown);
		$(document.getElementById('hoursDown')).text(hoursDown);
		$(document.getElementById('minutesDown')).text(minutesDown);
		$(document.getElementById('secondsDown')).text(secondsDown);
	}

	function updateTimeUp(){
		secondsUp = Math.floor(timeUp%60);
		minutesUp = Math.floor(timeUp/60);
		hoursUp = Math.floor(timeUp/3600);
		daysUp = Math.floor(timeUp/86400);
		$(document.getElementById('daysUp')).text(daysUp);
		$(document.getElementById('hoursUp')).text(hoursUp);
		$(document.getElementById('minutesUp')).text(minutesUp);
		$(document.getElementById('secondsUp')).text(secondsUp);
	}
});


