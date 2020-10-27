"use strict";

const updateColor = (e) => {
  const color = e.target.getAttribute(["data-color"]);
  document.documentElement.style.setProperty(`--selectedColor`, `var(--${color})`);
  console.log(color);
}

const footer = document.querySelector(".footer-menu");
footer.addEventListener("click", updateColor);
