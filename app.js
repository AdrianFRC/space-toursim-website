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
const technology = document.querySelectorAll(".technology-img");

let startX = 0;
let scrolling = false;

function handleTouchStart(event) {
  startX = event.touches[0].pageX;
  scrolling = true;
}

function handleTouchMoveLeft(event) {
  if (!scrolling) return;

  const currentX = event.touches[0].pageX;
  const deltaX = startX - currentX;

  if (deltaX > 50) {
    scrolling = false;
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
      case "5":
        window.location.href = "technology-spaceport.html";
        break;
      case "6":
        window.location.href = "technology-capsule.html";
        break;
      case "7":
        window.location.href = "technology-vehicle.html";
        break;
    }
  }
}
function handleTouchMoveRight(event) {
  if (!scrolling) return;

  const currentX = event.touches[0].pageX;
  const deltaX = currentX - startX;

  if (deltaX > 50) {
    scrolling = false;
    switch (event.currentTarget.id) {
      case "1":
        window.location.href = "crew-engineer.html";
        break;
      case "2":
        window.location.href = "crew-commander.html";
        break;
      case "3":
        window.location.href = "crew-specialist.html";
        break;
      case "4":
        window.location.href = "crew-pilot.html";
        break;
      case "5":
        window.location.href = "technology-capsule.html";
        break;
      case "6":
        window.location.href = "technology-vehicle.html";
        break;
      case "7":
        window.location.href = "technology-spaceport.html";
        break;
    }
  }
}

function handleTouchEnd() {
  scrolling = false;
}

crew.forEach((members) => {
  members.addEventListener("touchstart", handleTouchStart);
  members.addEventListener("touchmove", handleTouchMoveLeft);
  members.addEventListener("touchmove", handleTouchMoveRight);
  members.addEventListener("touchend", handleTouchEnd);
});

technology.forEach((tech) => {
  tech.addEventListener("touchstart", handleTouchStart);
  tech.addEventListener("touchmove", handleTouchMoveLeft);
  tech.addEventListener("touchmove", handleTouchMoveRight);
  tech.addEventListener("touchend", handleTouchEnd);
});


window.onload = adjustElementDisplay;
window.onresize = adjustElementDisplay;

