//=============MENU SHOW Y HIDDEN============
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');



//VALIDATION
//If navToggle has been clicked

//SHOWING THE MENU
if(navToggle){
  navToggle.addEventListener("click", ()=>{
    navMenu.classList.add('show-menu');
  })

}

//HIDDING THE MENU
//Validate is constant exists
if(navClose){
  navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu');
  })
}

//REMOVING THE MOBILE MENU

const navLinks = document.querySelectorAll('.nav__link');

//Validate if the navLinks exist
if(navLinks){
  navLinks.forEach((e)=>{
    e.addEventListener('click', ()=>{
      navMenu.classList.remove('show-menu');
    })
  })
}


//SKILLS
//========Toggling Skills (Opening and closing skills)============
const skillsArrow = document.querySelectorAll('.skills__arrow');

skillsArrow.forEach((arrow)=>{
  arrow.addEventListener('click', (e)=>{
    const parent = e.currentTarget.parentElement.parentElement;
    parent.classList.toggle('skills__open');
  });
});


//QUALIFICATION TABS
const qualificationButtons = document.querySelectorAll('.qualification__button');
const educationContent = document.getElementById('education');
const workContent = document.getElementById('work');
const educatonBtn = document.getElementById('education-button');

window.addEventListener('DOMContentLoaded', ()=>{
  educationContent.classList.add('qualification__active');
  educatonBtn.classList.add('qualification__button-active');
})

qualificationButtons.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    const qualification = e.currentTarget.dataset.id;

    //Displaying the items
    if(qualification === 'Education'){
      educationContent.classList.add('qualification__active');
      workContent.classList.remove('qualification__active');
    }
    else if(qualification === 'Work'){
      workContent.classList.add('qualification__active');
      educationContent.classList.remove('qualification__active');
    }

    //Removing the active button
    qualificationButtons.forEach((e)=>{
      e.classList.remove('qualification__button-active');
    })

    //Adding active buttons
    e.currentTarget.classList.add('qualification__button-active');
  })
})

//=================SERVICES MODAL ===================
const modalViews = document.querySelectorAll('.services__button');

modalViews.forEach((service)=>{
  service.addEventListener("click", (e)=>{
    const parent = e.currentTarget.parentElement;
    //console.log(parent);
    const closeIcon = parent.querySelector('.services__modal-close');
    const serviceModal = parent.querySelector('.services__modal');

    serviceModal.classList.add('services__modal-open');

    closeIcon.addEventListener("click", ()=>{
      serviceModal.classList.remove('services__modal-open');
    })
    
  })

})






//CREATING A SLIDER FUNCTION
const createSlide=(slides, nextBtn, prevBtn)=>{
  
  //selecting items
  const slider = document.querySelectorAll(slides);
  const nextButton = document.querySelector(nextBtn);
  const prevButton = document.querySelector(prevBtn);

  //pushing the absolute items to the left
  slider.forEach(function(slide, index){
    slide.style.left = `${(index)*100}%`;
  })

  //setting the counter variable
  let count = 0;

  //Listening for the click event
  nextButton.addEventListener("click", ()=>{
    count++;
    slideItem();
  })

  prevButton.addEventListener("click", ()=>{
    count--;
    slideItem();
  })

  //sliding the item
  function slideItem(){
    if(count<slider.length-1){
      nextButton.style.display = "flex";
    }
    else{
      nextButton.style.display = "none";
    }

    if(count>0){
      prevButton.style.display = "flex";
    }
    else{
      prevButton.style.display = "none";
    }

    slider.forEach(function(slide){
      slide.style.transform = `translateX(-${count*100}%)`
    })
  }
}

//CALLING THE SLIDER FUNCTION
createSlide('.slide', '.button-next','.button-prev');
createSlide('.testimonial__content', '.testimonial-next', '.testimonial-prev');






//=======================SCROLL SECTION- ACTIVE LINK===================
//to change the link style, we can add an active link to the classList of the Link.
//We first need to check in which section we are in.
//We take every section's top Offset. When the page's y top offset is equal to it, we then take the section's id attribute and adding the active attribute to its link

//All this is done when the page is scrolled.
//selecting all the sections
const sections = document.querySelectorAll('section');

//selecting all the navigation links
const navLink = document.querySelectorAll('.nav__link');

//creating a scroll function
window.onscroll=()=>{
  let current = "";

  //looping through the sections
  sections.forEach((section)=>{
    //getting each section's top Offset.
    let sectionTop = section.offsetTop;

    //checking whether the page's y offset is greater or equal to the section top Offset
    //if it matches, we get the section's ID
    if(pageYOffset >= sectionTop - 60){
      current = section.getAttribute("id");
    }

  })

  //Looping through the navLinks
  navLink.forEach((li)=>{
    //removing any present active link
    li.classList.remove('active-link');

    if(li.classList.contains(current)){
      li.classList.add("active-link");
    }
  })
}


//CHANGE THE BACKGROUND OF THE HEADER
function scrollHeader(){
  const nav = document.getElementById('header');
  //when the scroll is greater than 200 view port height, add the scroll-header to the classList
  if(this.scrollY > 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');

}

window.addEventListener("scroll", scrollHeader);


//SHOW SCROLL TOP
function scrollUp(){
  //getting the scrolltop icon
  const scrollUp = document.getElementById('scroll-up');

  //when the scroll is greater than 560 vh, add the show scroll up to the classlist
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

// //adding the window's event listener
window.addEventListener("scroll", scrollUp);


// //DARK/LIGHT THEME
const themeButton = document.getElementById('theme-button');

//body element.
//const bodyElement = document.querySelector('body');
// const darkTheme = 'dark-theme';
const iconLightTheme = 'uil-sun';
const iconDarkTheme = 'uil-moon';

//grabbing the theme button
//let themeButton = document.getElementById('theme-button');

//adding an event listener on the theme button.

themeButton.onclick = function(){
  if(themeButton.classList.contains(iconDarkTheme)){
    themeButton.classList.remove(iconDarkTheme);
    themeButton.classList.add(iconLightTheme);
    document.body.classList.add('dark-theme');
  }
  else{
    themeButton.classList.remove(iconLightTheme);
    themeButton.classList.add(iconDarkTheme)
    document.body.classList.remove('dark-theme');
  }
}