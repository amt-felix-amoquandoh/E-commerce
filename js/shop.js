let shop = document.getElementById("productsBox");
const labels = document.getElementById("labels");
const ordersInCart = document.getElementById("orderSummary");


let cartBasket = JSON.parse(localStorage.getItem("suits")) || [];


// items loading to DOM functions
function loadItems(){
  return (shop.innerHTML = shopItems.map((item) => {
    let {image, title, description, price,uniqueId} = item;
    let searchItems = cartBasket.find((idx) => idx.id === uniqueId) || [];
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
      <h4>${ price}</h4>
    </div>
    <a onclick="addItem(${uniqueId})"><ion-icon name="cart-outline" class="proCart"></ion-icon></a>
    <div id=${uniqueId} class="quantity">
    ${searchItems.quantity === undefined? 0: searchItems.quantity}
    </div>
      <a onclick="removeItem(${uniqueId})"><ion-icon name="remove-circle-outline" class="takeOut"></ion-icon></a>
  </div>`
}).join(""))
}

const generateProducts = () => {
    loadItems();
}
generateProducts();


// Product adding and removing functions
// add item function below
const addItem = (uniqueId) => {
  let uniqueItem = uniqueId;
  let findItems = cartBasket.find((idx) => idx.id === uniqueItem.id);

  if (findItems === undefined) {
    cartBasket.push({
      id: uniqueItem.id,
      quantity: 1
    })
  } else {
    findItems.quantity += 1;
  }
  
  updateItems(uniqueItem.id);
  localStorage.setItem("suits", JSON.stringify(cartBasket));
}


// remove item function below
const removeItem = (uniqueId) => {
  let uniqueItem = uniqueId;
  let findItems = cartBasket.find((idx) => idx.id === uniqueItem.id);

  if (findItems === undefined) return
  else if (findItems.quantity === 0) return;
   else {
    findItems.quantity -= 1;
  }
  updateItems(uniqueItem.id);
  cartBasket = cartBasket.filter((idx) => idx.quantity !== 0);
 
  localStorage.setItem("suits", JSON.stringify(cartBasket));
}

// item quantity update
const updateItems = (id) => {
  let updateFoundItems = cartBasket.find((idx) => idx.id === id);
  
  document.getElementById(id).innerHTML = updateFoundItems.quantity;
  itemsInCart();
  itemsMobileInCart();
}

const itemsInCart = () => {
  let cartIcon = document.getElementById("itemsUpdate");
  cartIcon.innerHTML = cartBasket.map((idx) => idx.quantity).reduce((x, y) => x + y, 0);
}

const itemsMobileInCart = () => {
  let cartIcon = document.getElementById("mobileItemsUpdate");
  cartIcon.innerHTML = cartBasket.map((idx) => idx.quantity).reduce((x, y) => x + y, 0);
}


itemsInCart();
itemsMobileInCart();


let loadCartItems = () => {
  if (cartBasket.length !== 0) {
   return (ordersInCart.innerHTML = cartBasket.map((idx) => {
     return `
     <div class="selectedCartItems">oh fuckkk</div>
     `
   }).join(""));
  } else {
   ordersInCart.innerHTML = ``;
   labels.innerHTML = `
   <h3><b>No Items in Cart</b></h3>
   <a href="./shop.html">
   <button class="backToShopBtn">Back to Shop</button>
   </a>
   `
  }
 }
 
 loadCartItems();
 









