// Sección Scroll
let seccion = document.querySelectorAll("section");
let navLink = document.querySelectorAll("nav div div ul li a");


window.onscroll = () => {
  seccion.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      // active de navbar link
      navLink.forEach(links => {
        links.classList.remove('active');
        document.querySelector("nav div div ul li a[href*=" + id + "]").classList.add('active');
      })
    }
  });
  // header
  let navbar = document.querySelector('.navbar');
  navbar.classList.toggle("sticky", window.scrollY > 100);
}

