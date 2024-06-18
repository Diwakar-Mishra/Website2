// =========================== TYPING TEXT PORTION =======================
var typed = new Typed("#typed-text", {
    strings : ["WebDev","MERNSTACK DEV","Data Scientist"],
    typeSpeed: 200,
    backSpeed: 200,
    backDelay: 500,
    startDelay: 1000,
    loop: true,
    
  });
  // ============================ swiper js content ===================== 
  var swiper = new Swiper("#swipper-companies-main", {
    slidesPerView: 2,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView : 5
      }
    },
    // prventing from returning from right to left
    loop : true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // addition of autoplay : for automatic slides
    autoplay : {
      delay: 1500
    },
    // addit=ion of sliding dpeed
    speed:300,
    // allowSlidePrev : false,
    
  });

  var swiper2 = new Swiper("#mySwiper2", {
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
      },
    },
    // prventing from returning from right to left
    loop : true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // addition of autoplay : for automatic slides
    autoplay : {
      delay: 1500
    },
    // addit=ion of sliding dpeed
    speed:500,
    // allowSlidePrev : false,
    
  });
  // the theme button
  var body = document.getElementsByTagName('body')[0];
  document.getElementById("theme-button").addEventListener('click',()=>{
    // alert("you clicked theme btn");
    body.classList.toggle("dark-theme");
    body.classList.toggle("text-light");
  })