
// ======================================  Change backGround Header  ======================================== 

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=========================================== SERVICES MODAL =========================================*/

const modalViews = document.querySelectorAll('.services--modal'),
      modalBtns = document.querySelectorAll('.services--button'),
      modalClose = document.querySelectorAll('.services--modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}      

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click' , ()=> {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/*==================================== MIXITUP FILTER PORTFOLIO ===================================*/

// let mixerProtfolio = mixitup('.work--container', {
//     selectors: {
//         target: '.work--card'
//     },
//     animation: {
//         duration: 300
//     },

// });

// /* Link active work */ 
// const linkWork = document.querySelectorAll('.work--item')

// function activeWork () {
//     linkWork.forEach(l => l.classList.remove('active-work'))
//     this.classList.add('active-work')
// }

// linkWork.forEach(l => l.addEventListener('click', activeWork))

   

/*============================================= SWIPER TESTIMONIAL =====================================*/

let swiperTestimoial = new Swiper(".testimonial--container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,


    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
    },
});

// ==========================================  Scroll sections active Link  ======================================

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav--menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav--menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// // =============================================  Dark Light Theme  ==========================================

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the ligth-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============================================== SCROLL REVEAL ANIMATION =====================================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal('.home--data, .section--title, .section--subtitle, .work')
sr.reveal('.home--handel, .skills--content', {delay: 700})
sr.reveal('.home--social, .home--scroll, .testimonial', {delay: 900, origin: 'bottom'})
sr.reveal('.about--box-img, .services--container, .contact-left', {delay: 900, origin: 'left'})
sr.reveal('.about--data, .contact-right', {delay: 900, origin: 'right'})



// =============================================  IMGES-MODEL  ===============================================


let activeimgpop = document.querySelector(".active-img-pop");
let imgcontntjs = document.querySelectorAll(".row .box");
let divimg = document.querySelector(".div-img");



imgcontntjs.forEach((element) => {
    element.addEventListener("click", function(eo) {
        showactiveimg();
        let getsrc = element.getElementsByTagName("img")[0].src;
        let srcimg = divimg.getElementsByTagName("img")[0];
        srcimg.src = getsrc;
        console.log(element)
    });
});

activeimgpop.addEventListener("click", function() {
    removeshowactiveimg();
});

function removeshowactiveimg() {
    activeimgpop.classList.remove("active");
}

function showactiveimg() {
    activeimgpop.classList.add("active");
}

//=============================================================================================


let BtnShow  = document.getElementById('Btn-show-more')
let currentItem = 4;

BtnShow.onclick = () =>{
   let boxes = [...document.querySelectorAll('.work--container .work--card ')];
   for (var i = currentItem; i < currentItem + 2; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 2;

   if(currentItem >= boxes.length){
    BtnShow.style.display = 'none';
   }
}

// =============================================================================================

