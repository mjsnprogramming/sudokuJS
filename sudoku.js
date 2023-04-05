function startTimer(duration, display) {
    var timer = 0, minutes, seconds;
    setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (++timer > duration) {
       clearInterval();
      }
    }, 1000);
  }
  

  var duration = 60 * 60, 
      display = document.querySelector('#timer');
  startTimer(duration, display);
