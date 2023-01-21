const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondsHand = document.querySelector(".seconds-hand");
const audio = document.querySelector("#alarm");

const setTime = () => {
    const date = new Date;
    const hour = date.getHours() % 12;
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    let hourDegrees = 180 + (hour*30) + (((minute*60) + seconds) * (30/3600))
    let minuteDegrees = 180 + (minute*6) + ((seconds*6) / 60)
    let secondsDegrees = 180 + (seconds*6)
    
    // console.log(date)
    // console.log(hour)
    // console.log(minute)
    // console.log(seconds)
    // console.log(hourDegrees)

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

while (hour==4 && minute==22) {
    audio.play();
}

setTime();

setInterval(setTime, 1000)