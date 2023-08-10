
  // Get references to the hamburger icon and the navigation menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Add a click event listener to the hamburger icon
  hamburger.addEventListener("click", () => {
    // Toggle the active class on the hamburger icon
    hamburger.classList.toggle("active");

    // Toggle the active class on the navigation menu
    navMenu.classList.toggle("active");
  });

  // Add a click event listener to the navigation links (for mobile devices)
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Hide the navigation menu when a link is clicked (for mobile devices)
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
