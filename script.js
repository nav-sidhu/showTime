const $showTime = document.getElementById('time'), // DOM VARIABLES..
  $dayDate = document.getElementById('date');

function dayDate() {
  const $today = new Date(),
    $days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    $months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    day = $days[$today.getDay()],
    month = $months[$today.getMonth()],
    date = $today.getDate(),
    //year = $today.getFullYear(),
    sub = date % 10;
  return `${day}, ${month} ${date}${th(sub, date)}`; //  OUTPUT
}
function showTime() {
  const $today = new Date(),
    hour = $today.getHours() % 12 || 12, //  12 HOUR FORMAT
    min = $today.getMinutes(),
    sec = $today.getSeconds(),
    amPm = $today.getHours() < 12 ? 'AM' : 'PM';

  return `${hour}:${addZero(min)}:${addZero(sec)} ${amPm}`; //  OUTPUT
}
function addZero(n) {
  return (n < 10 ? '0' : '') + n;
}
function th(n, x) {
  if (n == 1 && x != 11) {
    return '<sup>st</sup>';
  } else if (n == 2 && x != 12) {
    return '<sup>nd</sup>';
  } else if (n == 3 && x != 13) {
    return '<sup>rd</sup>';
  } else {
    return '<sup>th</sup>';
  }
}
function time() {
  $showTime.innerHTML = showTime();
  $dayDate.innerHTML = dayDate();
  setTimeout(time, 1000);
}

time(); //  EXECUTING THE FUNCTION
