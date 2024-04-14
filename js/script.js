var body = document.querySelector("body");

var MQL = 100;
if (document.getElementById("navbar") !== null) {
  if (window.innerWidth > MQL) {
    var headerElement = document.getElementById("navbar");
    var headerHeight = headerElement.clientHeight;

    var previousTop = 0;
    window.addEventListener("scroll", function () {
      var currentTop = window.scrollY;

      //check if user is scrolling up
      if (currentTop < previousTop) {
        //if scrolling up...
        if (currentTop > -1 && headerElement.classList.contains("is-fixed")) {
          headerElement.classList.add("is-visible");
        } else {
          headerElement.classList.remove("is-visible", "is-fixed");
        }
      } else if (currentTop > previousTop) {
        //if scrolling down...
        headerElement.classList.remove("is-visible");
        if (
          currentTop > headerHeight &&
          !headerElement.classList.contains("is-fixed")
        ) {
          headerElement.classList.add("is-fixed");
        }
      }
      previousTop = currentTop;
    });
  }
}

// Sidebar Menu
if (document.querySelector(".btn-show-mobile-menu") != null) {
  const sidebarMenu = document.getElementById("sidebar-menu");
  const btnMenu = document.querySelector(".btn-show-mobile-menu");
  const sidebarOverlay = document.querySelector(".sidebar-overlay");
  const btnCloseSidebar = document.querySelector(".btn-close-menu");

  btnMenu.onclick = () => {
    sidebarMenu.classList.add("active");
    sidebarOverlay.classList.add("active");
  };
  sidebarOverlay.onclick = () => {
    sidebarMenu.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  };
  btnCloseSidebar.onclick = () => {
    sidebarMenu.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  };
}

// Show Side Basket
if (document.querySelector(".btn-basket") !== null) {
  var btnsSideBasket = document.querySelectorAll(".btn-basket");
  var sideBasket = document.getElementById("side-basket");
  var dismissBasket = document.getElementById("dismiss-basket");
  var basketOverlay = document.querySelector(".basket-overlay");
  var body = document.querySelector("body");

  btnsSideBasket.forEach((btnBasket) => {
    btnBasket.addEventListener("click", function () {
      sideBasket.classList.add("active");
      basketOverlay.classList.add("active");
      body.classList.add("fixedposition");
    });
  });
  basketOverlay.addEventListener("click", function () {
    sideBasket.classList.remove("active");
    basketOverlay.classList.remove("active");
    body.classList.remove("fixedposition");
  });
  dismissBasket.addEventListener("click", function () {
    sideBasket.classList.remove("active");
    basketOverlay.classList.remove("active");
    body.classList.remove("fixedposition");
  });
}

if (document.querySelector(".progress-level") !== null) {
  const progressLevel = document.querySelector(".progress-level");
  let currentValue = parseInt(progressLevel.getAttribute("value"));
  let currentMax = parseInt(progressLevel.getAttribute("max"));
  let totalQuestions = document.querySelectorAll(".question-item");
  // let btnNextQuestion = document.getElementById("next-question");
  function showCurrentQuestion(n) {
    currentValue += n; // یا هر مقدار دلخواه دیگر
    if (currentValue > currentMax) {
      currentValue = currentMax; // حداکثر مقدار را تنظیم می‌کنیم
    } else if (currentValue < 1) {
      currentValue = 1; // حداقل مقدار را تنظیم می‌کنیم
    }
    progressLevel.setAttribute("value", currentValue.toString());
    updateActiveQuestion(); // برای به‌روزرسانی کلاس active
  }

  function updateActiveQuestion() {
    totalQuestions.forEach(function (question, index) {
      if (index === currentValue - 1) {
        question.classList.add("active");
      } else {
        question.classList.remove("active");
      }
      if (currentValue === currentMax) {
        document.querySelector(
          "#next-question"
        ).innerHTML = `<i class="mdi mdi-check"></i>پایان آزمون`;
      } else {
        document.querySelector(
          "#next-question"
        ).innerHTML = `<i class="mdi mdi-arrow-left"></i>سوال بعدی`;
      }
    });
  }
}

// Countdown Timer
var initialTimes = {}; // ذخیره زمان اولیه هر تایمر
var timerIntervals = {}; // ذخیره شناسه تایمر هر تایمر

function startTimer(timerId, countdownNumber) {
  var spanElement = document.getElementById(`timer_${timerId}`);
  var timerMsg = document.querySelector(".timer-msg");
  var clockTimer = document.querySelector(".clock-timer");

  var timerElementString = `timer_${timerId}`;
  var timeLeft = countdownNumber;

  timerMsg.style.display = "none";
  clockTimer.style.display = "block";

  if (initialTimes[timerElementString] === undefined) {
    initialTimes[timerElementString] = timeLeft; // ذخیره زمان اولیه
  }

  if (timerIntervals[timerId] !== undefined) {
    clearInterval(timerIntervals[timerId]); // از بین بردن تایمر قبلی
  }

  timerIntervals[timerId] = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timerIntervals[timerId]);
      timerMsg.style.display = "block";
      spanElement.innerHTML = "00:00";
      clockTimer.style.display = "none";
    } else {
      spanElement.textContent = formatTime(timeLeft);
      timeLeft--;
    }
  }, 1000);
}

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  return (
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0")
  );
}
if (document.querySelector(".questions-section") !== null) {
  startTimer(1, 15);
}

// برای اضافه کردن کلاس اکتیو به دکمه های سوالات
var groups = document.querySelectorAll(".btns-questions");
groups.forEach(function (group) {
  var buttons = group.querySelectorAll(".btn-answer");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var siblings = group.querySelectorAll(".btn-answer");
      siblings.forEach(function (sibling) {
        sibling.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
