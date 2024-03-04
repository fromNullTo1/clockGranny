function updateDateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };


    document.getElementById('date').textContent = now.toLocaleDateString();
    document.getElementById('time').textContent = now.toLocaleTimeString([], options).replace(/ ?[AP]M$/, '');

    let daytime;
    if (hours < 6) {
        daytime = 'сейчас ночь';
        document.body.style.background = '#121212';
    } else if (hours < 12) {
        daytime = 'сейчас утро';
        document.body.style.background = 'url(img/1.webp) 0 0/cover no-repeat';
    } else if (hours < 18) {
        daytime = 'сейчас день';
        document.body.style.background = 'url(img/2.webp) 0 0/cover no-repeat';
    } else {
        daytime = 'сейчас вечер';
        document.body.style.background = 'url(img/3.webp) 0 0/cover no-repeat';
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