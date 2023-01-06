const mobileMenu = document.getElementById("mobileMenu");
const navMenuItems = document.getElementById("navItems");
const navMenuClose = document.getElementById("mobileMenuClose");
const shopICon = document.querySelector(".mobileNav");
const shopBagde = document.querySelector(".cartBox");

// Mobile and Tablet NAvbar implementation//
if (mobileMenu) {
   mobileMenu.addEventListener("click", () => {
       navMenuItems.classList.add("active");
       mobileMenu.style.display = "none";
       shopICon.style.display = "none";
       shopBagde.style.display = "none";
       navMenuClose.style.display = "flex"; 
   })    
}


if (navMenuClose) {
 navMenuClose.addEventListener("click", () => {
      navMenuItems.classList.remove("active");
      mobileMenu.style.display = "flex" 
      shopICon.style.display = "flex";      
    })
}


const shop = document.getElementById("productsBox");
let shopItems = [
  {
      image: "./img/cart/homeCart/5.jpg",
      title: "Classic Fit Suit",
      description: "Classic, best suits man with a fuller build",
      price: "Ghc 1899",
      uniqueId: "classic"
  },
  {
      image: "./img/cart/homeCart/2.webp",
      title: "Slim Fit Suit",
      description: "Contoured to the body, slim but has some room for comfort",
      price: "Ghc 1960",
      uniqueId: "slim"
  },
  {
      image: "./img/cart/homeCart/3.webp",
      title: "Modern Fit Suit",
      description: "Slim fit, contoured, shorter length.",
      price: "Ghc 2899",
      uniqueId: "modern"
  },
  {
      image: "./img/cart/homeCart/4.png",
      title: "Patch Pocket Blazer",
      description: "Popular style from the 80s where the classic ‘V’ style was a mainstay",
      price: "Ghc 2099",
      uniqueId: "patchpocket"
  },
  {
      image: "./img/cart/homeCart/1.png",
      title: "Double Breasted Suit",
      description: "4, 6 or 8 buttons max, 6 being the most common",
      price: "Ghc 2800",
      uniqueId: "doublebreasted"
  },
  {
      image: "./img/cart/homeCart/6.webp",
      title: "Single Breasted Suit",
      description: "Inclusion of either one, two or three buttons along the seam",
      price: "Ghc 1999",
      uniqueId: "singlebreasted"
  },
  {
      image: "./img/cart/homeCart/7.jpg",
      title: "Peak Lapel Suit",
      description: "Noticeable high peaks directed to shoulders, most popular style from the 16th century.",
      price: "Ghc 2444",
      uniqueId: "peak"
  },
  {
      image: "./img/cart/homeCart/8.webp",
      title: "Shawl Lapel Suit",
      description: "Rounded sides, continuous curve with no hard edges, iconic smoking jacket style.",
      price: "Ghc 2223",
      uniqueId: "shawl"
  },
  {
      image: "./img/cart/homeCart/other clothes/1.jpg",
      title: "Other clothings",
      description: "Classic, best suits man with a fuller build",
      price: "Ghc 899",
      uniqueId: "tshirts"
  },
  {
      image: "./img/cart/homeCart/other clothes/4.jpg",
      title: "Other clothings",
      description: "Classic, best suits man with a fuller build",
      price: "Ghc 899",
      uniqueId: "longsleeves"
  },
  {
      image: "./img/cart/homeCart/other clothes/2.jpg",
      title: "Other clothings",
      description: "Classic, best suits man with a fuller build",
      price: "Ghc 899",
      uniqueId: "shortsleeves"
  },
  {
      image: "./img/cart/homeCart/other clothes/3.jpg",
      title: "Other clothings",
      description: "Classic, best suits man with a fuller build",
      price: "Ghc 899",
      uniqueId: "womensjacket"
  },
  {
    image: "./img/cart/homeCart/other clothes/5.jpg",
    title: "Other clothings",
    description: "Classic, best suits man with a fuller build",
    price: "Ghc 899",
    uniqueId: "womensjacket"
},
{
  image: "./img/cart/homeCart/other clothes/6.png",
  title: "Other clothings",
  description: "Classic, best suits man with a fuller build",
  price: "Ghc 899",
  uniqueId: "womensjacket"
},
{
  image: "./img/cart/homeCart/other clothes/7.png",
  title: "Other clothings",
  description: "Classic, best suits man with a fuller build",
  price: "Ghc 899",
  uniqueId: "womensjacket"
},
{
  image: "./img/cart/homeCart/other clothes/8.png",
  title: "Other clothings",
  description: "Classic, best suits man with a fuller build",
  price: "Ghc 899",
  uniqueId: "womensjacket"
}

]

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







