// adding responsive to the navbar class name to make it responsive
const myNavbar = document.querySelector('#myTopnav');
myNavbar.onclick = responsiveNav;

function responsiveNav() {
    if(myNavbar.className === 'topnav') {
        myNavbar.className += ' responsive';
    } else {
        myNavbar.className = 'topnav';
    }
}