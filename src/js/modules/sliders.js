//main page Project section
if (document.getElementById("page1Identifier")) {
  const swiperJobs = new Swiper(".jobs-slider", {
    loop: false,
    slidesPerView: 1.1,
    spaceBetween: 20,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
    },
  })
}

//news page slider`s
if (document.getElementById("page4Identifier")) {
  //intro
  const newsIntroSwiper = new Swiper(".news-item__intro", {
    loop: true,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
  //other news
  const newsOtherSwiper = new Swiper(".news-other-container", {
    loop: false,
    speed: 1000,
    slidesPerView: 1.1,
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
    },
  })
}

//portfolio page slider`s

if (document.getElementById("page8Identifier")) {
  const portfolioIntroSwiper = new Swiper(".portfolio-project__intro", {
    loop: false,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  const swiperOtherProj = new Swiper(".portfolio-project-other__container", {
    //loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  })
}
