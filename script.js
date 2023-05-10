const navItems = document.querySelector('.nav-items');
const product = document.querySelector('.nav-item.product');
const productMenu = document.getElementsByClassName('product-menu')[0];
const company = document.querySelector('.nav-item.company');
const companyMenu = document.getElementsByClassName('company-menu')[0];
const connect = document.querySelector('.nav-item.connect');
const connectMenu = document.getElementsByClassName('connect-menu')[0];

product.addEventListener('click', () => {
    productMenu.classList.toggle('expand');
});

company.addEventListener('click', () => {
    companyMenu.classList.toggle('expand');
});

connect.addEventListener('click', () => {
    connectMenu.classList.toggle('expand');
});

document.addEventListener('click', (event) => {
    if (!navItems.contains(event.target)) {
      productMenu.classList.remove('expand');
      companyMenu.classList.remove('expand');
      connectMenu.classList.remove('expand');
    }
  });


// const company = document.getElementByClassName('company')
// const connect = document.getElementByClassName('connect')