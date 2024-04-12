document.addEventListener('DOMContentLoaded', function () {
    let hour24;
    function updateDateTime() {
        const now = new Date();
        const hours24 = now.getHours();
        hour24 = hours24;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        let hours = hours24 % 12 || 12;
        let timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

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
    // setInterval(function () {
    //     if (hour24 >= 20 || hour24 < 7) {
    //         window.location.reload();
    //     }
    // }, 600000);

    updateDateTime();
});
