function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = 'Дата и время для Русской локали: ' + today.toLocaleString('ru-RU');

    let out2 = document.getElementById('current-date2');
    let today2 = new Date();
    out2.innerHTML = 'Дата и время для Арабской локали: ' + today2.toLocaleString('ar-LB');
    
    let out3 = document.getElementById('current-date3');
    let today3 = new Date();
    out3.innerHTML = 'Дата и время для Белорусской локали: ' + today3.toLocaleString('be-BY');

    let out4 = document.getElementById('current-date4');
    let today4 = new Date();
    out4.innerHTML = 'Дата и время для Испанской локали: ' + today4.toLocaleString('ca-ES');

    let out5 = document.getElementById('current-date5');
    let today5 = new Date();
    out5.innerHTML = 'Дата и время для Германской локали: ' + today5.toLocaleString('de-DE');
}

function showDaysCount() {
    let date = document.getElementById('date');

    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);

    date = 'Количество дней с даты рождения: ' + daysCount;

    document.getElementById('date').append(date);
}

function clearThis() {
    let date = document.getElementById("date");
    let inputDate = document.querySelector("input[type=date]");
    date.innerHTML = `<button onclick="showDaysCount()">Показать число дней</button>`;
    inputDate.value = "";
}

function showTIme() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTIme, 1000);