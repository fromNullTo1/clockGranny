function updateDateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    const options2 = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };


    document.getElementById('date').textContent = now.toLocaleDateString([], options2).replace(/\sг\.$/, '');
    document.getElementById('time').textContent = now.toLocaleTimeString([], options).replace(/ ?[AP]M$/, '');

    let daytime;
    if (hours < 6) {
        daytime = 'сейчас ночь';
    } else if (hours < 12) {
        daytime = 'сейчас утро';
    } else if (hours < 18) {
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