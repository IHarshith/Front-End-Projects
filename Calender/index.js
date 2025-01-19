const calMonthEl = document.getElementById('cal-month');
const calDayEl = document.getElementById('cal-day');
const calDateEl = document.getElementById('cal-date');
const calYearEl = document.getElementById('cal-year');

const date = new Date();
const month = date.getMonth();
calMonthEl.innerText = date.toLocaleString("en",{
    month:"long"
})

calDayEl.innerText = date.toLocaleString("en",{
    weekday:"long"
})

calDateEl.innerText = date.getDate();

calYearEl.innerText = date.getFullYear();