// Menu Button Toggle
const menuBtn = document.querySelector(".menu-btn")
const leftMenu = document.querySelector("#left-menu")

menuBtn.addEventListener("click", () => {
  leftMenu.classList.toggle("show")
})

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".menu-btn") && !e.target.closest("#left-menu")) {
    if (leftMenu.classList.contains("show")) {
      leftMenu.classList.remove("show")
    }
  }
})

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item h3")

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentElement
    const paragraph = parent.querySelector("p")
    const icon = item.querySelector("i")

    // Toggle paragraph visibility
    if (paragraph) {
      if (paragraph.style.display === "none" || !paragraph.style.display) {
        paragraph.style.display = "block"
        icon.classList.remove("fa-plus")
        icon.classList.add("fa-minus")
      } else {
        paragraph.style.display = "none"
        icon.classList.remove("fa-minus")
        icon.classList.add("fa-plus")
      }
    }

    // Hide other paragraphs
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherParent = otherItem.parentElement
        const otherParagraph = otherParent.querySelector("p")
        const otherIcon = otherItem.querySelector("i")

        if (otherParagraph && otherParagraph.style.display === "block") {
          otherParagraph.style.display = "none"
          otherIcon.classList.remove("fa-minus")
          otherIcon.classList.add("fa-plus")
        }
      }
    })
  })
})

// Form Submission
const form = document.querySelector(".form-input")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const url = document.querySelector("#url").value
  const domain = document.querySelector("#domain").value
  const alias = document.querySelector("#alias").value

  if (url && domain && alias) {
    // In a real application, this would send data to a server
    alert(`URL shortened successfully!\nOriginal: ${url}\nShortened: ${domain}/${alias}`)
    form.reset()
  } else {
    alert("Please fill in all fields")
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Initialize the page with the first FAQ item open
if (faqItems.length > 0) {
  const firstItem = faqItems[0]
  const paragraph = firstItem.parentElement.querySelector("p")
  if (paragraph) {
    paragraph.style.display = "block"
  }
}

