let timerDisplay=document.getElementById("timer");
let currentDate=new Date();
//update the time in every second
//your JS code here. If required.
setInterval(
	function () {
		//get the current date and time
		currentDate=new Date();
        //update the timer display
		timerDisplay.innerHTML=currentDate.toLocaleString();
	},1000
	)
