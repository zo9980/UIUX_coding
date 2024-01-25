// Clone Menu and SNS Elments
const menu = document.querySelector('.navi');
const info = document.querySelector('.info');
const newMenuBox = document.querySelector('.new-mobile-menu');
const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenuBox.insertAdjacentElement('beforeend', newMenu);
newMenuBox.insertAdjacentElement('beforeend', newInfo);

//Mobile Menu Toggle Function
const mobileMenuIcon = document.querySelector('.mobile-icon');

// console.log(mobileMenuIcon);

mobileMenuIcon.addEventListener('click', (e) => {
  const target = e.currentTarget;

  target.classList.toggle('active');

  const menuHeight = document.querySelector('.new-mobile-menu').scrollHeight; //요소가 펼쳐졌을때의 높이

  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    newMenuBox.style.height = `${menuHeight}px`;
  } else {
    target.classList.add('not-active');
    newMenuBox.style.height = 0;
  }
});

// Fixed Header Style Change and meet section start animation When Scrolling Down
const header = document.querySelector('.header');
const meetSection = document.querySelector('.meet-section');
const meetSectionTop = meetSection.offsetTop;

const scrCtrl = () => {
  const scry = window.scrollY; //화면 최상단이 위치한 스크롤 위치값
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  if (scry > meetSectionTop - 200) {
    meetSection.classList.add('on');
  }
};
window.addEventListener('scroll', scrCtrl);

// features section data

const features = [
  {
    image: '/soaply/images/about-icon-1.svg',
    title: 'For All Skin Types',
    text: '의무교육은 무상으로 한다. 감사원은 세입·세출의 결산을 매년 검사하여 대통령과 차년도국회에 그 결과를 보고하여야 한다.',
  },
  {
    image: '/soaply/images/about-icon-2.svg',
    title: '100% Organic',
    text: '시후혼간다, 노하루다. 디이가 둘노스야 네삼 꼬라돠단는 던녀줠마나우 기겅마아앎이나 가로오 늬삻근에. 드드군으로 스익자삭은 드디쟡건고다 우충은 잘승다',
  },
  {
    image: '/soaply/images/about-icon-3.svg',
    title: 'Cuelty Free',
    text: '에야사께라도 으질기돈기문은 해궁조디갱도 함자진자다 하글가이는. 적나워놘부터 꾁사결으로 촐걸라맙더며',
  },
];

const featuresWrapper = document.querySelector('.features');

features.forEach((feature) => {
  const featureElm = `
  <div class="feature">
   <div class="feature-icon">
     <img src="${feature.image}" alt="" />
   </div>
   <h4>${feature.title}</h4>
   <p>${feature.text}</p>
  </div>`;

  featuresWrapper.insertAdjacentHTML('beforeend', featureElm);
});

// Swiper Slider pagination

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true, //반복 여부

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
