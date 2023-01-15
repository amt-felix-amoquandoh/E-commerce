// import { shopItems } from "./shop.js";
// shop variables
const productArea = document.getElementById("productsBox");
const cartButton = document.querySelector(".cartBox");
const closeCartBtn = document.querySelector(".closeCart");
const ClearCartBtn = document.querySelector(".cartFooterButton");
const cartArea =  document.querySelector(".cart");
const cartOverlay = document.querySelector(".cartOverlay");
const cartItemsQuantity = document.getElementById("itemsUpdate");
const cartTotal = document.querySelector(".ItemsTotal");
const overlayCartContent = document.querySelector(".overlayCartContent");

//cart
let cartBasket = [];

//add Buttons
let addButtons = [];

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

          //show the cart overlay
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
    console.log(cartTotal, cartItemsQuantity);
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
}


// DOM load event 
document.addEventListener("DOMContentLoaded", ()=>{
  const ui = new UI();
  const products = new Products();

  //get product items
  products.getProducts().then(products => {
    ui.loadAllproducts(products);
    Storage.saveCartItems(products);
  }).then( () => {
    ui.getAddToCartBtns();
  });
})





























































