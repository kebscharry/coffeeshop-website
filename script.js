let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classLis.tremove('active');
    cartItem.classList.tremove('active');

}
let searchForm= document.querySelector('.search-Form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.tremove('active');
}
let cartItem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classLis.tremove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classLis.tremove('active');
    cartItem.classList.tremove('active');

}