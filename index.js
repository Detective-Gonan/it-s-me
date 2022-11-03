// 텍스트요소
const $iAm = document.querySelector(".iAm");
const $me = document.querySelector(".me");
// 텍스트
const letters = ["Seok Ji hoon"];
const letters2 = ["FRONTEND"];
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
    const letter = letters2[i].split("");

    while (letter.length) {
      await wait(speed);
      $me.innerHTML += letter.shift();
    }
    await wait(800);
  };
  typing();
}
