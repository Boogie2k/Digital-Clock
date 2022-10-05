function ref() {
  let x = document.getElementById("time-seconds");
  let y = document.getElementById("time-minute");
  let z = document.getElementById("time-hour");
  let meri = "PM";

  x = x.valueAsNumber;
  y = y.valueAsNumber;
  z = z.valueAsNumber;

  /*  function resetTime() {
    xx = "";
    yy = "";
    zz = "";
    meri = "";

    let secondss = document.getElementById("ss");
    let minutee = document.getElementById("mm");
    let hourss = document.getElementById("hh");
    let sesss = document.getElementById("session");

    secondss.innerText = xx;
    minutee.innerText = yy;
    hourss.innerText = zz;
    sesss.innerText = meri;
  }

  document.getElementById("sett").addEventListener("click", resetTime); */

  function swap() {
    let seconds = document.getElementById("ss");
    let minute = document.getElementById("mm");
    let hours = document.getElementById("hh");
    let sess = document.getElementById("session");
    x = x + 1;
    if (x > 59) {
      x = 0;
      y = y + 1;
    }

    if (y > 59) {
      z = z + 1;
      y = 0;
    }

    if (z > 23) {
      z = 0;
    }

    if (x < 10) {
      seconds.innerText = ": " + "0" + x;
    } else {
      seconds.innerText = " :" + x;
    }

    if (y < 10) {
      minute.innerText = ": " + "0" + y;
    } else {
      minute.innerText = " : " + y;
    }

    if (z < 10) {
      hours.innerText = "0" + z;
    } else {
      hours.innerText = z;
    }

    if (z < 12) {
      meri = "AM";
    }

    sess.innerText = meri;

    setTimeout(function () {
      swap();
    }, 1000);
  }

  swap();
}
document.getElementById("bton").addEventListener("click", ref);
