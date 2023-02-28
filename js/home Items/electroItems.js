// // shop variables
// const electroSwiper = document.getElementById("electroSwiper-wrapper");


// // getting electroproducts implementation below
// class electroProducts {
//   async getelectroProducts(){
//     try {
//       let result = await fetch("electro.json");
//       let data = await result.json();
//       let electroproducts = data.items;
//       electroproducts = electroproducts.map(item => {
//         const {title, price, description} = item.fields;
//         const {id} = item.sys;
//         const image = item.fields.image.fields.file.url;
//         return {title, price, description, id, image};
//       })
//       return electroproducts;
//     } catch (error) {
//       console.log(error);      
//     }
//   }
// }

// // display electroproducts implementation
// class electroUI {
//   loadAllelectroproducts(electroproducts){
//     let itemResult = "";
//     electroproducts.forEach(product => {
//       itemResult += `
//       <!-- single Product -->
//       <div class="swiper-slide">
//       <div class="card">
//       <div class="product">
//       <img class="itemImage" src=${product.image} />
//         <div class="description">
//           <span class="itemTitle">${product.title}</span> 
//           <h5>${product.description}</h5>         
//         </div>
//         <div class="priceBtns">
        
//         <!--  -->
//         </div>    
//       </div>     
//       </div> 
//       </div>  
//       <!-- single product ends here -->
    
//       <!-- single product ends here -->
//       `      
//     });
//     electroSwiper.innerHTML = itemResult;
//   }

//   setApplication(){
//     cartBasket = Storage.getItemsFromCart(); 
//     this.setCartItemValues(cartBasket);
//     this.populateCart(cartBasket);
//     closeCartBtn.addEventListener("click", this.hideCart)
// }
  
//   }

  
 


// // DOM load event 
// document.addEventListener("DOMContentLoaded", ()=>{
//   const electroui = new UI();
//   const electroproducts = new electroProducts();
//   // application setup
//   electroui.setApplication();
//   //get product items
//   electroproducts.getelectroProducts().then(electroproducts => {
//     electroui.loadAllelectroproducts(electroproducts);
//   }).then( () => {
//     electroui.getAddToCartBtns();
//     electroui.cartLogic();
//   });
// })

