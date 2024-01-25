// const lenis = new Lenis();

// lenis.on('scroll', (e) => {
//   console.log(e);
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
// -------------------------------

// 메뉴를 사라지게 하는 함수
function menuItemClick() {
  document.querySelector('.menu').style = 'display: none;';
}
// 메뉴를 보여주는 함수
function menuOpen() {
  document.querySelector('.menu').style = 'display: block;';
}

// 메뉴 인트로 호버
function hoverIntro() {
  document.querySelector('.menu_img1').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_ball').style =
    'opacity: 0.2; transition: all 0.5s;';
  document.querySelector('.menu_putter').style =
    'opacity: 0.2; transition: all 0.5s;';
  document.querySelector('.menu_wedge').style =
    'opacity: 0.2; transition: all 0.5s;';
  document.querySelector('.menu_01').style =
    'opacity: 1; transition: all 0.5s;';
}

function outIntro() {
  document.querySelector('.menu_img1').style =
    'opacity: 0; transition: all 0.5s;';
  document.querySelector('.menu_ball').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_putter').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_wedge').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_01').style =
    'opacity: 0; transition: all 0.5s;';
}

// 메뉴 볼 호버
function hoverBall() {
  document.querySelector('.menu_img2').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_intro').style =
    'opacity: 0.2; transition: all 0.5s;';
  document.querySelector('.menu_putter').style =
    'opacity: 0.2; transition: all 0.5s;';
  document.querySelector('.menu_wedge').style =
    'opacity: 0.2; transition: all 0.5s;';
  document.querySelector('.menu_02').style =
    'opacity: 1; transition: all 0.5s;';
}

function outBall() {
  document.querySelector('.menu_img2').style =
    'opacity: 0; transition: all 0.5s;';
  document.querySelector('.menu_intro').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_putter').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_wedge').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_02').style =
    'opacity: 0; transition: all 0.5s;';
}

// 메뉴 퍼터 호버
function hoverPutter() {
  document.querySelector('.menu_img3').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_intro').style =
    'opacity: 0.2; transition: all 0.5s;';
  document.querySelector('.menu_ball').style =
    'opacity: 0.2; transition: all 0.5s;';
  document.querySelector('.menu_wedge').style =
    'opacity: 0.2; transition: all 0.5s;';
  document.querySelector('.menu_03').style =
    'opacity: 1; transition: all 0.5s;';
}

function outPutter() {
  document.querySelector('.menu_img3').style =
    'opacity: 0; transition: all 0.5s;';
  document.querySelector('.menu_intro').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_ball').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_wedge').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_03').style =
    'opacity: 0; transition: all 0.5s;';
}

// 메뉴 퍼터 웨지
function hoverWedge() {
  document.querySelector('.menu_img4').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_intro').style =
    'opacity: 0.2; transition: all 0.5s;';
  document.querySelector('.menu_ball').style =
    'opacity: 0.2; transition: all 0.5s;';
  document.querySelector('.menu_putter').style =
    'opacity: 0.2; transition: all 0.5s;';
  document.querySelector('.menu_04').style =
    'opacity: 1; transition: all 0.5s;';
}

function outWedge() {
  document.querySelector('.menu_img4').style =
    'opacity: 0; transition: all 0.5s;';
  document.querySelector('.menu_intro').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_ball').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_putter').style =
    'opacity: 1; transition: all 0.5s;';
  document.querySelector('.menu_04').style =
    'opacity: 0; transition: all 0.5s;';
}

window.scrollTo(0, 0);

//기준 설정

ScrollTrigger.saveStyles('.mobile, .desktop');

// 인트로 ------------

var ani00 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro',
    start: 'top top',
    end: '+=2000',
    // scrub: 1,
    pin: true,
    // markers: true,
  },
});

ani00.fromTo(
  '.shape',
  { x: 0, opacity: 1, duration: 1 },
  { x: 0, opacity: 0, duration: 1 },
  0
);

ani00.fromTo(
  '.intro_logo',
  { x: 0, opacity: 1, duration: 1 },
  { x: 0, opacity: 0, duration: 1 },
  0
);

// function playVideo() {
//   const video = document.getElementById('fullscreen-video');
//   video.play();
// }

// 색션 1,2 골프 공 애니메이션---------------------------

let golfBall = document.querySelector('.golf_ball'); // 골프 공 요소 선택

// 섹션 2 애니메이션 ----------------
var ani02 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section02',
    start: 'top center',
    end: 'bottom top',
    scrub: 1,
    // markers: true,
    onEnter: () => {
      gsap.to(golfBall, {
        x: 100, // 섹션 02로 이동할 때
        y: 1100,
        duration: 1,
        rotate: 360,
      });
    },
    onLeaveBack: () => {
      gsap.to(golfBall, {
        x: 0,
        y: 0, // 섹션 01로 이동할 때
        duration: 1,
        rotate: 0,
      });
    },
  },
});

ani02.fromTo(
  '.section02_the_greatest',
  { x: 0, y: -50, duration: 1, opacity: 0 },
  { x: 0, y: 0, duration: 1, opacity: 1 },
  0
);

ani02.fromTo(
  '.section02_text',
  { x: 0, y: -50, duration: 3, opacity: 0 },
  { x: 0, y: 0, duration: 3, opacity: 1 },
  1
);

// -------------------------------------------------
const section03GolfBall = document.querySelector('.section03_golf_ball'); // 골프 공 요소 선택

var ani03 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section03',
    pin: true,
    start: 'top top',
    end: '+=2000',
    scrub: 2,
    onEnter: () => {
      gsap.to(golfBall, {
        duration: 1,
        x: 420,
        y: 2350,
        scale: 0.8,
        rotate: 720,
        scrollTrigger: {
          trigger: '.section03',
          end: '+=2000',
          // markers: true,
          pin: golfBall,
        },
      });
    },
    onEnterBack: () => {
      golfBall.style.opacity = 1;
      section03GolfBall.style.opacity = 0;
      gsap.to(golfBall, {
        duration: 0,
        x: 420,
        y: 2350,
        scale: 0.8,
        rotate: 720,
        scrollTrigger: {
          trigger: '.section03',
          // markers: true,
          pin: golfBall,
          end: '+=2000',
        },
      });
    },
    onLeave: () => {
      golfBall.style.opacity = 0;
      section03GolfBall.style.opacity = 1;
    },
    onLeaveBack: () => {
      gsap.fromTo(
        golfBall,
        {
          x: 420,
          y: 2350,
          scale: 0.8,
          duration: 1,
        },
        {
          duration: 1,
          x: 100,
          y: 1100,
          scale: 1,
          rotate: 360,
        }
      );
    },
  },
});

ani03.fromTo(
  '.section03_titlelist',
  { x: 0, scale: 1, duration: 3 },
  { x: 0, y: -135, duration: 1.5, scale: 0.8 },
  0
);

ani03.fromTo(
  '.title',
  { x: 0, duration: 3 },
  { x: 0, y: 108, duration: 1.5 },
  0
);

ani03.fromTo(
  '.section03_o',
  { y: 0, opacity: 1 },
  { y: 50, opacity: 0, duration: 0.6 },
  0
);

ani03.fromTo(
  '.section03_text',
  { x: 0, duration: 2, opacity: 0 },
  { x: 0, duration: 2, opacity: 1 },
  0
);

ani03.fromTo(
  '.shadow',
  { x: 0, duration: 2, opacity: 0 },
  { x: 0, duration: 2, opacity: 1 },
  1
);

// //섹션 4-----------------------------

var ani04 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section04',
    start: 'top top',
    end: '+=1000',
    scrub: 2,
    pin: true,
    // markers: true,
  },
});

// ani04.fromTo(
//   '.section04_v1',
//   { x: 50, opacity: 0, duration: 0.1 },
//   { x: 0, opacity: 1, duration: 0.1 },
//   0
// );

ani04.fromTo(
  '.section04_pro',
  { x: -50, opacity: 0, duration: 0.2 },
  { x: 0, opacity: 1, duration: 0.2 },
  0
);
ani04.fromTo(
  '.section04_new',
  { x: 50, opacity: 0, duration: 0.2 },
  { x: 0, opacity: 1, duration: 0.2 },
  0
);
ani04.fromTo(
  '.section04_engine',
  { x: -50, opacity: 0, duration: 0.2 },
  { x: 0, opacity: 1, duration: 0.2 },
  0
);

// //섹션 5 가로 스크롤------------------------------

const offsetLeft = $('.section04').offset().left;

$('.scroll_container01').css('left', offsetLeft);

gsap.registerPlugin(ScrollTrigger); //scroll trigger 플러그인 등록

let sections = gsap.utils.toArray('.panel01'); //패널 클래스를 가진 모든 요소를 배열로 반환

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  // 내가 보는 방향에서 왼쪽으로 이동해야하니까 -으로 씀
  ease: 'none', // https://gsap.com/docs/v3/Eases/
  scrollTrigger: {
    trigger: '.scroll_container01',
    start: 'top top', //첫번쨰 옵션은 요소의 위치, 두번쨰 옵션은 뷰포트 위치
    end: () => '+=' + document.querySelector('.scroll_container01').offsetWidth,
    // markers: true,
    pin: true, // trigger에 지정된 요소의 시작점과 끝점 사이에 브라우저 고정
    scrub: true, // 스크롤 속도에 따라 애니메이션 속도가 변경됨
  },
});

// 섹션 가로 1---------------------------
let panel1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.section05', // 여기에 해당 요소의 클래스나 ID를 넣어주세요.
    start: 'top top', // 시작 시점
    end: '+=500', // 끝 시점
    scrub: 1, // 스크롤 속도에 따른 애니메이션의 부드러움 정도
    // markers: true,
  },
});

panel1Timeline.fromTo(
  '.section05_text1', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, x: 200 }, // 시작 스타일
  { opacity: 1, x: 0, duration: 1 },
  0 // 끝 스타일 및 애니메이션 지속 시간
);
panel1Timeline.fromTo(
  '.section05_text2', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, x: -200 }, // 시작 스타일
  { opacity: 1, x: 0, duration: 1 },
  0 // 끝 스타일 및 애니메이션 지속 시간
);

// --------섹션 가로 2---------------
let panel2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.section06', // 여기에 해당 요소의 클래스나 ID를 넣어주세요.
    start: 'top top', // 시작 시점
    end: '+=3000', // 끝 시점
    scrub: 1, // 스크롤 속도에 따른 애니메이션의 부드러움 정도
    // markers: true,
  },
});

panel2Timeline.fromTo(
  '.section06_text1', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, x: -200 }, // 시작 스타일
  { opacity: 1, x: 0, duration: 3 },
  16 // 끝 스타일 및 애니메이션 지속 시간
);
panel2Timeline.fromTo(
  '.section06_text2', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, x: -200 }, // 시작 스타일
  { opacity: 1, x: 0, duration: 3 },
  16 // 끝 스타일 및 애니메이션 지속 시간
);

// --------섹션 가로 3---------------
let panel3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.section07', // 여기에 해당 요소의 클래스나 ID를 넣어주세요.
    start: 'top top', // 시작 시점
    end: '+=6000', // 끝 시점
    scrub: 1, // 스크롤 속도에 따른 애니메이션의 부드러움 정도
    // markers: true,
  },
});

panel3Timeline.fromTo(
  '.section07_text1', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, x: 200 }, // 시작 스타일
  { opacity: 1, x: 0, duration: 3 },
  30 // 끝 스타일 및 애니메이션 지속 시간
);
panel3Timeline.fromTo(
  '.section07_text2', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, x: -200 }, // 시작 스타일
  { opacity: 1, x: 0, duration: 3 },
  30 // 끝 스타일 및 애니메이션 지속 시간
);

// 섹션 8 애니----------

// section08_img1 요소에만 스크롤에 따른 애니메이션 부여
var ani08_img = gsap.timeline({
  scrollTrigger: {
    trigger: '.section08',
    start: 'top top',
    end: '+=2000',
    scrub: 6,
    pin: true,
    // markers: true,
  },
});

ani08_img.fromTo('.section08_img1', { y: 0 }, { y: -1600, duration: 90 }, 8);
ani08_img.fromTo('.section08_img2', { y: 0 }, { y: -1750, duration: 120 }, 16);
ani08_img.fromTo('.section08_img3', { y: 0 }, { y: -1750, duration: 50 }, 0);
ani08_img.fromTo('.section08_img4', { y: 0 }, { y: -1900, duration: 160 }, 22);
ani08_img.fromTo(
  '.section08_text',
  { x: 0 },
  { x: -3100, y: 0, duration: 300 },
  0
);
ani08_img.fromTo(
  '.section08_bg',
  { x: 0, scale: 1 },
  { x: 0, scale: 1.2, duration: 300 },
  0
);

// 섹션 9 애니----------

var ani09 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section09',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true,
    // markers: true,
  },
});

ani09.fromTo(
  '.section09_scotty',
  { x: -50, opacity: 0, duration: 0.5 },
  { x: 0, opacity: 1, duration: 0.5 },
  0
);
ani09.fromTo(
  '.section09_cameron',
  { x: -50, opacity: 0, duration: 0.5 },
  { x: 0, opacity: 1, duration: 0.5 },
  0
);
// ani09.fromTo(
//   '.section09_putter',
//   { opacity: 0, duration: 0.5 },
//   { opacity: 1, duration: 0.5 },
//   1
// );

// 섹션 10------------------------------

var ani10 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section10',
    start: 'top top',
    end: '+=3500',
    scrub: 3,
    pin: true,
    // markers: true,
  },
});

// var ani10 = gsap.timeline();
ani10.fromTo(
  '.section10_line1',
  { clipPath: 'inset(0% 100% 0% 0%)' },
  { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.1 },
  0
);
ani10.fromTo(
  '.section10_line2',
  { clipPath: 'inset(100% 0% 0% 0%)', duration: 0.1 },
  { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.1 },
  0
);

ani10.fromTo(
  '.section10_line3',
  { clipPath: 'inset(0% 100% 0% 0%)', duration: 0.1 },
  { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.1 },
  0
);

ani10.fromTo(
  '.section10_line4',
  { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.1 },
  { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.1 },
  0
);

ani10.fromTo(
  '.section10_line5',
  { clipPath: 'inset(0% 100% 0% 0%)', duration: 0.1 },
  { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.1 },
  0
);

ani10.fromTo(
  '.section10_line6',
  { clipPath: 'inset(100% 0% 0% 0%)', duration: 0.1 },
  { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.1 },
  0
);

ani10.fromTo(
  '.section10_line7',
  { clipPath: 'inset(0% 100% 0% 0%)', duration: 0.1 },
  { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.1 },
  0
);

// section10_text 애니메이션
ani10.fromTo('.s', { opacity: 0 }, { y: 0, opacity: 1, duration: 2 }, 4);
ani10.fromTo('.u', { opacity: 0 }, { y: 0, opacity: 1, duration: 2 }, 10);
ani10.fromTo('.p', { opacity: 0 }, { y: 0, opacity: 1, duration: 2 }, 16);
ani10.fromTo('.e', { opacity: 0 }, { y: 0, opacity: 1, duration: 2 }, 22);
ani10.fromTo('.r', { opacity: 0 }, { y: 0, opacity: 1, duration: 2 }, 28);

ani10.fromTo(
  '.section10_img1',
  { opacity: 0 },
  { y: 0, opacity: 1, duration: 2 },
  4
);

ani10.fromTo(
  '.section10_img2',
  { opacity: 0 },
  { y: 0, opacity: 1, duration: 2 },
  10
);

ani10.fromTo(
  '.section10_img3',
  { opacity: 0 },
  { y: 0, opacity: 1, duration: 2 },
  16
);

ani10.fromTo(
  '.section10_img4',
  { opacity: 0 },
  { y: 0, opacity: 1, duration: 2 },
  22
);
// //섹션 11------------------------------
var ani11 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section11',
    start: 'top top',
    end: '+=3000',
    scrub: 2,
    pin: true,
    // markers: true,
    onEnter: playVideo,
  },
});
function playVideo() {
  const video = document.getElementById('fullscreen-video10');
  video.play();
}
ani11.fromTo(
  '#fullscreen-video10',
  {
    opacity: 1,
    width: '626px',
    height: '100px',
    duration: 1,

    transformOrigin: 'center center',
  },
  {
    opacity: 1,
    width: '100vw',
    height: '100vh',
    scale: 1,
    duration: 2,
    x: '-468px', // x축을 -50%만큼 이동하여 가운데로 정렬
    y: '-335px',
    transformOrigin: 'center center',
  },
  3 // 시작 시간을 조절하려면 숫자를 조정합니다.
);

ani11.fromTo(
  '.section11_putter',
  { x: 0, opacity: 1 },
  { x: 100, opacity: 0, duration: 2 },
  1
);

ani11.fromTo(
  '.section11_red',
  { x: 0, opacity: 1 },
  { x: 100, opacity: 0, duration: 2 },
  1
);

ani11.fromTo(
  '.section11_select',
  { x: 0, opacity: 1 },
  { x: -100, opacity: 0, duration: 2 },
  1
);

ani11.fromTo(
  '.section11_super',
  { x: 0, opacity: 1 },
  { x: -100, opacity: 0, duration: 2 },
  1
);

ani11.fromTo(
  '.section11_text',
  { x: 0, opacity: 1 },
  { x: -100, opacity: 0, duration: 2 },
  1
);
// //섹션 12 가로 스크롤------------------------------

// const offsetLeft2 = $('.section11').offset().left;

$('.scroll_container02').css('left', offsetLeft);

gsap.registerPlugin(ScrollTrigger); //scroll trigger 플러그인 등록

let section02 = gsap.utils.toArray('.panel02'); //패널 클래스를 가진 모든 요소를 배열로 반환

gsap.to(section02, {
  xPercent: -100 * (section02.length - 1),
  // 내가 보는 방향에서 왼쪽으로 이동해야하니까 -으로 씀
  ease: 'none', // https://gsap.com/docs/v3/Eases/
  scrollTrigger: {
    trigger: '.scroll_container02',
    start: 'top top', //첫번쨰 옵션은 요소의 위치, 두번쨰 옵션은 뷰포트 위치
    end: () => '+=' + document.querySelector('.scroll_container02').offsetWidth,
    // markers: true,
    pin: true, // trigger에 지정된 요소의 시작점과 끝점 사이에 브라우저 고정
    scrub: 1.5, // 스크롤 속도에 따라 애니메이션 속도가 변경됨
  },
});

// 섹션 가로 1---------------------------
let panel4Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.section12', // 여기에 해당 요소의 클래스나 ID를 넣어주세요.
    start: 'top top', // 시작 시점
    end: '+=500', // 끝 시점
    scrub: 1.5, // 스크롤 속도에 따른 애니메이션의 부드러움 정도
    // markers: true,
  },
});

panel4Timeline.fromTo(
  '.section12_text1', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, x: 200 }, // 시작 스타일
  { opacity: 1, x: 0, duration: 3 },
  0 // 끝 스타일 및 애니메이션 지속 시간
);

// --------섹션 가로 2---------------
let panel5Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.section13', // 여기에 해당 요소의 클래스나 ID를 넣어주세요.
    start: 'top top', // 시작 시점
    end: '+=3000', // 끝 시점
    scrub: 1, // 스크롤 속도에 따른 애니메이션의 부드러움 정도
    // markers: true,
  },
});

panel5Timeline.fromTo(
  '.section13_text1', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, x: -200 }, // 시작 스타일
  { opacity: 1, x: 0, duration: 3 },
  10 // 끝 스타일 및 애니메이션 지속 시간
);

// --------섹션 가로 3---------------
let panel6Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.section14', // 여기에 해당 요소의 클래스나 ID를 넣어주세요.
    start: 'top top', // 시작 시점
    end: '+=6000', // 끝 시점
    scrub: 1, // 스크롤 속도에 따른 애니메이션의 부드러움 정도
    // markers: true,
  },
});

panel6Timeline.fromTo(
  '.section14_text1', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, x: -200 }, // 시작 스타일
  { opacity: 1, x: 0, duration: 3 },
  16 // 끝 스타일 및 애니메이션 지속 시간
);

panel6Timeline.fromTo(
  '.section14_text2', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, x: 200 }, // 시작 스타일
  { opacity: 1, x: 0, duration: 3 },
  16 // 끝 스타일 및 애니메이션 지속 시간
);

// 섹션 15------------------------------

var ani15 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section15',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true,
    // markers: true,
  },
});

// ani15.fromTo(
//   '.section15_comma',
//   { y: -50, opacity: 0, duration: 1 },
//   { y: 0, opacity: 1, duration: 1 },
//   0
// );

ani15.fromTo(
  '.section15_text1',
  { y: -50, opacity: 0, duration: 1 },
  { y: 0, opacity: 1, duration: 1 },
  0
);
ani15.fromTo(
  '.section15_text2',
  { y: -50, opacity: 0, duration: 1 },
  { y: 0, opacity: 1, duration: 1 },
  0
);
ani15.fromTo(
  '.section15_text3',
  { y: -50, opacity: 0, duration: 1 },
  { y: 0, opacity: 1, duration: 1 },
  0
);
ani15.fromTo(
  '.section15_text4',
  { y: -50, opacity: 0, duration: 1 },
  { y: 0, opacity: 1, duration: 1 },
  1
);

// 섹션 16------------------------------

var ani16 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section16',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true,
    // markers: true,
  },
});

ani16.fromTo(
  '.section16_vokey',
  { x: 50, opacity: 0, duration: 0.5 },
  { x: 0, opacity: 1, duration: 0.5 },
  0.5
);

ani16.fromTo(
  '.section16_choose',
  { x: 50, opacity: 0, duration: 0.5 },
  { x: 0, opacity: 1, duration: 0.5 },
  0
);
// ani16.fromTo(
//   '.section16_sm9',
//   { x: 50, opacity: 0, duration: 1 },
//   { x: 0, opacity: 1, duration: 1 },
//   1
// );
// ani16.fromTo(
//   '.section16_wedge',
//   { x: 50, opacity: 0, duration: 1 },
//   { x: 0, opacity: 1, duration: 1 },
//   1
// );

// 섹션 17------------------------------

var ani17 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section17',
    start: 'top top',
    end: '+=1000',
    scrub: 1,
    pin: true,
    // markers: true,
  },
});

ani17.fromTo(
  '.section17_closer',
  { y: 0, opacity: 0, duration: 1 },
  { y: 0, opacity: 1, duration: 1 },
  0
);

// ani17.fromTo(
//   '.section17_box',
//   { x: 50, opacity: 0, duration: 0.5 },
//   { x: 0, opacity: 1, duration: 0.5 },
//   1
// );

ani17.fromTo(
  '.section17_box',
  { clipPath: 'inset(0% 100% 0% 0%)', duration: 0.5 },
  { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5 },
  0
);

// 섹션 18------------------------------

var ani18 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section18',
    start: 'top top',
    end: '+=3000',
    scrub: 2,
    pin: true,
    // markers: true,
  },
});

ani18.fromTo(
  '.section18_text1',
  { x: -150, opacity: 0, duration: 0.3 },
  { x: 0, opacity: 1, duration: 0.3 },
  0
);
ani18.fromTo(
  '.section18_text2',
  { x: 150, opacity: 0, duration: 0.3 },
  { x: 0, opacity: 1, duration: 0.3 },
  0.5
);
ani18.fromTo(
  '.section18_text3',
  { x: -150, opacity: 0, duration: 0.3 },
  { x: 0, opacity: 1, duration: 0.3 },
  1
);
ani18.fromTo(
  '.section18_text4',
  { y: 50, opacity: 0, duration: 0.5 },
  { y: 0, opacity: 1, duration: 0.5 },
  1.5
);

ani18.fromTo(
  '.section18_img',
  { y: 50, opacity: 0, duration: 0.5 },
  { y: 0, opacity: 1, duration: 0.5 },
  1.5
);

// 섹션 19------------------------------

var ani19 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section19',
    start: 'top top',
    end: '+=1000',
    scrub: 2,
    pin: true,
    // markers: true,
  },
});

// ani19.fromTo(
//   '.section19_img1',
//   { x: 50, y: 0, opacity: 0, duration: 0.5 },
//   { x: 0, y: 0, opacity: 1, duration: 0.5 },
//   0
// );

ani19.fromTo(
  '.section19_text1',
  { x: -100, y: 0, opacity: 0, duration: 0.5 },
  { x: 0, y: 0, opacity: 1, duration: 0.5 },
  0
);

ani19.fromTo(
  '.section19_shot',
  { x: -100, y: 0, opacity: 0, duration: 0.5 },
  { x: 0, y: 0, opacity: 1, duration: 0.5 },
  0.5
);

// ani19.fromTo(
//   '.section19_text2',
//   { x: 0, y: 50, opacity: 0, duration: 0.5 },
//   { x: 0, y: 0, opacity: 1, duration: 0.5 },
//   0.5
// );

// ani19.fromTo(
//   '.section19_img2',
//   { x: 0, y: 50, opacity: 0, duration: 0.5 },
//   { x: 0, y: 0, opacity: 1, duration: 0.5 },
//   0.5
// );

// 섹션 20------------------------------

var ani20 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section20',
    start: 'top top',
    end: '+=1000',
    scrub: 2,
    pin: true,
    // markers: true,
  },
});

ani20.fromTo(
  '.section20_choose',
  { x: -100, y: 0, opacity: 0, duration: 0.5 },
  { x: 0, y: 0, opacity: 1, duration: 0.5 },
  0
);

ani20.fromTo(
  '.section20_closer',
  { x: 100, y: 0, opacity: 0, duration: 0.5 },
  { x: 0, y: 0, opacity: 1, duration: 0.5 },
  0
);

// //섹션 21 가로 스크롤------------------------------

// const offsetLeft2 = $('.section11').offset().left;

$('.scroll_container03').css('left', offsetLeft);

gsap.registerPlugin(ScrollTrigger); //scroll trigger 플러그인 등록

let section03 = gsap.utils.toArray('.panel03'); //패널 클래스를 가진 모든 요소를 배열로 반환

gsap.to(section03, {
  xPercent: -100 * (section03.length - 1),
  // 내가 보는 방향에서 왼쪽으로 이동해야하니까 -으로 씀
  ease: 'none', // https://gsap.com/docs/v3/Eases/
  scrollTrigger: {
    trigger: '.scroll_container03',
    start: 'top top', //첫번쨰 옵션은 요소의 위치, 두번쨰 옵션은 뷰포트 위치
    end: () => '+=' + document.querySelector('.scroll_container03').offsetWidth,
    // markers: true,
    pin: true, // trigger에 지정된 요소의 시작점과 끝점 사이에 브라우저 고정
    scrub: 1.5, // 스크롤 속도에 따라 애니메이션 속도가 변경됨
  },
});

// 섹션 가로 1---------------------------
let panel7Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.section21', // 여기에 해당 요소의 클래스나 ID를 넣어주세요.
    start: 'top top', // 시작 시점
    end: '+=500', // 끝 시점
    scrub: 1.5, // 스크롤 속도에 따른 애니메이션의 부드러움 정도
    // markers: true,
  },
});

panel7Timeline.fromTo(
  '.section21_always', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, y: 0, duration: 3 }, // 시작 스타일
  { opacity: 1, y: 0, duration: 3 },
  0 // 끝 스타일 및 애니메이션 지속 시간
);

// --------섹션 가로 2---------------
let panel8Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.section22', // 여기에 해당 요소의 클래스나 ID를 넣어주세요.
    start: 'top top', // 시작 시점
    end: '+=3000', // 끝 시점
    scrub: 1, // 스크롤 속도에 따른 애니메이션의 부드러움 정도
    // markers: true,
  },
});

panel8Timeline.fromTo(
  '.section22_alotof', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, y: 0, duration: 3 }, // 시작 스타일
  { opacity: 1, y: 0, duration: 3 },
  10 // 끝 스타일 및 애니메이션 지속 시간
);

panel8Timeline.fromTo(
  '.section22_intothe', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, y: 0, duration: 3 }, // 시작 스타일
  { opacity: 1, y: 0, duration: 3 },
  16 // 끝 스타일 및 애니메이션 지속 시간
);

// --------섹션 가로 3---------------
let panel9Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.section23', // 여기에 해당 요소의 클래스나 ID를 넣어주세요.
    start: 'top top', // 시작 시점
    end: '+=6000', // 끝 시점
    scrub: 1, // 스크롤 속도에 따른 애니메이션의 부드러움 정도
    // markers: true,
  },
});

panel9Timeline.fromTo(
  '.section23_shape', // 요소 선택자를 여기에 넣어주세요.
  { opacity: 0, y: 50 }, // 시작 스타일
  { opacity: 1, y: 0, duration: 3 },
  20 // 끝 스타일 및 애니메이션 지속 시간
);

// panel9Timeline.fromTo(
//   '.section23_text', // 요소 선택자를 여기에 넣어주세요.
//   { opacity: 0, y: 50 }, // 시작 스타일
//   { opacity: 1, y: 0, duration: 3 },
//   20 // 끝 스타일 및 애니메이션 지속 시간
// );

// 섹션 24------------------------------

var ani24 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section24',
    start: 'top top',
    end: '+=3000',
    scrub: 1,
    pin: true,
    // markers: true,
  },
});

ani24.fromTo(
  '.section24_mask',
  { x: 0, y: 0, opacity: 0, duration: 3 },
  { x: 0, y: 0, opacity: 1, duration: 3 },
  8
);

ani24.fromTo(
  '.section24_text',
  { x: 0, y: 0, opacity: 0, duration: 3 },
  { x: 0, y: 0, opacity: 1, duration: 3 },
  8
);

ani24.fromTo(
  '.section24_footer',
  { x: 0, y: 100, opacity: 0, duration: 3 },
  { x: 0, y: 0, opacity: 1, duration: 3 },
  16
);

ani24.fromTo(
  '.sns',
  { x: 0, y: 100, opacity: 0, duration: 3 },
  { x: 0, y: 0, opacity: 1, duration: 3 },
  16
);
