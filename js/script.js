import { shopItems } from "./shop.js";
//  Shop Items display
let shop = document.getElementById("productsBox");
// let trying = document.getElementsByClassName("");

// console.log(trying);

let cartBasket = JSON.parse(localStorage.getItem("suits")) || [];


// items loading to DOM functions
function loadItems() {
  return (shop.innerHTML = shopItems
    .map((item) => {
      let { image, title, description, price, uniqueId } = item;
      return `<div id=product-id-${uniqueId} class="product">
    <img src="${image}" alt="" />
    <div class="description">
      <span>${title}</span>
      <h5>${description}</h5>
      <div class="stars">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
      </div>      
    </div>
    <div class="priceBtns">
    <h4>${price}</h4>
    <a><ion-icon name="cart-outline" class="proCart"></ion-icon></a>
    </div>
  </div>`;
    })
    .join(""));
}

const generateProducts = () => {
  loadItems();
};
generateProducts();


















