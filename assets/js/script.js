// slider js
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// hello
var swiper = new Swiper(".product__swiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product__swiper2", {
  spaceBetween: 10,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  thumbs: {
    swiper: swiper,
  },
});

// 
// const tik = document.querySelectorAll('.tik')

// tik.addEventListener()

let count = 0
const btns = document.querySelectorAll('.btbtn')
const value = document.querySelector('.value')

btns.forEach(function(btn){
  btn.addEventListener('click', (e)=>{
      const styles = e.currentTarget.classList;

      if(styles.contains('decrease')){
          count--
      }
      else if(styles.contains('increase')){
          count++
      }

      value.textContent = count
  })
})

  