// document.addEventListener('DOMContentLoaded', function () {
//     let hour24;
//     function updateDateTime() {
//         const now = new Date();
//         const hours24 = now.getHours();
//         hour24 = hours24;
//         const minutes = now.getMinutes();
//         const seconds = now.getSeconds();
//         let hours = hours24 % 12 || 12;
//         let nameHour;
//         let nameMinute;
        

//         if (hours == 1) {
//             nameHour = 'час';
//         } else if ( hours == 2 || hours == 3 || hours == 4) {
//             nameHour = 'часа';
//         } else {
//             nameHour = 'часов';
//         }

//         if (minutes % 10 == 1 && minutes != 11) {
//         nameMinute = 'минута';
//     } else if ((minutes % 10 >= 2 && minutes % 10 <= 4) && (minutes < 10 || minutes > 20)) {
//         nameMinute = 'минуты';
//     } else {
//         nameMinute = 'минут';
//     }

//         let timeString = `${hours < 10? '0' + hours : hours} <span class="fz-210">${nameHour}</span> <br> ${minutes < 10 ? '0' + minutes : minutes} <span class="fz-210">${nameMinute}</span>`;

//         document.getElementById('time').innerHTML = timeString;

//         let daytime;
//         if (hours24 < 7) {
//             daytime = 'СПАТЬ';
//         } else if (hours24 < 21) {
//             daytime = 'НЕ СПАТЬ';
//         } else {
//             daytime = 'СПАТЬ';
//         }

//         document.getElementById('daytime').textContent = daytime;

//         adjustColors(hours24);
//     }

//     function adjustColors(hours) {
//         if (hours >= 20 || hours < 7) {
//             if (!document.body.classList.contains("dark-mode")) {
//                 document.body.classList.add("dark-mode");
//             };
//         } else {
//             if (document.body.classList.contains("dark-mode")) {
//                 document.body.classList.remove("dark-mode");;
//             };
//         }
//     }

//     function toggleMode() {
//         document.body.classList.toggle("dark-mode");
//     }

//     document.body.addEventListener('click', () => {
//         toggleMode();
//     });

//     setInterval(updateDateTime, 1000);
//     // setInterval(function () {
//     //     if (hour24 >= 20 || hour24 < 7) {
//     //         window.location.reload();
//     //     }
//     // }, 600000);

//     updateDateTime();
// });






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
