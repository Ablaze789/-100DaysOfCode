const timerButton = document.querySelectorAll(".timer-button")
const countDownTimer = document.querySelector(".countdown-timer")
const countDownEnd = document.querySelector(".countdown-end")
const alarm = new Audio('../audio/Stomp music intro.mp3')
const inputMinutes = document.getElementById("minute")

let stopTime
let milliSeconds
let setTimer = null
let duration
let hour
let input
let minute
let seconds

window.onkeyup = function (e) {
    e.preventDefault()
    if (e.keyCode == 13) {
        console.log(e)
    }
}

// const hour = date.getHours();
// const minute = date.getMinutes();
// timerButton.addEventListener("click", function(e) {
//     console.log(e.target.dataset)
// })

timerButton.forEach(buttonSeconds => {
    // time = buttonSeconds.getAttribute('data-time')
    buttonSeconds.addEventListener("click", function(e) {
        const date = new Date()
        duration = e.target.dataset.time
        currentTime = new Date (date.setTime(date.getTime()))
        milliSeconds = date.setTime(date.getTime() + duration*1000)
        stopTime = new Date(milliSeconds)
        stopHour = String(stopTime.getHours()).padStart(2, '0')
        stopMinute = String(stopTime.getMinutes()).padStart(2, '0')
        stop12Hour = stopHour
        dayTime = (stopHour / 12) < 1 ? "AM" : "PM"
        hour = String(Math.floor(duration / 3600)).padStart(2, '0')
        minute = String(Math.floor(duration / 60)).padStart(2, '0')
        seconds = String(Math.round(duration % 60)).padStart(2, '0')

        if (minute == 60) {
            minute = String(0).padStart(2, '0')
        }

        // console.log(currentTime)
        // console.log(stopTime)
        // console.log(seconds)

    })

    function display() {

        if (duration > 0) {
            countDownTimer.innerHTML = hour + ":" + minute + ":" + seconds
            countDownEnd.innerHTML = "I will be back by " + stopHour + ":" + stopMinute + " " + dayTime
        } else {
            countDownTimer.innerHTML = "00:00:00"
            countDownEnd.innerHTML = "Welcome Back"

            alarm.play()
            clearInterval(setTimer)
        }
        
        duration -= 1
        hour = String(Math.floor(duration / 3600)).padStart(2, '0')
        minute = String(Math.floor(duration / 60)).padStart(2, '0')
        seconds = String(Math.round(duration % 60)).padStart(2, '0')
        // stopHour = String(parseInt(stopHour) + 1).padStart(2, '0')
        // stopMinute = String(parseInt(stopMinute) + 1).padStart(2, '0')
        // console.log(stopMinute)
    }

    function start() {
        clearInterval(setTimer)
        setTimer = setInterval(display, 1000)
    }

    buttonSeconds.addEventListener("click", start)


});



