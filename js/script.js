// import { shopItems } from "./shop.js";
// shop variables
const productArea = document.getElementById("productsBox");
const cartButton = document.querySelector(".cartTransBtn");
const closeCartBtn = document.querySelector(".closeCart");
const ClearCartBtn = document.querySelector(".cartFooterButton");
const cartArea =  document.querySelector(".cart");
const cartOverlay = document.querySelector(".cartOverlay");
const cartItemsQuantity = document.getElementById("itemsUpdate");
const mobileItemsQuantity = document.getElementById("mobileItemsUpdate");
const cartTotal = document.querySelector(".ItemsTotal");
const overlayCartContent = document.querySelector(".overlayCartContent");

//cart
let cartBasket = [];

//add Buttons
let addButtons = [];

function displayCartOverlay(){
  cartOverlay.classList.toggle("transparentBack");
  cartArea.classList.toggle("showCart");
}

// getting products implementation below
class Products {
  async getProducts(){
    try {
      let result = await fetch("shop.json");
      let data = await result.json();
      let products = data.items;
      products = products.map(item => {
        const {title, price, description} = item.fields;
        const {id} = item.sys;
        const image = item.fields.image.fields.file.url;
        return {title, price, description, id, image};
      })
      return products;
    } catch (error) {
      console.log(error);      
    }
  }
}

// display products implementation
class UI {
  loadAllproducts(products){
    let itemResult = "";
    products.forEach(product => {
      itemResult += `
      <!-- single Product -->
      <div class="product">
        <img class="itemImage" src=${product.image} />
        <div class="description">
          <span class="itemTitle">${product.title}</span>
          <h5>${product.description}</h5>
          <div class="stars">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </div> 
        </div>
        <div class="priceBtns">
          <h4 class="itemPrice">Ghc ${product.price}</h4>
        <a><ion-icon name="cart-outline" class="proCart" data-id = ${product.id}></ion-icon></a>
        <!--  -->
        </div>
      </div> 
      <!-- single product ends here -->
      `      
    });
    productArea.innerHTML = itemResult;
  }
  getAddToCartBtns(){
    const addToCartButtons = [...document.querySelectorAll(".proCart")];
    addButtons = addToCartButtons;
    addToCartButtons.forEach(button => {
      let id = button.dataset.id;
      let alreadySelectedItem = cartBasket.find(item => item.id === id);
      if (alreadySelectedItem) {
        button.setAttribute("name", "stop-circle-outline");
        button.disabled = true;        
      }
        button.addEventListener("click", (event) => {
          event.target.setAttribute("name", "stop-circle-outline");
          event.target.disabled = true; 
          //get item from products
          let selectedItem = {...Storage.getProduct(id), amount: 1};
          
          //add item to cart
          cartBasket = [...cartBasket, selectedItem];
          
          //save in local storage
          Storage.saveCart(cartBasket);
          //set cart values
          this.setCartItemValues(cartBasket);
          //display cart item 
           this.addCartItemToCart(selectedItem);
          //show the cart overlay
          this.displayCartOverlay();
        })
    })
  }
  setCartItemValues(cartBasket){
    let itemTotal = 0;
    let itemsTotal = 0;
    cartBasket.map(item => {
      itemTotal += item.price * item.amount;
      itemsTotal += item.amount;
    })
    cartTotal.innerText = parseFloat(itemTotal.toFixed(2));
    cartItemsQuantity.innerText = itemsTotal; 
    mobileItemsQuantity.innerText = itemsTotal;  
  }
  addCartItemToCart(item){
     const itemDiv = document.createElement("div");
     itemDiv.classList.add("cartItem");
     itemDiv.innerHTML = `
     <img src=${item.image} alt="">          
     <div>
      <h4>${item.title}</h4>
      <h5>Ghc ${item.price}</h5>
      <span class="removeItem">
        <ion-icon name="remove-circle-outline" data-id = ${item.id}></ion-icon>
      </span>
     </div>
     <div>
      <ion-icon name="caret-up-outline" data-id = ${item.id}></ion-icon>
      <p class="itemAmount">${item.amount}</p>
      <ion-icon name="caret-down-outline" data-id = ${item.id}></ion-icon>
     </div>
     `;
     overlayCartContent.appendChild(itemDiv);
  }

  displayCartOverlay(){
     cartOverlay.classList.add("transparentBack");
     cartArea.classList.add("showCart");
  }
  setApplication(){
      cartBasket = Storage.getItemsFromCart(); 
      this.setCartItemValues(cartBasket);
      this.populateCart(cartBasket);
      closeCartBtn.addEventListener("click", this.hideCart)
  }
  populateCart(cartBasket){
    cartBasket.forEach(item => this.addCartItemToCart(item));

  }
  hideCart(){
    cartOverlay.classList.remove("transparentBack");
     cartArea.classList.remove("showCart");
  }
}


//saving cart items to local storage
class Storage{
   static saveCartItems (products){
    localStorage.setItem("products", JSON.stringify(products));
   }

   static getProduct(id){
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find(product => product.id === id);
   }

   static saveCart(cartBasket){
    localStorage.setItem("cartbasket", JSON.stringify(cartBasket))
   }

   static getItemsFromCart (){
    return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
   }
}


// DOM load event 
document.addEventListener("DOMContentLoaded", ()=>{
  const ui = new UI();
  const products = new Products();
  // application setup
  ui.setApplication();
  //get product items
  products.getProducts().then(products => {
    ui.loadAllproducts(products);
    Storage.saveCartItems(products);
  }).then( () => {
    ui.getAddToCartBtns();
  });
})































































