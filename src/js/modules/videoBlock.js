if (document.getElementById("page1Identifier")) {
  const playButton = document.getElementById("playVideo")

  const video = document.getElementById("promoVideo")

  function updatePlayButtonVisibility() {
    if (video.paused) {
      playButton.style.display = "flex"
    } else {
      playButton.style.display = "none"
    }
  }

  playButton.addEventListener("click", function () {
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  })

  video.addEventListener("play", updatePlayButtonVisibility)
  video.addEventListener("pause", updatePlayButtonVisibility)

  updatePlayButtonVisibility()

  document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.querySelector(".read-more")
    const textBlock = document.querySelector(".text-block-about")
    const contentBlock = document.querySelector(".text")

    ///////////////
    const hiddenBlock = document.querySelector(".text-block-about-hidden")
    //////////////

    if (window.innerWidth <= 1023) {
      var initialHeight = 164 // Если ширина экрана <= 1023px
    } else {
      var initialHeight = 379 // Если ширина экрана > 1023px
    }

    textBlock.style.maxHeight = initialHeight + "px"

    readMoreButton.addEventListener("click", function () {
      textBlock.classList.toggle("active")
      contentBlock.classList.toggle("active")
      readMoreButton.classList.toggle("active")
      ////////////////////////////
      hiddenBlock.classList.toggle("active")

      if (textBlock.classList.contains("active")) {
        readMoreButton.textContent = "Read less"
        //textBlock.style.maxHeight = textBlock.scrollHeight + "px"
      } else {
        readMoreButton.textContent = "Read more"
        //textBlock.style.maxHeight = initialHeight + "px"
      }

      if (window.innerWidth <= 1023) {
        if (textBlock.classList.contains("active")) {
          textBlock.style.maxHeight = textBlock.scrollHeight + "px"
        } else {
          textBlock.style.maxHeight = initialHeight + "px"
        }
      }
    })
  })

  // function updateVideoPlayVisibility() {
  //   const textBlock = document.querySelector(".text-block-about")
  //   const contentBlock = document.querySelector(".text")
  //   const readMoreButton = document.querySelector(".read-more")

  //   textBlock.classList.add("active")
  //   contentBlock.classList.add("active")
  //   readMoreButton.classList.add("active")

  //   readMoreButton.textContent = "Read less"
  //   textBlock.style.maxHeight = textBlock.scrollHeight + "px"
  // }

  // // Добавьте обработчик события "play" к элементу видео
  // video.addEventListener("play", function () {
  //   updateVideoPlayVisibility()
  // })
}

// if (document.getElementById("page1Identifier")) {
//   const playButton = document.getElementById("playVideo")

//   const video = document.getElementById("promoVideo")

//   function updatePlayButtonVisibility() {
//     if (video.paused) {
//       playButton.style.display = "flex"
//     } else {
//       playButton.style.display = "none"
//     }
//   }

//   playButton.addEventListener("click", function () {
//     if (video.paused) {
//       video.play()
//     } else {
//       video.pause()
//     }
//   })

//   video.addEventListener("play", updatePlayButtonVisibility)
//   video.addEventListener("pause", updatePlayButtonVisibility)

//   updatePlayButtonVisibility()

//   document.addEventListener("DOMContentLoaded", function () {
//     const readMoreButton = document.querySelector(".read-more")
//     const textBlock = document.querySelector(".text-block-about")
//     const contentBlock = document.querySelector(".text")

//     ///////////////
//     const hiddenBlock = document.querySelector(".text-block-about-hidden")
//     //////////////

//     if (window.innerWidth <= 1023) {
//       var initialHeight = 164 // Если ширина экрана <= 1023px
//     } else {
//       var initialHeight = 379 // Если ширина экрана > 1023px
//     }

//     textBlock.style.maxHeight = initialHeight + "px"

//     readMoreButton.addEventListener("click", function () {
//       textBlock.classList.toggle("active")
//       contentBlock.classList.toggle("active")
//       readMoreButton.classList.toggle("active")
//       ////////////////////////////
//       // hiddenBlock.classList.toggle("active")

//       if (textBlock.classList.contains("active")) {
//         readMoreButton.textContent = "Read less"
//         textBlock.style.maxHeight = textBlock.scrollHeight + "px"
//       } else {
//         readMoreButton.textContent = "Read more"
//         textBlock.style.maxHeight = initialHeight + "px"
//       }
//     })
//   })
// }
