let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Modal elements
let modal = document.getElementById("projectModal");
let modalTitle = document.getElementById("modalTitle");
let modalImage = document.getElementById("modalImage");
let modalDescription = document.getElementById("modalDescription");
let closeBtn = document.querySelector(".close");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a [href*=" + id + "]").classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Modal functionality
function openModal(title, imageSrc, description) {
  modalTitle.textContent = title;
  modalImage.src = imageSrc;
  modalDescription.textContent = description;
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
}

// Event listeners for modal
closeBtn.onclick = closeModal;

// Close modal when clicking outside of it
window.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

// Add click event listeners to all project boxes
document.addEventListener("DOMContentLoaded", () => {
  const projectBoxes = document.querySelectorAll(".projects-box");
  
  projectBoxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      // Don't open modal if clicking on the link icon
      if (e.target.closest(".projects-info a")) {
        return;
      }
      
      const title = box.querySelector("h4").textContent;
      const image = box.querySelector("img").src;
      const description = box.querySelector("p").textContent;
      
      openModal(title, image, description);
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('projectModal');
  const modalDesc = document.getElementById('modalDescription');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');
  const projectBoxes = document.querySelectorAll('.projects-box');

  projectBoxes.forEach(box => {
    box.addEventListener('click', function(e) {
      // Prevent link clicks from triggering modal
      if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) return;
      const desc = box.getAttribute('data-description') || '';
      const title = box.querySelector('h4') ? box.querySelector('h4').textContent : '';
      const img = box.querySelector('img') ? box.querySelector('img').src : '';
      modalDesc.textContent = desc;
      modalTitle.textContent = title;
      modalImage.src = img;
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) modal.style.display = 'none';
  });
});
