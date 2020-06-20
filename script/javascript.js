var body = document.querySelector('body');
//moveCar
window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("car").className = "movecar";
    } else {
        document.getElementById("car").className = "car";
    }
}
//moveCar
// responsive tablet
if (body.clientWidth > 740 && body.clientWidth < 1024) {
    function myFunction() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            document.getElementById("car").className = "movecar";
        } else {
            document.getElementById("car").className = "car";
        }
    }
}
//responsive mobile
if (body.clientWidth < 740) {
    function myFunction() {
        if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
            document.getElementById("car").className = "movecar";
        } else {
            document.getElementById("car").className = "car";
        }
    }
}





// color car
var bg = document.querySelector('#bg');

function randomColor() {
    return Math.floor(Math.random() * 255);
}

function changeColor() {
    bg.style.backgroundColor = 'rgba(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')'
}
setInterval('changeColor()', 1000);
// color car

// navbar btn
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const navbarSub = document.querySelector('.navbar-sub__nav');
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navbarSub.style.transform = 'translateX(0%)';
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navbarSub.style.transform = 'translateX(-100%)';
        menuOpen = false;
    }
});

function hideNav() {
    navbarSub.style.transform = 'translateX(-100%)';
    menuBtn.classList.remove('open');
    navbarSub.style.transform = 'translateX(-100%)';
    menuOpen = false;
}