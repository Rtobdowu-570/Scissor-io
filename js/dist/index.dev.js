"use strict";

// Menu Button Toggle
var menuBtn = document.querySelector(".menu-btn");
var leftMenu = document.querySelector("#left-menu");
menuBtn.addEventListener("click", function () {
  leftMenu.classList.toggle("show");
}); // Close menu when clicking outside

document.addEventListener("click", function (e) {
  if (!e.target.closest(".menu-btn") && !e.target.closest("#left-menu")) {
    if (leftMenu.classList.contains("show")) {
      leftMenu.classList.remove("show");
    }
  }
}); // FAQ Accordion

var faqItems = document.querySelectorAll(".faq-item h3");
faqItems.forEach(function (item) {
  item.addEventListener("click", function () {
    var parent = item.parentElement;
    var paragraph = parent.querySelector("p");
    var icon = item.querySelector("i"); // Toggle paragraph visibility

    if (paragraph) {
      if (paragraph.style.display === "none" || !paragraph.style.display) {
        paragraph.style.display = "block";
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      } else {
        paragraph.style.display = "none";
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      }
    } // Hide other paragraphs


    faqItems.forEach(function (otherItem) {
      if (otherItem !== item) {
        var otherParent = otherItem.parentElement;
        var otherParagraph = otherParent.querySelector("p");
        var otherIcon = otherItem.querySelector("i");

        if (otherParagraph && otherParagraph.style.display === "block") {
          otherParagraph.style.display = "none";
          otherIcon.classList.remove("fa-minus");
          otherIcon.classList.add("fa-plus");
        }
      }
    });
  });
}); // Form Submission

var form = document.querySelector(".form-input");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var url = document.querySelector("#url").value;
  var domain = document.querySelector("#domain").value;
  var alias = document.querySelector("#alias").value;

  if (url && domain && alias) {
    // In a real application, this would send data to a server
    alert("URL shortened successfully!\nOriginal: ".concat(url, "\nShortened: ").concat(domain, "/").concat(alias));
    form.reset();
  } else {
    alert("Please fill in all fields");
  }
}); // Smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    }
  });
}); // Initialize the page with the first FAQ item open

if (faqItems.length > 0) {
  var firstItem = faqItems[0];
  var paragraph = firstItem.parentElement.querySelector("p");

  if (paragraph) {
    paragraph.style.display = "block";
  }
}
//# sourceMappingURL=index.dev.js.map
