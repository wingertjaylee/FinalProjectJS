// main.js

// Show a welcome message in the browser console
console.log("Welcome Hockey Fan to the NHL Hockey Hub!");

// Show dynamic greeting based on time
document.addEventListener("DOMContentLoaded", function () {
    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
        message = "Good morning, hockey fan!";
    } else if (hour < 18) {
        message = "Good afternoon, ready for a face-off?";
    } else {
        message = "Good evening, let’s drop the puck!";
    }

    const greetingEl = document.getElementById("greeting");
    if (greetingEl) {
        greetingEl.textContent = message;
    } else {
        console.warn("No #greeting element found!");
    }
});

  var greet = document.createElement("p");
  greet.classList.add("greeting");
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

// Handle jersey click to play goal horn sound
function playHorn() {
    const horn = document.getElementById("goalSound");
    if (horn) {
        horn.play().catch(err => {
            console.warn("Playback failed:", err);
        });
    }
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