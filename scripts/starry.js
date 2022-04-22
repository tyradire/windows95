opts = {
  minRadius: 0.5,
  maxRadius: 1.4,
  delay: 100,
  step: 0.1,
  colors: ["rgb(255, 253, 135)", "rgb(255, 253, 135, 0.8)", "rgb(255, 253, 135, 0.6)", "rgb(255, 253, 135, 0.5)", "rgb(255, 253, 135, 0.4)",]
}

window.onload = function () {
bdCanvas();
};
function bdCanvas() {}

let canvas = document.querySelector(".starry");
resizeCanvas();

function resizeCanvas() {
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;
};

window.addEventListener("resize", function () {
  windowResize();
});

let check;

function windowResize() {
  clearTimeout(check);
  check = setTimeout(function () {
    clearInterval(animations);
    resizeCanvas();
    setup();
  }, 100)
}

let ctx = canvas.getContext("2d");

Stars = function (w, h) {
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  this.radius = opts.minRadius + Math.random() * (opts.maxRadius - opts.minRadius);
  this.color = opts.colors[[Math.round(Math.random() * opts.colors.length)]];
  this.vector = Math.round(Math.random()) || -1;
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  this.update = function () {
    this.check();
    this.radius += opts.step * this.vector;
  }
  this.check = function () {
    if(this.radius > opts.maxRadius || this.radius < opts.minRadius) {
      this.vector *= -1;
    }
  }
}

function loop () {
  animations = setInterval(function() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < arrStars.length; i++) {
      arrStars[i].update();
      arrStars[i].draw();
    }
  }, opts.delay);
}

function setup() {
  arrStars = [];
  for (let i = 0; i < (w / 90) * (h / 90); i++) {
    arrStars.push(new Stars(w, h));
    arrStars[i].draw();
  }
  loop ();
}

setup();