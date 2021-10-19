var typed = new Typed(".typing", {
    strings: [" Front-End Developer", " Designer", " Certified Microsoft Office Specialist"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true
});

    //javascript for navigation bar effect on scroll
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
      });
  
      //javascript for responsive navigation sidebar menu
      var menu = document.querySelector('.menu');
      var menuBtn = document.querySelector('.menu-btn');
  
      menuBtn.addEventListener("click", () => {
        menu.classList.toggle('active');
      });


      function myFunction(x) {
        x.classList.toggle("change");
      }

