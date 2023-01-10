const shopItems = [
  {
    image: "../img/homeCart/image1.png",
    title: "Classic Fit Suit",
    description: "Classic, best suits man with a fuller build",
    price: "Ghc 1899",
    uniqueId: "classic",
  },
  {
    image: "../img/homeCart/image2.png",
    title: "Slim Fit Suit",
    description: "Contoured to the body, slim but has some room for comfort",
    price: "Ghc 1960",
    uniqueId: "slim",
  },
  {
    image: "../img/homeCart/image3.png",
    title: "Modern Fit Suit",
    description: "Slim fit, contoured, shorter length.",
    price: "Ghc 2899",
    uniqueId: "modern",
  },
  {
    image: "../img/homeCart/image4.png",
    title: "Patch Pocket Blazer",
    description:
      "Popular style from the 80s where the classic ‘V’ style was a mainstay",
    price: "Ghc 2099",
    uniqueId: "patchpocket",
  },
  {
    image: "../img/homeCart/image5.png",
    title: "Double Breasted Suit",
    description: "4, 6 or 8 buttons max, 6 being the most common",
    price: "Ghc 2800",
    uniqueId: "doublebreasted",
  },
  {
    image: "../img/homeCart/image6.png",
    title: "Single Breasted Suit",
    description: "Inclusion of either one, two or three buttons along the seam",
    price: "Ghc 1999",
    uniqueId: "singlebreasted",
  },
  {
    image: "../img/homeCart/image7.png",
    title: "Peak Lapel Suit",
    description:
      "Noticeable high peaks directed to shoulders, most popular style from the 16th century.",
    price: "Ghc 2444",
    uniqueId: "peak",
  },
  {
    image: "../img/homeCart/image8.png",
    title: "Shawl Lapel Suit",
    description:
      "Rounded sides, continuous curve with no hard edges, iconic smoking jacket style.",
    price: "Ghc 2223",
    uniqueId: "shawl",
  },
  {
    image: "../img/homeCart/image9.png",
    title: "Other clothings",
    description: "Classic, best suits man with a fuller build",
    price: "Ghc 899",
    uniqueId: "tshirts",
  },
  {
    image: "../img/homeCart/image10.png",
    title: "Other clothings",
    description: "Classic, best suits man with a fuller build",
    price: "Ghc 899",
    uniqueId: "longsleeves",
  },
  {
    image: "../img/homeCart/image11.png",
    title: "Other clothings",
    description: "Classic, best suits man with a fuller build",
    price: "Ghc 899",
    uniqueId: "shortsleeves",
  },
  {
    image: "../img/homeCart/image13.png",
    title: "Other clothings",
    description: "Classic, best suits man with a fuller build",
    price: "Ghc 899",
    uniqueId: "womensjacket",
  },
];
const labels = document.getElementById("labels");
const ordersInCart = document.getElementById("orderSummary");


let cartBasket = JSON.parse(localStorage.getItem("suits")) || [];
  
// load cart order items function below
const loadCartItems = () => {
 if (cartBasket.length !== 0) {
  return (ordersInCart.innerHTML = cartBasket.map((idx) => {
    console.log(idx)
    let {id , item, uniqueId} = idx;
    let findItems = shopItems.find((idx) => idx.id === id) || [];
    
    return `
    <div class="selectedCartItems">
    <img width="100" src=${findItems.image}/>
    <div class="details">
    <div class="cartPriceTitle">
    <h4 class="cartNamePrice">
    <p>${findItems.name}</p>
    <p class="cartItemPrice">${findItems.price}</p>
    </h4>
    <ion-icon name="trash-outline"></ion-icon>
    </div>
    <div class="cartButtons">
    <a onclick="addItem(${uniqueId})"><ion-icon name="cart-outline" class="proCart"></ion-icon></a>
    <div id=${uniqueId} class="quantity">${item}</div>
      <a onclick="removeItem(${uniqueId})"><ion-icon name="remove-circle-outline" class="takeOut"></ion-icon></a>
    </div>
    <h3></h3>
    </div>
    </div>
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

const addItem = (uniqueId) => {
  let uniqueItem = uniqueId;
  let findItems = cartBasket.find((idx) => idx.id === uniqueItem.id);

  if (findItems === undefined) {
    cartBasket.push({
      id: uniqueItem.id,
      quantity: 1,
    });
  } else {
    findItems.quantity += 1;
  }

  updateItems(uniqueItem.id);
  localStorage.setItem("suits", JSON.stringify(cartBasket));
};

// remove item function below
const removeItem = (uniqueId) => {
  let uniqueItem = uniqueId;
  let findItems = cartBasket.find((idx) => idx.id === uniqueItem.id);

  if (findItems === undefined) return;
  else if (findItems.quantity === 0) return;
  else {
    findItems.quantity -= 1;
  }
  updateItems(uniqueItem.id);
  cartBasket = cartBasket.filter((idx) => idx.quantity !== 0);
  loadCartItems();
  localStorage.setItem("suits", JSON.stringify(cartBasket));
};

// item quantity update
const updateItems = (id) => {
  let updateFoundItems = cartBasket.find((idx) => idx.id === id);

  document.getElementById(id).innerHTML = updateFoundItems.quantity;
  itemsInCart();
  itemsMobileInCart();
};


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