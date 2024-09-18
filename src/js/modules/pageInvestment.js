if (document.getElementById("page9Identifier")) {
  // document.addEventListener("DOMContentLoaded", function () {
  //   const investmentMore = document.querySelector(".investment-more")
  //   const investmentText = document.querySelector(
  //     ".investment-intro__head-descr__text"
  //   )

  //   let initialHeight = 163
  //   investmentText.style.maxHeight = initialHeight + "px"

  //   investmentMore.addEventListener("click", function () {
  //     investmentText.classList.toggle("active")

  //     if (investmentText.classList.contains("active")) {
  //       investmentText.style.maxHeight = investmentText.scrollHeight + "px"
  //       investmentMore.textContent = "Read less"
  //       investmentMore.style.backgroundColor = "#DEE3EB"
  //       investmentMore.style.color = "#224479"
  //     } else {
  //       investmentText.style.maxHeight = initialHeight + "px"
  //       investmentMore.textContent = "Read more"
  //       investmentMore.style.backgroundColor = "transparent"
  //       investmentMore.style.color = "#224479"
  //     }
  //   })
  // })

  function checkboxDropdown(el) {
    var $el = $(el)

    $el.each(function () {
      var $list = $(this).find(".dropdown-list"),
        $label = $(this).find(".dropdown-label"),
        $checkAll = $(this).find(".check-all"),
        $inputs = $(this).find(".check"),
        defaultChecked = $(this).find("input[type=checkbox]:checked"),
        initialLabelText = $label.text(), // Сохраняем исходный текст метки
        result = []

      function updateLabel() {
        if (result.length === 0) {
          $label.html(initialLabelText) // Восстанавливаем исходный текст метки, если нет выбранных элементов
        } else {
          $label.html(result.join(", "))
        }
      }

      $label.on("click", () => {
        $(this).toggleClass("open")
      })

      $checkAll.on("change", function () {
        var checked = $(this).is(":checked")
        var checkedText = $(this).next().text()
        result = []
        if (checked) {
          result.push(checkedText)
          $label.html(result)
          $inputs.prop("checked", false)
        } else {
          $label.html(result)
        }
      })

      $inputs.on("change", function () {
        var checked = $(this).is(":checked")
        var checkedText = $(this).next().text()
        if ($checkAll.is(":checked")) {
          result = []
        }
        if (checked) {
          result.push(checkedText)
          $checkAll.prop("checked", false)
        } else {
          let index = result.indexOf(checkedText)
          if (index >= 0) {
            result.splice(index, 1)
          }
        }
        updateLabel()
      })

      // Добавляем обработчик события mouseleave для закрытия списка
      $list.on("mouseleave", function () {
        $(this).closest(".dropdown").removeClass("open")
      })

      updateLabel()
    })
  }

  checkboxDropdown(".dropdown")

  const checkboxesCustom = document.querySelectorAll(".checkbox-custom")

  // Переберите каждый элемент и добавьте обработчик события change
  checkboxesCustom.forEach((checkboxCustom) => {
    checkboxCustom.addEventListener("change", function () {
      const parentCheckbox = this.closest(".checkbox")
      if (this.checked) {
        parentCheckbox.style.backgroundColor = "#DEE3EB"
      } else {
        parentCheckbox.style.backgroundColor = "" // Вернуться к стандартному фону, если не отмечено
      }
    })
  })
}
