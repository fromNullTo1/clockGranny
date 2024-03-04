function updateDateTime() {
    const now = new Date();
    const hours24 = now.getHours();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    let timeString = now.toLocaleTimeString([], options);

    let hours = now.getHours() % 12 || 12;
    let minutes = now.getMinutes();
    timeString = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    document.getElementById('time').textContent = timeString;

    let daytime;
    if (hours24 < 6) {
        daytime = 'сейчас ночь';
    } else if (hours24 < 12) {
        daytime = 'сейчас утро';
    } else if (hours24 < 18) {
        daytime = 'сейчас день';
    } else {
        daytime = 'сейчас вечер';
    }

    document.getElementById('daytime').textContent = daytime;


    if (minutes == 59) {
        adjustColors(hours);
    }
}

function adjustColors(hours) {
    if (hours >= 22 || hours < 6) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

setInterval(updateDateTime, 1000);

updateDateTime();