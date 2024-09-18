function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu")
  const body = document.body

  mobileMenu.style.display = "none"
  mobileMenu.classList.remove("open")
  body.style.overflow = "auto"
}

function toggleMobileMenu() {
  const openBtn = document.getElementById("open-menu")
  const mobileMenu = document.getElementById("mobile-menu")
  const closeBtn = document.getElementById("close-menu")

  const body = document.body

  openBtn.addEventListener("click", () => {
    mobileMenu.classList.add("open")
    mobileMenu.style.display = "block"
    body.style.overflow = "hidden"
  })

  closeBtn.addEventListener("click", () => {
    closeMobileMenu()
  })

  const contactLink = mobileMenu.querySelector('a[href="#footer-form"]')
  if (contactLink) {
    contactLink.addEventListener("click", (event) => {
      event.preventDefault() // Предотвращаем стандартное действие перехода по ссылке

      // Вне зависимости от текущего состояния меню, закрываем его
      closeMobileMenu()

      const header = document.getElementById("main-header")
      const footerForm = document.getElementById("footer-form")

      if (header && footerForm) {
        const headerHeight = header.offsetHeight
        const footerFormTop = footerForm.offsetTop - headerHeight
        footerForm.scrollIntoView({ behavior: "smooth", block: "start" }) // Прокручиваем к форме в футере
      }
    })
  }
}

toggleMobileMenu()

document.addEventListener("DOMContentLoaded", function () {
  var params = new URLSearchParams(location.search)
  var target = params.get("target")

  if (target === "footer-form") {
    var header = document.getElementById("main-header")
    if (header) {
      var headerHeight = header.offsetHeight
      var targetElement = document.getElementById("footer-form")
      if (targetElement) {
        var targetOffset = targetElement.offsetTop - headerHeight
        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        })
      }
    }
  }
})

document.addEventListener("DOMContentLoaded", function () {
  var params = new URLSearchParams(location.search)
  var target = params.get("target")

  if (target === "footer-form") {
    var header = document.getElementById("main-header")
    if (header) {
      var headerHeight = header.offsetHeight
      var targetElement = document.getElementById("footer-form")
      if (targetElement) {
        var targetOffset = targetElement.offsetTop - headerHeight

        // Находим все ссылки с атрибутом target="footer-form"
        var contactLinks = document.querySelectorAll(
          'a[href*="target=footer-form"]'
        )

        // Добавляем слушатель события "click" ко всем найденным ссылкам
        contactLinks.forEach(function (link) {
          link.addEventListener("click", function (e) {
            e.preventDefault() // Предотвращаем перезагрузку страницы

            // Выполняем плавную прокрутку
            window.scrollTo({
              top: targetOffset,
              behavior: "smooth",
            })
          })
        })
      }
    }
  }
})
