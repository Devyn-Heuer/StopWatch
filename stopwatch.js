window.onload = function () {
  var milli = 00;
  var secs = 00;
  var min = 00;
  var appendMilli = document.getElementById("milli");
  var appendSecs = document.getElementById("seconds");
  var appendMin = document.getElementById("minutes");

  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");

  var interval;

  var startBut = false;

  function startFunction() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);

    if (startBut) {
      resetFunction();
      console.log("active");
      startBut = false;
      startFunction();
      startBut = true;
    }
  }

  buttonStart.onclick = function () {
    startFunction();
    startBut = true;
  };

  buttonStop.onclick = function () {
    startBut = false;
    clearInterval(interval);
  };

  buttonReset.onclick = function () {
    resetFunction();
  };

  function resetFunction() {
    clearInterval(interval);
    milli = 00;
    secs = 00;
    min = 00;
    appendMilli.innerHTML = "0" + milli;
    appendSecs.innerHTML = "0" + secs;
    appendMin.innerHTML = "0" + min;
    startBut = false;

  }

  function startTimer() {
    if (milli <= 9) {
      appendMilli.innerHTML = "0" + milli;
    }
    if (milli > 9) {
      appendMilli.innerHTML = milli;
    }

    if (milli > 99) {
      console.log("seconds");
      secs++;
      appendSecs.innerHTML = "0" + secs;
      milli = 0;
      appendMilli.innerHTML = "0" + 0;
    }

    if (secs > 9) {
      appendSecs.innerHTML = secs;
    }

    if (secs > 59) {
      console.log("minutes");
      min++;
      appendMin.innerHTML = "0" + min;
      secs = 0;
      appendSecs.innerHTML = "0" + 0;
    }

    if (min > 59) {
      console.log("hours");
      min = "0" + 0;
      appendMin.innerHTML = "00";
      milli = 0;
      milli++;
      appendMilli.innerHTML = "0" + milli;
    }

    milli++;
  }
};
