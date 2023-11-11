// Toggle Class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle Class Active untuk search form

// Toggle class active untuk shopping cart

// Kilk di luar elemen
const hamburger = document.querySelector('#hamburger-menu');
// const sb = document.querySelector('#search-button');
// const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    // if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    //     searchForm.classList.remove('active');
    // }

    // if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    //     shoppingCart.classList.remove('active');
    // }
}); 