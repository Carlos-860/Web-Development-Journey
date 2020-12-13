// Slide nav-list out when navbar is clicked
let navbar = document.querySelector('.nav-bar');
let navlist = document.querySelector('.nav-list');

navbar.addEventListener('click', () => {
  navlist.classList.toggle('open');
});

// Close nav-list when clicking on any link
let links = document.querySelectorAll('.nav-list li a');
console.log(typeof links);
links.forEach((links) => {
  links.addEventListener('click', () => {
    navlist.classList.remove('open');
  });
});
