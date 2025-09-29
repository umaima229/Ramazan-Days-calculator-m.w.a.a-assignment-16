
function updateCountdown() {
  var  now = new Date();
  var ramadanStart = new Date("February 17, 2026 00:00:00"); // Ramadan 2026 start

 var totalSeconds = (ramadanStart - now) / 1000;

  if (totalSeconds <= 0) {
    document.querySelector(".countdown").innerHTML = "<h2>Ramadan Mubarak!</h2>";
    return;
  }

  var  months = Math.floor(totalSeconds / (3600 * 24 * 30));
  var days = Math.floor((totalSeconds % (3600 * 24 * 30)) / (3600 * 24));
  var hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  var minutes = Math.floor((totalSeconds % 3600) / 60);
  var  seconds = Math.floor(totalSeconds % 60);

  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

