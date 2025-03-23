"use strict";

// Toggle the main menu on click
var mainNav = document.querySelector('.main-nav');

if (mainNav) {
  mainNav.addEventListener('click', function () {
    mainNav.classList.toggle('show');
  });
} else {
  console.error('Main menu not found');
}
//# sourceMappingURL=index.dev.js.map
