function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function play() {
    var minutos = document.getElementById("minutos").value;
    var segundos = document.getElementById("segundos").value;
    document.getElementById("minutos").value='';
    document.getElementById("segundos").value='';
    var duration = (60 * minutos) + (1 * segundos);
    display = document.querySelector('#timer');

    startTimer(duration, display);
}
 