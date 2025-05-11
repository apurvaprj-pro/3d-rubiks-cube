const cube = document.getElementById("cube");
const faces = document.querySelectorAll(".face");

faces.forEach(face => {
  for (let i = 0; i < 9; i++) {
    const sticker = document.createElement("div");
    face.appendChild(sticker);
  }
});

let rotateX = -30;
let rotateY = 30;
let isDragging = false;
let lastX, lastY;

document.addEventListener("mousedown", (e) => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - lastX;
  const deltaY = e.clientY - lastY;

  rotateY += deltaX * 0.5;
  rotateX -= deltaY * 0.5;

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
