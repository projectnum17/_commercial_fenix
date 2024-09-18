//fixed header
window.addEventListener("scroll", function () {
  var header = document.getElementById("main-header")

  if (window.pageYOffset > 1) {
    header.classList.add("header-fixed__bg")
  } else {
    header.classList.remove("header-fixed__bg")
  }
})

if (document.getElementById("header-white")) {
  window.addEventListener("scroll", function () {
    var headerWhite = document.getElementById("header-white")
    var headerWhiteBtn = document.querySelector(".header-btn__white")
    var defautLogo = document.getElementById("default-logo")
    var newLogo = document.getElementById("new-logo")
    var defaultBurger = document.getElementById("default-burger")
    var newBurger = document.getElementById("new-burger")

    if (window.pageYOffset > 1) {
      //white heaeder
      headerWhite.classList.add("header-white__new")
      headerWhiteBtn.classList.add("header-btn__white-new")
      defautLogo.style.display = "none"
      newLogo.style.display = "block"

      defaultBurger.style.display = "none"
      newBurger.style.display = "block"
    } else {
      //white header
      headerWhite.classList.remove("header-white__new")
      headerWhiteBtn.classList.remove("header-btn__white-new")
      defautLogo.style.display = "block"
      newLogo.style.display = "none"

      defaultBurger.style.display = "block"
      newBurger.style.display = "none"
    }
  })
}

// var header = document.getElementById("main-header")
// var isHidden = false
// var lastScrollTop = 0

// window.addEventListener("scroll", function () {
//   var st = window.pageYOffset || document.documentElement.scrollTop

//   if (st > lastScrollTop) {
//     // Прокрутка вниз
//     if (!isHidden) {
//       header.classList.remove("header-show")
//       header.classList.add("header-hide")
//       isHidden = true
//     }
//   } else {
//     // Прокрутка вверх
//     if (isHidden) {
//       header.classList.remove("header-hide")
//       header.classList.add("header-show")
//       isHidden = false
//     }
//   }

//   lastScrollTop = st <= 0 ? 0 : st
// })

var header = document.getElementById("main-header")
var isHidden = false
var lastScrollTop = 0

window.addEventListener("scroll", function () {
  var st = window.pageYOffset || document.documentElement.scrollTop

  if (st > lastScrollTop && st > 100) {
    // Прокрутка вниз после 50 пикселей
    if (!isHidden) {
      header.classList.remove("header-show")
      header.classList.add("header-hide")
      isHidden = true
    }
  } else {
    // Прокрутка вверх или менее чем на 50 пикселей
    if (isHidden) {
      header.classList.remove("header-hide")
      header.classList.add("header-show")
      isHidden = false
    }
  }

  lastScrollTop = st <= 0 ? 0 : st
})
