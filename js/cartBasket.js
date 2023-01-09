let cartBasket = JSON.parse(localStorage.getItem("suits")) || [];

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