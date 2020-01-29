const range = document.getElementById("myRange");
const slider = document.querySelector(".slider");
const jsLevels = document.querySelectorAll(".lvl");

range.addEventListener("input", e => {
  const lvl = 100 / jsLevels.length;
  slider.style = `-webkit-appearance: none;background: linear-gradient(to right, #ccb1f1, #435993, rgba(67,89,147,0) ${e.target.value}%)`;
  jsLevels.forEach((item, i) => {
    if (e.target.value >= i * lvl && e.target.value <= i * lvl + lvl) {
      item.classList.add("lvl--active");
    } else {
      item.classList.remove("lvl--active");
    }
  });
});
