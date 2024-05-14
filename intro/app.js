let banner = document.querySelector('.banner');
let canvas = document.getElementById('dotsCanvas');
let proceedBTN = document.querySelector('#ProceedButton');

// Set canvas size to match its displayed size
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let ctx = canvas.getContext('2d');
console.log(proceedBTN); // Verify the button selection

let dots = [];
let arrayColors = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];

// Generate initial set of dots
for (let index = 0; index < 50; index++) {
  dots.push({
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    size: Math.random() * 3 + 5,
    color: arrayColors[Math.floor(Math.random() * 5)],
  });
}

// Function to draw all dots
const drawDots = () => {
  dots.forEach((dot) => {
    ctx.fillStyle = dot.color;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
    ctx.fill();
  });
};

// Initial drawing of dots
drawDots();

// Handle mouse movement over the banner
banner.addEventListener('mousemove', (event) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDots();
  let mouse = {
    x: event.pageX - banner.getBoundingClientRect().left,
    y: event.pageY - banner.getBoundingClientRect().top,
  };
  dots.forEach((dot) => {
    let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
    if (distance < 300) {
      ctx.strokeStyle = dot.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(dot.x, dot.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  });
});

// Handle mouse leaving the banner
banner.addEventListener('mouseout', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDots();
});

// Handle window resize
window.addEventListener('resize', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = banner.offsetWidth;
  canvas.height = banner.offsetHeight;

  dots = [];
  for (let index = 0; index < 50; index++) {
    dots.push({
      x: Math.floor(Math.random() * canvas.width),
      y: Math.floor(Math.random() * canvas.height),
      size: Math.random() * 3 + 5,
      color: arrayColors[Math.floor(Math.random() * 5)],
    });
  }
  drawDots();
});

proceedBTN.addEventListener('click', () => {
  window.open('../Main Page/index.html', '_blank');
});
