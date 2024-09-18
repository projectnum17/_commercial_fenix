if (document.getElementById("page2Identifier")) {
  const items = document.querySelectorAll(".item-at")

  function toggleAccordion(item) {
    const title = item.querySelector(".title-at")
    const tab = item.querySelector(".tab-at")

    title.classList.toggle("active")
    tab.classList.toggle("active")

    if (title.classList.contains("active")) {
      tab.style.maxHeight = tab.scrollHeight + "px"
    } else {
      tab.style.maxHeight = null
    }
  }

  function initializeAccordion() {
    items.forEach((item) => {
      item.addEventListener("click", () => {
        toggleAccordion(item)
      })
    })
  }

  initializeAccordion()
}
