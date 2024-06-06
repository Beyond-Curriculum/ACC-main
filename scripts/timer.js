// НЕ ЛЕЗЬ, УБЬЕТ
function countdown(targetDate) {
    const endDate = new Date(targetDate).getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const difference = endDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

        if (difference < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = "00:00:00:00";
        }
    }, 1000);
}

// Когда будешь менять дату:
countdown("June 2, 2024 00:00:00");