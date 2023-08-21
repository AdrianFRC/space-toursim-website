function hideMenu() {
  let navbar = document.getElementById("navbar");
  navbar.style.display = "none";
}

function showMenu() {
  let navbar = document.getElementById("navbar");
  navbar.style.display = "block";
}

function adjustElementDisplay() {
  let navbar = document.getElementById("navbar");

  if (window.innerWidth >= 600) {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
}

const crew = document.querySelectorAll(".crew-portrait");

let startX = 0;
let scrolling = false;

function handleTouchStart(event) {
  startX = event.touches[0].pageX;
  scrolling = true;
}

function handleTouchMove(event) {
  if (!scrolling) return;

  const currentX = event.touches[0].pageX;
  const deltaX = startX - currentX;

  if (deltaX > 50) {
    scrolling = false;
    console.log(event.currentTarget.id);
    switch (event.currentTarget.id) {
      case "1":
        window.location.href = "crew-specialist.html";
        break;
      case "2":
        window.location.href = "crew-pilot.html";
        break;
      case "3":
        window.location.href = "crew-engineer.html";
        break;
      case "4":
        window.location.href = "crew-commander.html";
        break;
    }
  }
}

function handleTouchEnd() {
  scrolling = false;
}

crew.forEach((members) => {
  members.addEventListener("touchstart", handleTouchStart);
  members.addEventListener("touchmove", handleTouchMove);
  members.addEventListener("touchend", handleTouchEnd);
});

window.onload = adjustElementDisplay;
window.onresize = adjustElementDisplay;
