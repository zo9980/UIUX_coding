document.querySelector('body').addEventListener('mousemove', (e) => {
  gsap.to('.mouse_cursor', {
    duration: 0.2,
    left: e.pageX,
    top: e.pageY,
  });

  let mousePageX = e.pageX;
  let mousePageY = e.pageY;

  let centerPageX = window.innerWidth / 2 - mousePageX;
  let centerPageY = window.innerHeight / 2 - mousePageY;
});
