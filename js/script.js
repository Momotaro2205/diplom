//header-bottom height when scrollY
window.addEventListener('scroll', function () {
    let = document.getElementById('header-height').classList.toggle('header-height-scroll', window.scrollY > 159);
});

//button to top
document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
   //show the button
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
   
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  
  //smooth scroll to anchor
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
    
    e.preventDefault();
    
    let href = this.getAttribute("href").substring(1);
    
    const scrollTarget = document.getElementById(href);
    
    //const topOffset = document.querySelector(".scrollto").offsetHeight;
    const topOffset = 100; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    
        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
    });
});