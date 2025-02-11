const febHolidays = [
    "Hey Nithya, Did I ever tell you this",
    "Don't think tell you what,",
    "Telling you that you are important ",
    "I don't care whatever people say about you",
    "Thank you for being there for me",
    "I'm sorry that I hurt you many times",
    "I'm sorry for all the things I did that hurt you Nithya",
    "Thank you for helping me out all the time",
    "Thank you for scolding me and correcting me all the time",
    "And of course... wait baby.....",
    "Thank you for not getting bored of me",
    "thank you for everything, everything you did and baring with me love",
    "I promise you I will always be there for you",
    "I promise I will always respect you",
    "I promise I will always cherish you and the friendship we have,",
    "You're the prettiest, cutest, funniest",
    "In one word, you're just perfect.😍",
    "What else should I say about you Pretty lady",
    "I'm so grateful I met you Nithya",
    "I'll always do my best to keep you happy",
    "you know all the idiotic things you do make me happy",
    "One more thing whenever you feel alone",
    "Just remember that this idiot would be there",
    "By your side never making you feel alone",
    "Okay and even you should bare with me whenever I make fun of you",
    "You shouldn't hit me whenever I call you",
    "Potti Pandi or anything else",
    "I would miss you quite a few times",
    "like whenever something good happens and you aren't there to share",
    "It feels good and makes me feel alive",
    "the time I spend with you",
    "There are quite a few quarrels between us",
    "but we overcame most of them",
    "and it made me realised how",
    "important you are ",
    "okay enough of all this now",
    "Now stop being anxious all the time",
    "You lose yourself at that time and we don't like it love",
    "whenever you cry even I would cry so don't feel anxious never again",
    "Thanks to God for giving a person like you in life",
    "You're everything",
    "I Love You So much❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  