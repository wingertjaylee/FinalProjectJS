// main.js

// Show a welcome message in the browser console
console.log("Welcome Hockey Fan to the NHL Hockey Hub!");

document.addEventListener("DOMContentLoaded", function () {
  // Time-based greeting
  var hour = new Date().getHours();
  var message = "";

  if (hour < 12) {
    message = "Good morning, hockey fan!";
  } else if (hour < 18) {
    message = "Good afternoon, ready for a face-off?";
  } else {
    message = "Good evening, game night vibes!";
  }

  var greet = document.createElement("p");
  greet.textContent = message;
  greet.style.padding = "10px";
  greet.style.backgroundColor = "#001f4d";
  greet.style.color = "white";
  greet.style.textAlign = "center";

  document.body.prepend(greet);

  // Navbar highlight
  var navLinks = document.querySelectorAll('.navbar a');
  for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].href === window.location.href) {
      navLinks[i].style.color = "yellow";
    }
  }
});

// Handle jersey click to play goal horn sound
function playHorn() {
  var horn = document.getElementById("goalSound");
  horn.play();
}

// Enlarge image in modal
function enlargeImage(img) {
  var modal = document.getElementById('modal');
  var modalImg = document.getElementById('modal-img');
  modal.style.display = 'block';
  modalImg.src = img.src;
}

// Close modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}