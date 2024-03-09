document.addEventListener('DOMContentLoaded', function () {
    function updateDateTime() {
        const now = new Date();
        const hours24 = now.getHours();
        const minutes = now.getMinutes();
        let hours = hours24 % 12 || 12;
        let timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

        document.getElementById('time').textContent = timeString;

        let daytime;
        if (hours24 < 6) {
            daytime = 'ночь';
        } else if (hours24 < 12) {
            daytime = 'утро';
        } else if (hours24 < 18) {
            daytime = 'день';
        } else {
            daytime = 'вечер';
        }

        document.getElementById('daytime').textContent = daytime;

        const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
        const dayOfWeek = daysOfWeek[now.getDay()];

        document.getElementById('dayOfWeek').textContent = `${dayOfWeek}`;

        adjustColors(hours24);
    }

    function adjustColors(hours) {
        if (hours >= 21 || hours < 5) {
            document.body.classList.add("dark-mode");
            console.log(hours, 'add dark');
        } else {
            document.body.classList.remove("dark-mode");
            console.log(hours, 'remove dark');
        }
        
    }

    function toggleMode() {
        document.body.classList.toggle("dark-mode");
    }

    document.body.addEventListener('click', () => {
        toggleMode();
    });

    setInterval(updateDateTime, 5000);
    setInterval(function () {
        window.location.reload();
    }, 600000);
});
