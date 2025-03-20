document.getElementById("btn-change").onclick = function () {
  let r = Math.ceil(Math.random() * 256);
  let g = Math.ceil(Math.random() * 256);
  let b = Math.ceil(Math.random() * 256);
  document.body.style.background = `rgb(${r},${g},${b})`;
};
