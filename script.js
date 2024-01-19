const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page3Animation() {
  var elem = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");

  elem.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  elem.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      var image = e.getAttribute("data-image");
      // console.log(e);
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

// swiper

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 60
  });
}

function menuAnimation() {
    var menu = document.querySelector('nav h3')
    var fullScr = document.querySelector('#full-scr')
    var navImg = document.querySelector('nav img')
    var flag = 0;

    menu.addEventListener("click" ,function(){
        if(flag == 0){
            fullScr.style.top = 0;
            navImg.style.opacity = 0;
            flag = 1
        } else {
            fullScr.style.top = "-100%";
            navImg.style.opacity = 1;
            flag = 0; 
        }
    });
}

function loaderAnimation() {  
    var loader = document.querySelector('#loader')
    setTimeout(() => {
        loader.style.top = "-100%"
    }, 4200)
}

page3Animation()
swiperAnimation();
menuAnimation()
loaderAnimation()