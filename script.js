let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1= 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-1 .box-1'
    )];
    for(var i = currentItem1; i< currentItem1+4; i++) {
        boxes[i].style.display= 'inline-block';
    }
    currentItem1 += 4;
    if(curretItem1 >= boxes.length) {
        loadMoreBtn1.style.display='none'
    }
}


let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2= 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-2 .box-2'
    )];
    for(var i = currentItem2; i< currentItem2+4; i++) {
        boxes[i].style.display= 'inline-block';
    }
    currentItem2 += 4;
    if(curretItem2 >= boxes.length) {
        loadMoreBtn2.style.display='none'
    }
}

let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3= 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-3 .box-3'
    )];
    for(var i = currentItem3; i< currentItem3+4; i++) {
        boxes[i].style.display= 'inline-block';
    }
    currentItem3 += 4;
    if(curretItem3 >= boxes.length) {
        loadMoreBtn3.style.display='none'
    }
}

function myFunction() {
    var x = document.getElementById("My-nav-header");
    if (x.className === "nav-header") {
      x.className += " responsive";
    } else {
      x.className = "nav-header";
    }
  }

  /*MOSTRAR MENU */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 showMenu('nav__toggle','nav__menu')