
document.addEventListener('DOMContentLoaded', function () {
    let hour24;

    function updateDateTime() {
        const now = new Date();
        const hours24 = now.getHours();
        hour24 = hours24;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        let hours = hours24 % 12 || 12;

        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;


        const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
        const dayOfWeek = daysOfWeek[now.getDay()];

        document.getElementById('dayOfWeek').textContent = `${dayOfWeek}`;

        if (now.getDay() === 3) {
            document.getElementById('dayOfWeek').style.fontSize = '280px';
        } else if (now.getDay() === 0 || now.getDay() === 1) {
            document.getElementById('dayOfWeek').style.fontSize = '155px';
        } else {
            document.getElementById('dayOfWeek').style.fontSize = '240px';
        }

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

        adjustColors(hours24);
    }

    function adjustColors(hours) {
        if (hours >= 20 || hours < 7) {
            if (!document.body.classList.contains("dark-mode")) {
                document.body.classList.add("dark-mode");
            };
        } else {
            if (document.body.classList.contains("dark-mode")) {
                document.body.classList.remove("dark-mode");;
            };
        }
    }

    function toggleMode() {
        document.body.classList.toggle("dark-mode");
    }

    document.body.addEventListener('click', () => {
        toggleMode();
    });

    setInterval(updateDateTime, 1000);

    updateDateTime();
});
