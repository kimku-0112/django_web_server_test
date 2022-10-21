const StopWatch = document.getElementById('Timer'); //스코어 기록창-분

let addms = 50;
let time = 0.000;
StopWatch.value = 0;

function TIMER() {
	PlAYTIME = setInterval(function () {
		time += (addms*0.001);
		StopWatch.value = time.toFixed(3)
	}, addms); //1초마다
}

TIMER();

setTimeout(function () {
	location.reload();
}, 5000); // 3000밀리초 = 3초
