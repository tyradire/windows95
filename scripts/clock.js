function clock() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  hour = updateClock(hour);
  min = updateClock(min);
  document.getElementById("clock").innerText = hour + " : " + min;
  let t = setTimeout(function(){ clock() }, 1000);
}

function updateClock(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

clock();