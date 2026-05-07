const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3,
    dx: (Math.random() - 0.5),
    dy: (Math.random() - 0.5)
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,255,255,0.7)";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(draw);
}

draw();

function checkEmail() {

  let email = document.getElementById("email").value;
  let result = document.getElementById("result");

  let safeSound = document.getElementById("safeSound");
  let dangerSound = document.getElementById("dangerSound");

  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    result.innerHTML = "اكتب ايميل أول";
    result.style.color = "red";
  }

  else if (pattern.test(email)) {
    result.innerHTML = "✔ الايميل آمن";
    result.style.color = "green";

    safeSound.play();   // صوت آمن
  }

  else {
    result.innerHTML = "⚠ الايميل مشبوه";
    result.style.color = "red";

    dangerSound.play();  // صوت خطر
  }
}
