document.addEventListener('DOMContentLoaded', () => {

let date = new Date("Dec 18, 2024 00:00:00").getTime()

let x = setInterval(function() {
    let now = new Date().getTime()
    let distance = date - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + 'd:' + hours + 'h:' + minutes + 'm:' + seconds + 's'

    if (distance < 0) {
        clearInterval(x)
        document.getElementById("countdown").innerHTML = "EXPIRED"
    }
}, 1000)


























})