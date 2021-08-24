// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml2 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 50000
  });


document.addEventListener("DOMContentLoaded", function () {
  console.log('Loaded page')
  window.addEventListener('scroll', function () {
    // trả về vị trí chuột hiện tại
    if (window.pageYOffset > 0) {
      console.log('Dang o vi tri: ', window.pageYOffset);
    }
  })
})

$(document).ready(function () {
  $(window).scroll(function () {

    if ($(this).scrollTop() >= 500) {
      $('.content2').fadeIn(1400);
    } else {
      $('.content2').fadeOut(1);
    }
  });

});


