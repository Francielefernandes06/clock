const clock = document.querySelector('.clock');

const currentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    var session = "AM";

    if (hours >= 12) {
        session = "PM";
    }
    else{
        session = "AM";
    }
    
    hour = hours < 10 ? `0${hours}` : hours;
    minute = minutes < 10 ? `0${minutes}` : minutes;
    second = seconds < 10 ? `0${seconds}` : seconds;

    clock.innerHTML = `${hour}:${minute}:${second} ${session}`;
    
}
setInterval(currentTime, 1000);



