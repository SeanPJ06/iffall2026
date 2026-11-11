var books = document.querySelectorAll(".book");
var popup = document.getElementById("popup");
if (popup) {
  for (var i = 0; i < books.length; i++) {
    books[i].addEventListener("click", function() {
      var picture = this.querySelector("img");
      document.getElementById("picture").src = picture.src;
      document.getElementById("picture").alt = picture.alt;
      document.getElementById("bookname").textContent = picture.alt;
      document.getElementById("description").textContent = this.getAttribute("data-description");
      popup.showModal();
    });
  }
  document.getElementById("close").addEventListener("click", function() {
    popup.close();
  });
}
var worms = document.querySelectorAll(".wormbutton");
for (var j = 0; j < worms.length; j++) {
  worms[j].addEventListener("click", function() {
    var message = this.querySelector(".message");
    message.textContent = "Hello there! A busy day in Busytown!";
    message.classList.toggle("visible");
    this.classList.remove("wiggle");
    void this.offsetWidth;
    this.classList.add("wiggle");
  });
}
var car = document.querySelector(".car");
if (car) {
  var road = document.querySelector(".roadline");
  var path = document.getElementById("path");
  var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var paused = motion.matches;
  var progress = 0.08;
  var previous = 0;
  motion.addEventListener("change", function(event) {
    paused = event.matches;
  });
  function drive(time) {
    if (previous && !paused) {
      progress = (progress + Math.min(time - previous, 50) / 18000) % 1;
    }
    previous = time;
    var point = path.getPointAtLength(progress * path.getTotalLength());
    car.style.left = (point.x / 1200 * road.clientWidth) + "px";
    car.style.top = (road.getBoundingClientRect().top - road.parentElement.getBoundingClientRect().top + point.y) + "px";
    requestAnimationFrame(drive);
  }
  requestAnimationFrame(drive);
}