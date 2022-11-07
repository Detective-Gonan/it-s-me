// 텍스트요소
const $iAm = document.querySelector(".iAm");
const $1 = document.querySelector(".text1");
const $2 = document.querySelector(".text2");
const $3 = document.querySelector(".text3");
const $4 = document.querySelector(".text4");
// 텍스트
const letters = ["Seok Ji hoon"];
const letters1 = ["숫자로된 컴퓨터 언어속에서 디자인을,"];
const letters2 = ["디자인속에 다양한 기능들을,"];
const letters3 = ["접목시키고 싶은 프론트엔드,"];
const letters4 = ["웹개발자 석지훈입니다."];

// 버튼 클릭 시 맨 위로 이동
const $upto = document.querySelector(".upto");
$upto.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 글자 입력 속도
const speed = 100;
// 현재 지정된 글자
let i = 0;

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 타이핑 기능   ( wait 기능을 위한 async, await )
const typing = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);
    $iAm.innerHTML += letter.shift();
  }
  await wait(800);
};
typing();

{
  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  const typing = async () => {
    const letter = letters1[i].split("");

    while (letter.length) {
      await wait(speed);
      $1.innerHTML += letter.shift();
    }
    await wait(800);
  };
  typing(i);
}

{
  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  const typing = async () => {
    await wait(2300);
    const letter = letters2[i].split("");

    while (letter.length) {
      await wait(speed);
      $2.innerHTML += letter.shift();
    }
  };
  typing(i);
}
{
  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  const typing = async () => {
    await wait(4200);
    const letter = letters3[i].split("");

    while (letter.length) {
      await wait(speed);
      $3.innerHTML += letter.shift();
    }
  };
  typing(i);
}
{
  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  const typing = async () => {
    await wait(5800);
    const letter = letters4[i].split("");

    while (letter.length) {
      await wait(speed);
      $4.innerHTML += letter.shift();
    }
  };
  typing(i);
}

// 넘기기
class CardFlipOnScroll {
  constructor(wrapper, sticky) {
    this.wrapper = wrapper;
    this.sticky = sticky;
    this.cards = sticky.querySelectorAll(".card");
    this.length = this.cards.length;

    this.start = 0;
    this.end = 0;
    this.step = 0;
  }

  init() {
    this.start = this.wrapper.offsetTop - 100;
    this.end =
      this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2;
    this.step = (this.end - this.start) / (this.length * 2);
  }

  animate() {
    this.cards.forEach((card, i) => {
      const s = this.start + this.step * i;
      const e = s + this.step * (this.length + 1);

      if (scrollY <= s) {
        card.style.transform = `
              perspective(100vw)
              translateX(100vw) 
              rotateY(180deg)
            `;
      } else if (scrollY > s && scrollY <= e - this.step) {
        card.style.transform = `
              perspective(100vw)
              translateX(${100 + ((scrollY - s) / (e - s)) * -100}vw)
              rotateY(180deg)
            `;
      } else if (scrollY > e - this.step && scrollY <= e) {
        card.style.transform = `
              perspective(100vw)
              translateX(${100 + ((scrollY - s) / (e - s)) * -100}vw)
              rotateY(${
                180 + (-(scrollY - (e - this.step)) / this.step) * 180
              }deg)
            `;
      } else if (scrollY > e) {
        card.style.transform = `
              perspective(100vw)
              translateX(0vw) 
              rotateY(0deg)
            `;
      }
    });
  }
}

const mainContent1 = document.querySelector(".main-content-1");
const sticky = document.querySelector(".sticky");
const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky);
cardFlipOnScroll.init();

window.addEventListener("scroll", () => {
  cardFlipOnScroll.animate();
});

window.addEventListener("resize", () => {
  cardFlipOnScroll.init();
});

const durationScrollTo = (y, duration = 500) => {
  const stepY = (y - window.scrollY) / duration;

  const currentY = window.scrollY;

  const startTime = new Date().getTime();

  const scrollInterval = setInterval(() => {
    const now = new Date().getTime() - startTime;

    window.scrollTo({ top: currentY + stepY * now });

    if (duration <= now) {
      clearInterval(scrollInterval);
    }
  }, 1);
};

// 버튼 클릭시 원하는 곳으로 스크롤 이동!
const $button = document.querySelector(".button");
$button.addEventListener("click", () => {
  durationScrollTo(1200, 500);
});
